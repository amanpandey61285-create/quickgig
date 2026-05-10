import Common "common";

module {
  public type PaymentSession = {
    sessionId : Text;
    jobId : Text;
    amount : Nat;
    status : Common.PaymentStatus;
    employerPrincipal : Common.UserId;
    createdAt : Common.Timestamp;
  };

  public type PaymentSessionInput = {
    jobId : Text;
    amount : Nat;
  };
}
