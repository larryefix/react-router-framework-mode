import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("color-info/:someId", "routes/color-info.tsx")
] satisfies RouteConfig;
