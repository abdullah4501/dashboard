// src/components/Header.js
import { FiSearch, FiBell } from "react-icons/fi"

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm">
      {/* Left: Search Bar */}
      <div className="relative w-1/3 max-w-sm">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full bg-gray-50 pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {/* Search Icon */}
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon with Red Badge */}
        <div className="relative">
          <FiBell className="text-2xl text-gray-600 cursor-pointer" />
          {/* Red Dot Badge */}
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </div>

        {/* User Info: Image on the left, text on the right */}
        <div className="flex items-center space-x-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/50dc/f6f1/f08a80a5cef61bce7912ee4ad2dd923f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jEps4zQTtXz8BzCAbG88S3PlD6hwyUFj4QUk3XI3DahUZ4P4zW0aDa~ZfpFxp5x8Y-5oEusdlOVYkj6-F5mm2RAapoOMktlMYEIRRuEi2inZZROS6bNQUwVrsdu8ir5R5dOhpMn-LCAsgRccIYkQKu6E8Q4PlHG2MJo87ocspbeK6fE0OoxkLow1RQzqHXlot-KkQdjISs-DeyOoVCJoEj9Dc9MxFL-XNFMYyd2r-gBbO2wNE54Whg6OYacUbpyro~aUZGqNRY5YjCU7p1wA37qgTt-RqZZcMGq1SrBkPCcnaDgzEmPTqMshfdDLjqBFqxMHRSQKx6ro6UdoD1ipQQ__"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="text-left">
            <h2 className="text-sm font-semibold text-gray-800">Hi Muhammad</h2>
            <p className="text-xs text-gray-500">Good morning</p>
          </div>
        </div>
      </div>
    </header>
  )
}
