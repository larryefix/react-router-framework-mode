import type { Route } from "./+types/home"
import ColorContent from "../color-content/color-content"

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
  console.log({ loaderArgs, source: "logged by loader in color-info route" })
  return {
    colorInfo:
      "Colors can significantly affect our mood; for example, blue is often associated with calmness, while red can energize and stimulate appetite. Additionally, studies show that people tend to remember information better when it is presented in color rather than in black and white.",
  }
}

export default function ColorInfo({
  actionData,
  loaderData,
}: Route.ComponentProps) {
  console.log({ actionData, loaderData })
  const color = actionData?.color
  const colorInfo = loaderData?.colorInfo

  return <ColorContent color={color} colorInfo={colorInfo} />
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const color = formData.get("color")
  const selectedNumber = formData.get("selectedNumber")
  console.log({
    color,
    selectedNumber,
    source: "Logged by action for ColorInfo route",
  })
  return { color, selectedNumber }
}
