import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FiHome, FiSettings, FiMenu, FiX } from "react-icons/fi"
import { FaPlane } from "react-icons/fa"

export default function Sidebar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // Navigation items
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Aircraft", href: "/aircraft", icon: FaPlane },
    { name: "Spare parts", href: "/spare-parts", icon: FiSettings },
  ]

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Toggle Button (visible below lg, i.e. below 1024px) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-black text-white p-2 rounded-full focus:outline-none"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          bg-black text-white flex flex-col flex-shrink-0 z-40
          transition-transform duration-300 ease-in-out
          fixed top-0 left-0 w-[256px] h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:h-auto lg:translate-x-0 lg:w-[256px]
          lg:sticky lg:top-0 lg:h-screen
        `}
      >
        {/* Brand / Logo */}
        <div className="flex items-center justify-center py-4">
          <img
            src="/images/logo.png"
            alt="Brand Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav flex-1 mt-8 px-2">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <li key={item.name}>
                  <Link legacyBehavior href={item.href}>
                    <a
                      className={`flex items-center gap-3 transition-colors rounded-lg text-base font-medium px-6 py-3
                        ${
                          isActive
                            ? "bg-[#FBB040] text-white"
                            : "hover:bg-gray-800"
                        }
                      `}
                      onClick={() => setIsOpen(false)} // close sidebar on mobile
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
    </>
  )
}
