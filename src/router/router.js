import { createWebHistory, createRouter } from "vue-router";

//importing routes
import AuthRoutes from "../views/AuthViews/AuthRouter";
const Home = {
  path: "/",
  redirect: "/auth",
};
const router = createRouter({
  history: createWebHistory(),
  routes: [Home, AuthRoutes],
});

export default router;
