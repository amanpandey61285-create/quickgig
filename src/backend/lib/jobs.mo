import Map "mo:core/Map";
import Time "mo:core/Time";
import JobsTypes "../types/jobs";
import Common "../types/common";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";

module {
  public type State = {
    jobs : Map.Map<Text, JobsTypes.Job>;
    applications : Map.Map<Text, JobsTypes.Application>;
    counter : { var nextJobId : Nat; var nextAppId : Nat };
  };

  public func postJob(
    state : State,
    caller : Common.UserId,
    input : JobsTypes.JobInput,
  ) : JobsTypes.Job {
    let id = state.counter.nextJobId;
    state.counter.nextJobId += 1;
    let job : JobsTypes.Job = {
      id = id.toText();
      employerPrincipal = caller;
      title = input.title;
      description = input.description;
      category = input.category;
      payAmount = input.payAmount;
      duration = input.duration;
      timing = input.timing;
      workerCount = input.workerCount;
      location = input.location;
      urgent = input.urgent;
      skillsRequired = input.skillsRequired;
      status = #open;
      createdAt = Time.now();
      applicationCount = 0;
    };
    state.jobs.add(job.id, job);
    job;
  };

  public func getJobs(
    state : State,
    filter : JobsTypes.JobFilter,
    offset : Nat,
    limit : Nat,
  ) : [JobsTypes.Job] {
    let all = state.jobs.values().filter(func(j : JobsTypes.Job) : Bool {
        let categoryMatch = switch (filter.category) {
          case null true;
          case (?cat) j.category == cat;
        };
        let urgentMatch = switch (filter.urgent) {
          case null true;
          case (?u) j.urgent == u;
        };
        let statusMatch = switch (filter.status) {
          case null true;
          case (?s) j.status == s;
        };
        categoryMatch and urgentMatch and statusMatch;
      }).toArray();
    // Sort descending by createdAt
    let sorted = all.sort(func(a : JobsTypes.Job, b : JobsTypes.Job) : { #less; #equal; #greater } {
      if (a.createdAt > b.createdAt) #less
      else if (a.createdAt < b.createdAt) #greater
      else #equal;
    });
    let total = sorted.size();
    let start = if (offset >= total) total else offset;
    let end_ = if (start + limit > total) total else start + limit;
    sorted.sliceToArray(start.toInt(), end_.toInt());
  };

  public func getJob(
    state : State,
    jobId : Text,
  ) : ?JobsTypes.Job {
    state.jobs.get(jobId);
  };

  public func getJobsByEmployer(
    state : State,
    employerPrincipal : Common.UserId,
  ) : [JobsTypes.Job] {
    state.jobs.values().filter(func(j : JobsTypes.Job) : Bool {
      Principal.equal(j.employerPrincipal, employerPrincipal);
    }).toArray();
  };

  public func applyToJob(
    state : State,
    caller : Common.UserId,
    jobId : Text,
  ) : ?JobsTypes.Application {
    // Validate job exists and is open
    switch (state.jobs.get(jobId)) {
      case null null;
      case (?job) {
        if (job.status != #open) return null;
        // Prevent duplicate applications
        let duplicate = state.applications.values().find(func(a : JobsTypes.Application) : Bool {
          a.jobId == jobId and Principal.equal(a.workerPrincipal, caller);
        });
        switch (duplicate) {
          case (?_) null;
          case null {
            let appId = state.counter.nextAppId;
            state.counter.nextAppId += 1;
            let app : JobsTypes.Application = {
                          id = appId.toText();
              jobId;
              workerPrincipal = caller;
              status = #pending;
              appliedAt = Time.now();
            };
            state.applications.add(app.id, app);
            // Increment job application count
            let updatedJob : JobsTypes.Job = { job with applicationCount = job.applicationCount + 1 };
            state.jobs.add(jobId, updatedJob);
            ?app;
          };
        };
      };
    };
  };

  public func getApplicationsForJob(
    state : State,
    jobId : Text,
    callerIsEmployer : Bool,
  ) : [JobsTypes.Application] {
    if (not callerIsEmployer) return [];
    state.applications.values().filter(func(a : JobsTypes.Application) : Bool {
      a.jobId == jobId;
    }).toArray();
  };

  public func getMyApplications(
    state : State,
    caller : Common.UserId,
  ) : [JobsTypes.Application] {
    state.applications.values().filter(func(a : JobsTypes.Application) : Bool {
      Principal.equal(a.workerPrincipal, caller);
    }).toArray();
  };

  public func respondToApplication(
    state : State,
    caller : Common.UserId,
    applicationId : Text,
    accept : Bool,
  ) : ?JobsTypes.Application {
    switch (state.applications.get(applicationId)) {
      case null null;
      case (?app) {
        // Verify caller owns the job
        switch (state.jobs.get(app.jobId)) {
          case null null;
          case (?job) {
            if (not Principal.equal(job.employerPrincipal, caller)) return null;
            let newStatus : Common.ApplicationStatus = if (accept) #accepted else #rejected;
            let updated : JobsTypes.Application = { app with status = newStatus };
            state.applications.add(applicationId, updated);
            ?updated;
          };
        };
      };
    };
  };

  public func markJobComplete(
    state : State,
    caller : Common.UserId,
    jobId : Text,
    applicationId : Text,
  ) : ?JobsTypes.Job {
    switch (state.jobs.get(jobId)) {
      case null null;
      case (?job) {
        if (not Principal.equal(job.employerPrincipal, caller)) return null;
        let updatedJob : JobsTypes.Job = { job with status = #completed };
        state.jobs.add(jobId, updatedJob);
        // Mark application as completed
        switch (state.applications.get(applicationId)) {
          case null {};
          case (?app) {
            let updatedApp : JobsTypes.Application = { app with status = #completed };
            state.applications.add(applicationId, updatedApp);
          };
        };
        ?updatedJob;
      };
    };
  };
}
