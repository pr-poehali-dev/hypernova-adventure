import { AnimatedRobot } from "@/components/AnimatedRobot"
import { ChatPanel } from "@/components/ChatPanel"
import { Dock } from "@/components/Dock"
import { OSOverlay } from "@/components/OSOverlay"

export default function HomePage() {
  return (
    <>
      <div className="h-screen bg-[#F0F7FA] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1A6B8A 1px, transparent 1px),
              linear-gradient(to bottom, #1A6B8A 1px, transparent 1px)
            `,
            backgroundSize: "8px 8px",
          }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-w-lg w-full">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <AnimatedRobot />
            <div className="text-center">
              <h1 className="text-4xl font-black">Вирджиния Апгар</h1>
              <p className="text-[#1A6B8A] font-bold mt-1 text-lg">Врач, изменившая неонатологию</p>
            </div>
          </div>

          <ChatPanel />
        </div>

        <div className="relative z-10 pb-4">
          <Dock />
        </div>
      </div>

      <OSOverlay />
    </>
  )
}
