import Time "mo:core/Time";

module {
  public type UserId = Principal;
  public type Timestamp = Time.Time;

  public type Rating = {
    fromPrincipal : UserId;
    stars : Nat;
    comment : ?Text;
    createdAt : Timestamp;
  };

  public type JobStatus = {
    #open;
    #closed;
    #completed;
  };

  public type ApplicationStatus = {
    #pending;
    #accepted;
    #rejected;
    #completed;
  };

  public type PaymentStatus = {
    #pending;
    #completed;
  };
}
