export default function ColorContent({
  color,
  colorInfo,
}: {
  color: string
  colorInfo: string
}) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[600px] w-full space-y-6 px-4">
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            Your favorite color is {color || "unknown"}!
          </p>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            {colorInfo}
          </p>
        </div>
      </div>
    </main>
  )
}
