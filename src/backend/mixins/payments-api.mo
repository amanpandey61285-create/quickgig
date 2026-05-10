import Map "mo:core/Map";
import PaymentsTypes "../types/payments";
import Common "../types/common";
import PaymentsLib "../lib/payments";

mixin (
  paymentSessions : Map.Map<Text, PaymentsTypes.PaymentSession>,
) {
  let paymentsState : PaymentsLib.State = { paymentSessions };

  public shared ({ caller }) func createPaymentSession(
    input : PaymentsTypes.PaymentSessionInput
  ) : async PaymentsTypes.PaymentSession {
    PaymentsLib.createPaymentSession(paymentsState, caller, input);
  };

  public query func getPaymentSession(sessionId : Text) : async ?PaymentsTypes.PaymentSession {
    PaymentsLib.getPaymentSession(paymentsState, sessionId);
  };

  public shared ({ caller }) func updatePaymentStatus(
    sessionId : Text,
    status : Common.PaymentStatus,
  ) : async ?PaymentsTypes.PaymentSession {
    PaymentsLib.updatePaymentStatus(paymentsState, sessionId, status);
  };
}
