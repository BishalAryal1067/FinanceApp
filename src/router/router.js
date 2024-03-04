import { createWebHistory, createRouter } from "vue-router";

//importing routes
import AuthRoutes from "@view/Auth/AuthRouter";
import DashboardRoutes from "@view/Dashboard/DashboardRouter";
import AddDetailRoutes from "@view/AddDetails/AddDetailRouter";
import SettingsRoutes from "@view/Settings/SettingsRouter";
const Home = {
  path: "/",
  redirect: "/auth",
};
const router = createRouter({
  history: createWebHistory(),
  routes: [Home, AuthRoutes, DashboardRoutes, AddDetailRoutes, SettingsRoutes],
});

export default router;
