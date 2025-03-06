import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <Link href="/dashboard" className="text-orange-500 underline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
