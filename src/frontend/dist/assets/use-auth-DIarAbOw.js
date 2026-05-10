import { c as createLucideIcon, g as useInternetIdentity, r as reactExports } from "./index-Bhvb_wkP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode);
function useAuth() {
  const {
    identity,
    loginStatus,
    login,
    clear,
    isAuthenticated,
    isInitializing
  } = useInternetIdentity();
  const isLoading = isInitializing;
  const principal = identity == null ? void 0 : identity.getPrincipal();
  const logout = reactExports.useCallback(() => {
    clear();
  }, [clear]);
  return {
    identity,
    isAuthenticated,
    isLoading,
    loginStatus,
    principal,
    login,
    logout
  };
}
export {
  Briefcase as B,
  useAuth as u
};
