import { createWebHistory, createRouter } from "vue-router";

import LoginView from "../AuthViews/LoginView.vue";
import SignUpView from "../AuthViews/SignUpView.vue";

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
  ],
};

export default AuthRoutes;
