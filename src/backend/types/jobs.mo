import Common "common";

module {
  public type Job = {
    id : Text;
    employerPrincipal : Common.UserId;
    title : Text;
    description : Text;
    category : Text;
    payAmount : Nat;
    duration : Text;
    timing : Text;
    workerCount : Nat;
    location : Text;
    urgent : Bool;
    skillsRequired : [Text];
    status : Common.JobStatus;
    createdAt : Common.Timestamp;
    applicationCount : Nat;
  };

  public type JobInput = {
    title : Text;
    description : Text;
    category : Text;
    payAmount : Nat;
    duration : Text;
    timing : Text;
    workerCount : Nat;
    location : Text;
    urgent : Bool;
    skillsRequired : [Text];
  };

  public type JobFilter = {
    category : ?Text;
    urgent : ?Bool;
    status : ?Common.JobStatus;
  };

  public type Application = {
    id : Text;
    jobId : Text;
    workerPrincipal : Common.UserId;
    status : Common.ApplicationStatus;
    appliedAt : Common.Timestamp;
  };
}
