import state from "./state";

interface AuthData {
  id: string;
  email: string;
  aud: string;
}

const setAuthState = (authData: AuthData) => {
  state.id = authData.id;
  state.email = authData.email;
  state.isAuthenticated = authData.aud === "authenticated";
};

export default {
  setAuthState,
};
