import LoginView from "./LoginView.vue";
import SignUpView from "./SignUpView.vue";
import ConfirmationView from "./ConfirmationView.vue";
import ResetPassword from "./ResetPassword.vue";

const AuthRoutes = {
  path: "/auth",
  redirect: { name: "auth.login" },
  children: [
    {
      path: "login",
      name: "auth.login",
      component: LoginView,
    },
    {
      path: "register",
      name: "auth.register",
      component: SignUpView,
    },
    {
      path: "confirmation",
      name: "auth.confirmation",
      component: ConfirmationView,
    },
    {
      path:"reset-password",
      name:"auth.reset_password",
      component: ResetPassword
    }
  ],
};

export default AuthRoutes;
