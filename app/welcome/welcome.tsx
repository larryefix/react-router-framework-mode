import { Form } from "react-router"
import logoDark from "./logo-dark.svg"
import logoLight from "./logo-light.svg"

export function Welcome() {
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
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            What&apos;s your favorite color?
          </p>
          <Form action="/color-info" method="post">
            <input
              type="text"
              name="color"
              placeholder="Enter a color"
              className="w-full rounded-3xl border border-gray-200 p-4 dark:border-gray-700 mb-5"
            />
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
