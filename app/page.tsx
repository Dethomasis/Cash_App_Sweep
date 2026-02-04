import Link from "next/link"

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Continue Button with Glow Effect */}
      <Link
        href="/offer"
        className="relative px-16 py-4 bg-[#00D54B] text-black font-bold text-lg rounded-xl transition-all duration-300 hover:bg-[#00E055] shadow-[0_0_40px_rgba(0,213,75,0.4)] hover:shadow-[0_0_60px_rgba(0,213,75,0.6)]"
      >
        Continue
      </Link>
    </div>
  )
}
