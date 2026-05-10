import Common "common";

module {
  public type WorkerProfile = {
    principal : Common.UserId;
    displayName : Text;
    bio : Text;
    skills : [Text];
    hourlyRate : Nat;
    availability : Bool;
    avatarUrl : ?Text;
    completedJobs : Nat;
    totalEarnings : Nat;
    ratings : [Common.Rating];
  };

  public type WorkerProfileInput = {
    displayName : Text;
    bio : Text;
    skills : [Text];
    hourlyRate : Nat;
    availability : Bool;
    avatarUrl : ?Text;
  };

  public type EmployerProfile = {
    principal : Common.UserId;
    businessName : Text;
    description : Text;
    logoUrl : ?Text;
    activeJobCount : Nat;
    completedHires : Nat;
    ratings : [Common.Rating];
  };

  public type EmployerProfileInput = {
    businessName : Text;
    description : Text;
    logoUrl : ?Text;
  };
}
