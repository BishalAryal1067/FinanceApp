import { reactive } from "vue";

interface AuthState {
  id: string;
  email: string;
  isAuthenticated: boolean;
}

const authState: AuthState = {
  id: "",
  email: "",
  isAuthenticated: false,
};

const state = reactive(authState);

export default state;
