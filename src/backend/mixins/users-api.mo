import Map "mo:core/Map";
import UsersTypes "../types/users";
import Common "../types/common";
import UsersLib "../lib/users";

mixin (
  workerProfiles : Map.Map<Common.UserId, UsersTypes.WorkerProfile>,
  employerProfiles : Map.Map<Common.UserId, UsersTypes.EmployerProfile>,
) {
  let usersState : UsersLib.State = { workerProfiles; employerProfiles };

  public shared ({ caller }) func createWorkerProfile(
    input : UsersTypes.WorkerProfileInput
  ) : async UsersTypes.WorkerProfile {
    UsersLib.createWorkerProfile(usersState, caller, input);
  };

  public shared ({ caller }) func updateWorkerProfile(
    input : UsersTypes.WorkerProfileInput
  ) : async ?UsersTypes.WorkerProfile {
    UsersLib.updateWorkerProfile(usersState, caller, input);
  };

  public query func getWorkerProfile(principal : Common.UserId) : async ?UsersTypes.WorkerProfile {
    UsersLib.getWorkerProfile(usersState, principal);
  };

  public shared ({ caller }) func createEmployerProfile(
    input : UsersTypes.EmployerProfileInput
  ) : async UsersTypes.EmployerProfile {
    UsersLib.createEmployerProfile(usersState, caller, input);
  };

  public shared ({ caller }) func updateEmployerProfile(
    input : UsersTypes.EmployerProfileInput
  ) : async ?UsersTypes.EmployerProfile {
    UsersLib.updateEmployerProfile(usersState, caller, input);
  };

  public query func getEmployerProfile(principal : Common.UserId) : async ?UsersTypes.EmployerProfile {
    UsersLib.getEmployerProfile(usersState, principal);
  };
}
