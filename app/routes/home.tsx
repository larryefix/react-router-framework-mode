import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router Framework Mode" },
    {
      name: "description",
      content: "A demo app using Framework Mode!",
    },
  ]
}

export async function loader(loaderArgs: Route.LoaderArgs) {
  const userId = "123"
  return { userId }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  // return <Welcome userId={loaderData.userId} />
  return <Welcome />
}
