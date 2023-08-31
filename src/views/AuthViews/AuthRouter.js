import { createWebHistory, createRouter } from "vue-router";

const AuthRoutes = {
  path: "/auth",
  redirect: {name : 'auth.login'},
  children: [
    {
      path: "login",
      name: "auth.login",
      component: () => import("../AuthViews/LoginView.vue"),
    },
    {
      path: "register",
      name: "auth.register",
      component: () => import("../AuthViews/SignUpView.vue"),
    },
  ],
};

export default AuthRoutes;
