import { createWebHistory, createRouter } from "vue-router";

//importing routes
import AuthRoutes from "../views/Auth/AuthRouter";
import DashboardRoutes from "../views/Dashboard/DashboardRouter";
const Home = {
  path: "/",
  redirect: "/auth",
};
const router = createRouter({
  history: createWebHistory(),
  routes: [Home, AuthRoutes, DashboardRoutes],
});

export default router;
