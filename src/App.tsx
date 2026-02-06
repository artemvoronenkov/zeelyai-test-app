import { Button } from "@/components/ui/button"
import { ChangeBackgroundSidebar } from "@/components/ChangeBackgroundSidebar/ChangeBackgroundSidebar"
import { useState } from "react"

function App() {
  const [isChangeBackgroundSidebarOpen, setIsChangeBackgroundSidebarOpen] =
    useState(false)

  const handleChangeBackgroundButtonClick = () =>
    setIsChangeBackgroundSidebarOpen(true)
  const handleChangeBackgroundSidebarClose = () =>
    setIsChangeBackgroundSidebarOpen(false)
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 md:px-10">
        <section className="w-full space-y-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Zeely AI Test App
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              By Artem Voronenkov
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Vite + React + TypeScript + Tailwind CSS v4 + shadcn/ui
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={handleChangeBackgroundButtonClick}>
              Change background
            </Button>
          </div>
        </section>
      </div>

      {isChangeBackgroundSidebarOpen && (
        <ChangeBackgroundSidebar onClose={handleChangeBackgroundSidebarClose} />
      )}
    </main>
  )
}

export default App
