import { Form, useLoaderData } from "react-router"
import logoDark from "./logo-dark.svg"
import logoLight from "./logo-light.svg"

export function Welcome() {
  const loaderData = useLoaderData()
  const userId = loaderData.userId
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Form action={`/color-info/${userId}`} method="post">
            <label
              htmlFor="favoriteColor"
              className="leading-6 text-gray-700 dark:text-gray-200 text-center"
            >
              What&apos;s your favorite color?
            </label>
            <input
              id="favoriteColor"
              type="text"
              name="color"
              placeholder="Enter a color"
              className="w-full rounded-xl border border-gray-200 p-4 dark:border-gray-700 mt-2 mb-5"
            />
            <label
              htmlFor="userId"
              className="leading-6 text-gray-700 dark:text-gray-200 text-center"
            >
              Pick a number
            </label>
            <select
              id="userId"
              name="userId"
              defaultValue={"default"}
              className="w-full rounded-xl border border-gray-200 p-4 dark:border-gray-700 mt-2 mb-8"
            >
              <option value="default" disabled>
                Select a number
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-700 p-4 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </main>
  )
}
