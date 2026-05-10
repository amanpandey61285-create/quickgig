import Map "mo:core/Map";
import Time "mo:core/Time";
import PaymentsTypes "../types/payments";
import Common "../types/common";
import Int "mo:core/Int";

module {
  public type State = {
    paymentSessions : Map.Map<Text, PaymentsTypes.PaymentSession>;
  };

  public func createPaymentSession(
    state : State,
    caller : Common.UserId,
    input : PaymentsTypes.PaymentSessionInput,
  ) : PaymentsTypes.PaymentSession {
    // sessionId is the Stripe session ID passed via jobId field; we derive it from jobId + timestamp
    let sessionId = input.jobId # "-" # Time.now().toText();
    let session : PaymentsTypes.PaymentSession = {
      sessionId;
      jobId = input.jobId;
      amount = input.amount;
      status = #pending;
      employerPrincipal = caller;
      createdAt = Time.now();
    };
    state.paymentSessions.add(sessionId, session);
    session;
  };

  public func getPaymentSession(
    state : State,
    sessionId : Text,
  ) : ?PaymentsTypes.PaymentSession {
    state.paymentSessions.get(sessionId);
  };

  public func updatePaymentStatus(
    state : State,
    sessionId : Text,
    status : Common.PaymentStatus,
  ) : ?PaymentsTypes.PaymentSession {
    switch (state.paymentSessions.get(sessionId)) {
      case null null;
      case (?session) {
        let updated : PaymentsTypes.PaymentSession = { session with status };
        state.paymentSessions.add(sessionId, updated);
        ?updated;
      };
    };
  };
}
