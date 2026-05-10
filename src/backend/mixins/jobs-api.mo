import Map "mo:core/Map";
import Time "mo:core/Time";
import JobsTypes "../types/jobs";
import UsersTypes "../types/users";
import Common "../types/common";
import JobsLib "../lib/jobs";
import UsersLib "../lib/users";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

mixin (
  jobs : Map.Map<Text, JobsTypes.Job>,
  applications : Map.Map<Text, JobsTypes.Application>,
  workerProfiles : Map.Map<Common.UserId, UsersTypes.WorkerProfile>,
  employerProfiles : Map.Map<Common.UserId, UsersTypes.EmployerProfile>,
  counter : { var nextJobId : Nat; var nextAppId : Nat },
) {
  let jobsState : JobsLib.State = { jobs; applications; counter };
  let jobsUsersState : UsersLib.State = { workerProfiles; employerProfiles };

  public shared ({ caller }) func postJob(
    input : JobsTypes.JobInput
  ) : async JobsTypes.Job {
    // Require employer profile
    switch (jobsUsersState.employerProfiles.get(caller)) {
      case null { Runtime.trap("Employer profile required to post a job") };
      case (?_) { JobsLib.postJob(jobsState, caller, input) };
    };
  };

  public query func getJobs(
    filter : JobsTypes.JobFilter,
    offset : Nat,
    limit : Nat,
  ) : async [JobsTypes.Job] {
    JobsLib.getJobs(jobsState, filter, offset, limit);
  };

  public query func getJob(jobId : Text) : async ?JobsTypes.Job {
    JobsLib.getJob(jobsState, jobId);
  };

  public query func getJobsByEmployer(employerPrincipal : Common.UserId) : async [JobsTypes.Job] {
    JobsLib.getJobsByEmployer(jobsState, employerPrincipal);
  };

  public shared ({ caller }) func applyToJob(jobId : Text) : async ?JobsTypes.Application {
    JobsLib.applyToJob(jobsState, caller, jobId);
  };

  public shared ({ caller }) func getApplicationsForJob(
    jobId : Text
  ) : async [JobsTypes.Application] {
    // Only employer who owns the job can see applications
    let isEmployer = switch (jobsState.jobs.get(jobId)) {
      case null false;
      case (?job) Principal.equal(job.employerPrincipal, caller);
    };
    JobsLib.getApplicationsForJob(jobsState, jobId, isEmployer);
  };

  public shared ({ caller }) func getMyApplications() : async [JobsTypes.Application] {
    JobsLib.getMyApplications(jobsState, caller);
  };

  public shared ({ caller }) func respondToApplication(
    applicationId : Text,
    accept : Bool,
  ) : async ?JobsTypes.Application {
    JobsLib.respondToApplication(jobsState, caller, applicationId, accept);
  };

  public shared ({ caller }) func markJobComplete(
    jobId : Text,
    applicationId : Text,
  ) : async ?JobsTypes.Job {
    let result = JobsLib.markJobComplete(jobsState, caller, jobId, applicationId);
    switch (result) {
      case null null;
      case (?completedJob) {
        // Update worker stats: find the accepted application worker
        switch (jobsState.applications.get(applicationId)) {
          case null {};
          case (?app) {
            UsersLib.incrementWorkerCompletedJobs(jobsUsersState, app.workerPrincipal, completedJob.payAmount);
          };
        };
        UsersLib.incrementEmployerCompletedHires(jobsUsersState, caller);
        ?completedJob;
      };
    };
  };

  public shared ({ caller }) func submitRating(
    targetPrincipal : Common.UserId,
    isWorker : Bool,
    stars : Nat,
    comment : ?Text,
  ) : async Bool {
    let rating : Common.Rating = {
      fromPrincipal = caller;
      stars;
      comment;
      createdAt = Time.now();
    };
    if (isWorker) {
      UsersLib.addRatingToWorker(jobsUsersState, targetPrincipal, rating);
    } else {
      UsersLib.addRatingToEmployer(jobsUsersState, targetPrincipal, rating);
    };
  };
}
