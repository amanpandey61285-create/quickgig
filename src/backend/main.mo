import Map "mo:core/Map";
import Set "mo:core/Set";
import UsersTypes "types/users";
import JobsTypes "types/jobs";
import PaymentsTypes "types/payments";
import Common "types/common";
import UsersApi "mixins/users-api";
import JobsApi "mixins/jobs-api";
import PaymentsApi "mixins/payments-api";
import AdminApi "mixins/admin-api";

actor {
  let workerProfiles = Map.empty<Common.UserId, UsersTypes.WorkerProfile>();
  let employerProfiles = Map.empty<Common.UserId, UsersTypes.EmployerProfile>();
  let jobs = Map.empty<Text, JobsTypes.Job>();
  let applications = Map.empty<Text, JobsTypes.Application>();
  let paymentSessions = Map.empty<Text, PaymentsTypes.PaymentSession>();
  let admins = Set.empty<Common.UserId>();
  let counter = { var nextJobId : Nat = 0; var nextAppId : Nat = 0 };

  include UsersApi(workerProfiles, employerProfiles);
  include JobsApi(jobs, applications, workerProfiles, employerProfiles, counter);
  include PaymentsApi(paymentSessions);
  include AdminApi(admins);
};
