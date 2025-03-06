import Link from "next/link"
import { useRouter } from "next/router"
import { FiHome, FiSettings } from "react-icons/fi"
import { FaPlane } from "react-icons/fa"

export default function Sidebar() {
  const router = useRouter()

  // Navigation items
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Aircraft", href: "/aircraft", icon: FaPlane },
    { name: "Spare parts", href: "/spare-parts", icon: FiSettings },
  ]

  return (
    <aside className="w-75 bg-black text-white flex flex-col">
      {/* Brand / Logo */}
      <div className="flex items-center justify-center py-4">
        {/* Replace this with your actual logo path */}
        <img
          src="/images/logo.png"
          alt="Brand Logo"
          className="h-16 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-8 px-2">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <li key={item.name}>
                <Link legacyBehavior href={item.href}>
                  <a
                    className={`flex items-center gap-3 transition-colors rounded-lg text-base font-semibold px-6 py-3
                      ${
                        isActive
                          ? "bg-[#FBB040] text-white"
                          : "hover:bg-gray-800"
                      }
                    `}
                  >
                    <item.icon className="text-xl" />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="h-16 px-4 flex items-center justify-center border-t border-gray-700">
        <button className="text-sm">Logout</button>
      </div>
    </aside>
  )
}