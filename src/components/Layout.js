import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex font-sans w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-[#F5F6FA]">
        {/* Header */}
        <Header />
        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
