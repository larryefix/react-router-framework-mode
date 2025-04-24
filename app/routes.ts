import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("color-info/:userId", "routes/color-info.tsx")
] satisfies RouteConfig;
