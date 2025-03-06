import { useState } from "react"

export default function Tables() {
  // Example static data
  const orders = [
    {
      id: "#1001",
      date: "02/03/2025",
      client: "Adam Smith",
      item: 2,
      amount: "$550.00",
      status: "Complete",
    },
    {
      id: "#1002",
      date: "02/03/2025",
      client: "Jane Doe",
      item: 1,
      amount: "$200.00",
      status: "Complete",
    },
    {
      id: "#1003",
      date: "02/03/2025",
      client: "Michael Lee",
      item: 3,
      amount: "$750.00",
      status: "Complete",
    },
    {
      id: "#1004",
      date: "02/03/2025",
      client: "Emily Davis",
      item: 5,
      amount: "$1,250.00",
      status: "Complete",
    },
  ]
  const leads = [
    {
      img: "./images/user2.jpg",
      name: "Stive Smith",
      email: "smith123@gmail.com",
      number: "+1-234-567-8900",
      location: "123 Maple Street",
      message: "How can I help you today?",
    },
    {
      img: "./images/user2.jpg",
      name: "Stive Smith",
      email: "smith123@gmail.com",
      number: "+1-234-567-8900",
      location: "123 Maple Street",
      message: "How can I help you today?",
    },
    {
      img: "./images/user2.jpg",
      name: "Stive Smith",
      email: "smith123@gmail.com",
      number: "+1-234-567-8900",
      location: "123 Maple Street",
      message: "How can I help you today?",
    },
    {
      img: "./images/user2.jpg",
      name: "Stive Smith",
      email: "smith123@gmail.com",
      number: "+1-234-567-8900",
      location: "123 Maple Street",
      message: "How can I help you today?",
    },
  ]

  // Use one state object to track selections, namespaced by table
  const [selectedRows, setSelectedRows] = useState({})

  const handleCheckboxChange = (table, idx) => {
    setSelectedRows((prev) => ({
      ...prev,
      [`${table}-${idx}`]: !prev[`${table}-${idx}`],
    }))
  }

  // Header checkbox handler: toggles all rows for a given table
  const handleHeaderCheckboxChange = (table, data) => {
    const allSelected = data.every((_, idx) => selectedRows[`${table}-${idx}`])
    const newSelected = { ...selectedRows }
    data.forEach((_, idx) => {
      newSelected[`${table}-${idx}`] = !allSelected
    })
    setSelectedRows(newSelected)
  }

  // Helper function to truncate text to 5 words
  function truncateWords(text, limit = 5) {
    if (!text) return ""
    const words = text.split(" ")
    if (words.length <= limit) return text
    return words.slice(0, limit).join(" ") + "..."
  }

  return (
    <>
      {/* ORDERS TABLE */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse orders">
            <thead>
              <tr className="bg-black text-white whitespace-nowrap">
                <th className="py-3 px-4 text-center flex justify-center">
                  <input
                    type="checkbox"
                    checked={orders.every((_, idx) => selectedRows[`orders-${idx}`])}
                    onChange={() => handleHeaderCheckboxChange("orders", orders)}
                    className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer custom-checkbox"
                  />
                </th>
                <th className="py-3 px-4 text-left font-medium">Order number</th>
                <th className="py-3 px-4 text-left font-medium">Date</th>
                <th className="py-3 px-4 text-left font-medium">Client name</th>
                <th className="py-3 px-4 text-left font-medium">Item</th>
                <th className="py-3 px-4 text-left font-medium">Amount</th>
                <th className="py-3 px-4 text-left font-medium rounded-tr-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0 whitespace-nowrap">
                  <td className="py-[22px] px-4 text-center">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`orders-${idx}`]}
                      onChange={() => handleCheckboxChange("orders", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold">{order.id}</td>
                  <td className="py-3 px-4 font-semibold">{order.date}</td>
                  <td className="py-3 px-4 font-semibold">{order.client}</td>
                  <td className="py-3 px-4 font-semibold">{order.item}</td>
                  <td className="py-3 px-4 font-semibold">{order.amount}</td>
                  <td className="py-3 px-4 font-semibold">
                    {order.status === "Complete" ? (
                      <span
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: "#E9F9F1", color: "#20C375" }}
                      >
                        {order.status}
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {order.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* LEADS TABLE */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Leads</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse leads">
            <thead>
              <tr className="bg-black text-white whitespace-nowrap">
                <th className="py-3 px-4 text-center flex justify-center">
                  <input
                    type="checkbox"
                    checked={leads.every((_, idx) => selectedRows[`leads-${idx}`])}
                    onChange={() => handleHeaderCheckboxChange("leads", leads)}
                    className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer custom-checkbox"
                  />
                  
                </th>
                <th className="py-3 px-4 text-left font-medium">Name</th>
                <th className="py-3 px-4 text-left font-medium">Email</th>
                <th className="py-3 px-4 text-left font-medium">Phone number</th>
                <th className="py-3 px-4 text-left font-medium">Location</th>
                <th className="py-3 px-4 text-left font-medium">Messages</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, idx) => (
                <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0 whitespace-nowrap">
                  <td className="py-[22px] px-4 text-center">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`leads-${idx}`]}
                      onChange={() => handleCheckboxChange("leads", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold user">
                    <span className="user-icon">
                      <img src={lead.img} alt="User" />
                    </span>
                    {lead.name}
                  </td>
                  <td className="py-3 px-4 font-semibold">{lead.email}</td>
                  <td className="py-3 px-4 font-semibold">{lead.number}</td>
                  <td className="py-3 px-4 font-semibold">{lead.location}</td>
                  <td className="py-3 px-4 font-semibold">{truncateWords(lead.message)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RECENT MESSAGES TABLE */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse leads">
            <thead>
              <tr className="bg-black text-white whitespace-nowrap">
                <th className="py-3 px-4 text-center flex justify-center">
                  <input
                    type="checkbox"
                    checked={leads.every((_, idx) => selectedRows[`messages-${idx}`])}
                    onChange={() => handleHeaderCheckboxChange("messages", leads)}
                    className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer custom-checkbox"
                  />
                </th>
                <th className="py-3 px-4 text-left font-medium">Name</th>
                <th className="py-3 px-4 text-left font-medium">Email</th>
                <th className="py-3 px-4 text-left font-medium">Phone number</th>
                <th className="py-3 px-4 text-left font-medium">Location</th>
                <th className="py-3 px-4 text-left font-medium">Messages</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, idx) => (
                <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0 whitespace-nowrap">
                  <td className="py-[22px] px-4 text-center">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`messages-${idx}`]}
                      onChange={() => handleCheckboxChange("messages", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold user">
                    <span className="user-icon">
                      <img src={lead.img} alt="User" />
                    </span>
                    {lead.name}
                  </td>
                  <td className="py-3 px-4 font-semibold">{lead.email}</td>
                  <td className="py-3 px-4 font-semibold">{lead.number}</td>
                  <td className="py-3 px-4 font-semibold">{lead.location}</td>
                  <td className="py-3 px-4 font-semibold">{truncateWords(lead.message)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
