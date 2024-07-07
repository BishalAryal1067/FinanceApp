import Dashboard from "./index.vue";
import Route from "../../types/routes";

const dashboardRoutes: Route = {
  path: "/dashboard",
  name: "dashboard",
  component: Dashboard,
};

export default dashboardRoutes;
