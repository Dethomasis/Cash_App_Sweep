import Link from "next/link"

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Continue Button */}
      <Link
        href="/offer"
        className="px-16 py-4 bg-[#00D54B] hover:bg-[#00C044] text-white font-bold text-lg rounded-lg transition-colors"
      >
        Continue
      </Link>
    </div>
  )
}
