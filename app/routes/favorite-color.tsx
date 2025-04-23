import type { Route } from "./+types/home"
import ColorInfo from "../color-info/color-info"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    {
      name: "description",
      content: "Soon to be a React Router Framework App!",
    },
  ]
}

export async function loader(loaderArgs: Route.LoaderArgs) {
  console.log({ loaderArgs })
  // return {
  //   color: params.color,
  // }
}

export default function FavoriteColor({
  actionData,
}: // loaderData,
Route.ComponentProps) {
  console.log({ actionData })
  const color = actionData?.color
  console.log("color in component", color)
  // const loaderColor = loaderData?.color
  // console.log("color in loader", loaderColor)

  return <ColorInfo color={color} />
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const color = formData.get("color")
  console.log("color in action", color)
  return { color }
}
