import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("color-info", "routes/favorite-color.tsx")
] satisfies RouteConfig;
