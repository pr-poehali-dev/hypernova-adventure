import { useEffect } from "react"
import { useUIStore } from "@/lib/ui-store"
import { OrbSlot } from "./OrbSlot"
import { PersonaToggle } from "./PersonaToggle"
import { MiniAppAbout } from "./MiniAppAbout"
import { MiniAppResume } from "./MiniAppResume"
import { MiniAppWritings } from "./MiniAppWritings"
import { MiniAppArt } from "./MiniAppArt"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

type AppType = "about" | "resume" | "writings" | "art"

const APP_COMPONENTS: Record<AppType, React.ComponentType> = {
  about: MiniAppAbout,
  resume: MiniAppResume,
  writings: MiniAppWritings,
  art: MiniAppArt,
}

const APP_ICONS: Record<AppType, string> = {
  about: "User",
  resume: "ClipboardList",
  writings: "BookOpen",
  art: "Clock",
}

const APP_LABELS: Record<AppType, string> = {
  about: "Биография",
  resume: "Шкала Апгар",
  writings: "Факты",
  art: "Хронология",
}

export function OSOverlay() {
  const { osOpen, activeApp, closeOS, setActiveApp } = useUIStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && osOpen) {
        closeOS()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [osOpen, closeOS])

  if (!osOpen) return null

  const ActiveComponent = activeApp ? APP_COMPONENTS[activeApp as AppType] : null

  return (
    <div className="fixed inset-0 z-50 bg-[#F0F7FA] overflow-hidden">
      <header className="flex items-center justify-between p-4 border-b-[3px] border-black bg-white">
        <div className="flex items-center gap-4">
          <OrbSlot size="sm" />
          <h1 className="text-2xl font-black text-[#1A6B8A]">APGAR OS</h1>
        </div>

        <div className="flex items-center gap-4">
          <PersonaToggle />
          <Button
            onClick={closeOS}
            className="w-10 h-10 p-0 bg-[#1A6B8A] text-white border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            aria-label="Закрыть"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        <nav className="w-64 bg-white border-r-[3px] border-black p-4">
          <div className="space-y-2">
            {(Object.keys(APP_COMPONENTS) as AppType[]).map((key) => {
              const isActive = activeApp === key

              return (
                <Button
                  key={key}
                  onClick={() => setActiveApp(key)}
                  className={`w-full justify-start gap-3 h-12 border-[3px] border-black font-bold text-left transition-all focus:ring-4 focus:ring-[#1A6B8A] ${
                    isActive
                      ? "bg-[#1A6B8A] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                  }`}
                >
                  <Icon name={APP_ICONS[key]} size={20} />
                  {APP_LABELS[key]}
                </Button>
              )
            })}
          </div>
        </nav>

        <main className="flex-1 p-8 overflow-auto">
          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-4xl font-black mb-4">Добро пожаловать в APGAR OS</h2>
                <p className="text-xl text-gray-600">Выбери раздел в боковом меню</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
