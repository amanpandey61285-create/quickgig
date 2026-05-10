import Map "mo:core/Map";
import UsersTypes "../types/users";
import Common "../types/common";

module {
  public type State = {
    workerProfiles : Map.Map<Common.UserId, UsersTypes.WorkerProfile>;
    employerProfiles : Map.Map<Common.UserId, UsersTypes.EmployerProfile>;
  };

  public func createWorkerProfile(
    state : State,
    caller : Common.UserId,
    input : UsersTypes.WorkerProfileInput,
  ) : UsersTypes.WorkerProfile {
    let profile : UsersTypes.WorkerProfile = {
      principal = caller;
      displayName = input.displayName;
      bio = input.bio;
      skills = input.skills;
      hourlyRate = input.hourlyRate;
      availability = input.availability;
      avatarUrl = input.avatarUrl;
      completedJobs = 0;
      totalEarnings = 0;
      ratings = [];
    };
    state.workerProfiles.add(caller, profile);
    profile;
  };

  public func updateWorkerProfile(
    state : State,
    caller : Common.UserId,
    input : UsersTypes.WorkerProfileInput,
  ) : ?UsersTypes.WorkerProfile {
    switch (state.workerProfiles.get(caller)) {
      case null null;
      case (?existing) {
        let updated : UsersTypes.WorkerProfile = {
          existing with
          displayName = input.displayName;
          bio = input.bio;
          skills = input.skills;
          hourlyRate = input.hourlyRate;
          availability = input.availability;
          avatarUrl = input.avatarUrl;
        };
        state.workerProfiles.add(caller, updated);
        ?updated;
      };
    };
  };

  public func getWorkerProfile(
    state : State,
    principal : Common.UserId,
  ) : ?UsersTypes.WorkerProfile {
    state.workerProfiles.get(principal);
  };

  public func createEmployerProfile(
    state : State,
    caller : Common.UserId,
    input : UsersTypes.EmployerProfileInput,
  ) : UsersTypes.EmployerProfile {
    let profile : UsersTypes.EmployerProfile = {
      principal = caller;
      businessName = input.businessName;
      description = input.description;
      logoUrl = input.logoUrl;
      activeJobCount = 0;
      completedHires = 0;
      ratings = [];
    };
    state.employerProfiles.add(caller, profile);
    profile;
  };

  public func updateEmployerProfile(
    state : State,
    caller : Common.UserId,
    input : UsersTypes.EmployerProfileInput,
  ) : ?UsersTypes.EmployerProfile {
    switch (state.employerProfiles.get(caller)) {
      case null null;
      case (?existing) {
        let updated : UsersTypes.EmployerProfile = {
          existing with
          businessName = input.businessName;
          description = input.description;
          logoUrl = input.logoUrl;
        };
        state.employerProfiles.add(caller, updated);
        ?updated;
      };
    };
  };

  public func getEmployerProfile(
    state : State,
    principal : Common.UserId,
  ) : ?UsersTypes.EmployerProfile {
    state.employerProfiles.get(principal);
  };

  public func addRatingToWorker(
    state : State,
    targetPrincipal : Common.UserId,
    rating : Common.Rating,
  ) : Bool {
    switch (state.workerProfiles.get(targetPrincipal)) {
      case null false;
      case (?existing) {
        let updated : UsersTypes.WorkerProfile = {
          existing with
          ratings = existing.ratings.concat([rating]);
        };
        state.workerProfiles.add(targetPrincipal, updated);
        true;
      };
    };
  };

  public func addRatingToEmployer(
    state : State,
    targetPrincipal : Common.UserId,
    rating : Common.Rating,
  ) : Bool {
    switch (state.employerProfiles.get(targetPrincipal)) {
      case null false;
      case (?existing) {
        let updated : UsersTypes.EmployerProfile = {
          existing with
          ratings = existing.ratings.concat([rating]);
        };
        state.employerProfiles.add(targetPrincipal, updated);
        true;
      };
    };
  };

  public func incrementWorkerCompletedJobs(
    state : State,
    workerPrincipal : Common.UserId,
    earnings : Nat,
  ) {
    switch (state.workerProfiles.get(workerPrincipal)) {
      case null {};
      case (?existing) {
        let updated : UsersTypes.WorkerProfile = {
          existing with
          completedJobs = existing.completedJobs + 1;
          totalEarnings = existing.totalEarnings + earnings;
        };
        state.workerProfiles.add(workerPrincipal, updated);
      };
    };
  };

  public func incrementEmployerCompletedHires(
    state : State,
    employerPrincipal : Common.UserId,
  ) {
    switch (state.employerProfiles.get(employerPrincipal)) {
      case null {};
      case (?existing) {
        let updated : UsersTypes.EmployerProfile = {
          existing with
          completedHires = existing.completedHires + 1;
        };
        state.employerProfiles.add(employerPrincipal, updated);
      };
    };
  };
}
