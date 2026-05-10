import Common "../types/common";
import Set "mo:core/Set";
import Principal "mo:core/Principal";

mixin (
  admins : Set.Set<Common.UserId>,
) {
  public shared ({ caller }) func isAdmin() : async Bool {
    admins.contains(caller);
  };
}
