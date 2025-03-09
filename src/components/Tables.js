import { useState } from "react"

function truncateWords(text, limit = 5) {
  if (!text) return ""
  const words = text.split(" ")
  if (words.length <= limit) return text
  return words.slice(0, limit).join(" ") + "..."
}

export default function Tables() {
  // ------------------ SAMPLE DATA ------------------
  const orders = [
    { id: "#1001", date: "02/03/2025", client: "Adam Smith",   item: 2, amount: "$550.00",  status: "Complete" },
    { id: "#1002", date: "02/03/2025", client: "Jane Doe",     item: 1, amount: "$200.00",  status: "Complete" },
    { id: "#1003", date: "02/03/2025", client: "Michael Lee",  item: 3, amount: "$750.00",  status: "Complete" },
    { id: "#1004", date: "02/03/2025", client: "Emily Davis",  item: 5, amount: "$1,250.00",status: "Complete" },
    { id: "#1005", date: "02/03/2025", client: "Alice Johnson",item: 4, amount: "$900.00",  status: "Complete" },
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
      name: "John Doe",
      email: "johndoe@gmail.com",
      number: "+1-345-678-9012",
      location: "456 Oak Avenue",
      message: "I have a question regarding your service.",
    },
    {
      img: "./images/user2.jpg",
      name: "Emma Stone",
      email: "emma.stone@gmail.com",
      number: "+1-456-789-0123",
      location: "789 Pine Road",
      message: "Can you provide more details?",
    },
    {
      img: "./images/user2.jpg",
      name: "Michael Brown",
      email: "michaelbrown@gmail.com",
      number: "+1-567-890-1234",
      location: "321 Birch Street",
      message: "Looking forward to your reply.",
    },
    {
      img: "./images/user2.jpg",
      name: "Sarah Connor",
      email: "sconnor@gmail.com",
      number: "+1-678-901-2345",
      location: "654 Cedar Lane",
      message: "Need assistance with my account.",
    },
  ]
  const messages = leads

  // Orders
  const [ordersCurrentPage, setOrdersCurrentPage] = useState(1)
  const [ordersPageSize, setOrdersPageSize] = useState(5)
  const ordersTotal = orders.length
  const ordersTotalPages = Math.ceil(ordersTotal / ordersPageSize)

  // Leads
  const [leadsCurrentPage, setLeadsCurrentPage] = useState(1)
  const [leadsPageSize, setLeadsPageSize] = useState(5)
  const leadsTotal = leads.length
  const leadsTotalPages = Math.ceil(leadsTotal / leadsPageSize)

  // Messages
  const [messagesCurrentPage, setMessagesCurrentPage] = useState(1)
  const [messagesPageSize, setMessagesPageSize] = useState(5)
  const messagesTotal = messages.length
  const messagesTotalPages = Math.ceil(messagesTotal / messagesPageSize)

  const [selectedRows, setSelectedRows] = useState({})

  const handleCheckboxChange = (table, idx) => {
    setSelectedRows((prev) => ({
      ...prev,
      [`${table}-${idx}`]: !prev[`${table}-${idx}`],
    }))
  }

  const handleHeaderCheckboxChange = (table, data) => {
    const allSelected = data.every((_, idx) => selectedRows[`${table}-${idx}`])
    const newSelected = { ...selectedRows }
    data.forEach((_, idx) => {
      newSelected[`${table}-${idx}`] = !allSelected
    })
    setSelectedRows(newSelected)
  }

  function getPaginatedData(data, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return data.slice(startIndex, endIndex)
  }

  const paginatedOrders = getPaginatedData(orders, ordersCurrentPage, ordersPageSize)
  const paginatedLeads = getPaginatedData(leads, leadsCurrentPage, leadsPageSize)
  const paginatedMessages = getPaginatedData(messages, messagesCurrentPage, messagesPageSize)

  // ------------------ PAGINATION COMPONENT ------------------
  function renderPagination({
    currentPage,
    setCurrentPage,
    totalPages,
    pageSize,
    setPageSize,
    totalItems,
  }) {
    const startIndex = (currentPage - 1) * pageSize + 1
    const endIndex = Math.min(currentPage * pageSize, totalItems)

    return (
      <div className="flex items-center justify-end text-sm text-gray-700 mt-2">
        <div className="flex items-center space-x-2 mr-4">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value, 10))
              setCurrentPage(1)
            }}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <span className="mr-4">
          {startIndex}-{endIndex} of {totalItems}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    )
  }

  const [activeTab, setActiveTab] = useState("orders")

  return (
    <>
      {/* ================= DESKTOP VIEW (md and up) ================= */}
      <div className="hidden md:block">
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
                {paginatedOrders.map((order, idx) => (
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
          {renderPagination({
            currentPage: ordersCurrentPage,
            setCurrentPage: setOrdersCurrentPage,
            totalPages: ordersTotalPages,
            pageSize: ordersPageSize,
            setPageSize: setOrdersPageSize,
            totalItems: ordersTotal,
          })}
        </div>

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
                {paginatedLeads.map((lead, idx) => (
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
          {renderPagination({
            currentPage: leadsCurrentPage,
            setCurrentPage: setLeadsCurrentPage,
            totalPages: leadsTotalPages,
            pageSize: leadsPageSize,
            setPageSize: setLeadsPageSize,
            totalItems: leadsTotal,
          })}
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full table-auto border-collapse leads">
              <thead>
                <tr className="bg-black text-white whitespace-nowrap">
                  <th className="py-3 px-4 text-center flex justify-center">
                    <input
                      type="checkbox"
                      checked={messages.every((_, idx) => selectedRows[`messages-${idx}`])}
                      onChange={() => handleHeaderCheckboxChange("messages", messages)}
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
                {paginatedMessages.map((lead, idx) => (
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
          {renderPagination({
            currentPage: messagesCurrentPage,
            setCurrentPage: setMessagesCurrentPage,
            totalPages: messagesTotalPages,
            pageSize: messagesPageSize,
            setPageSize: setMessagesPageSize,
            totalItems: messagesTotal,
          })}
        </div>
      </div>

      <div className="block md:hidden mt-6">
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 px-2 py-2 text-center text-sm font-medium ${
              activeTab === "orders"
                ? "border-b-2 border-[#FBB040] text-[#FBB040]"
                : "text-gray-600"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex-1 px-2 py-2 text-center text-sm font-medium ${
              activeTab === "leads"
                ? "border-b-2 border-[#FBB040] text-[#FBB040]"
                : "text-gray-600"
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex-1 px-2 py-2 text-center text-sm font-medium ${
              activeTab === "messages"
                ? "border-b-2 border-[#FBB040] text-[#FBB040]"
                : "text-gray-600"
            }`}
          >
            Recent Messages
          </button>
        </div>

        {activeTab === "orders" && (
          <div>
            {renderPagination({
              currentPage: ordersCurrentPage,
              setCurrentPage: setOrdersCurrentPage,
              totalPages: ordersTotalPages,
              pageSize: ordersPageSize,
              setPageSize: setOrdersPageSize,
              totalItems: ordersTotal,
            })}
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            {paginatedOrders.map((order, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">{order.client}</div>
                  <div>
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`orders-${idx}`]}
                      onChange={() => handleCheckboxChange("orders", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Order Number:</span> {order.id}
                  </li>
                  <li>
                    <span className="font-medium">Date:</span> {order.date}
                  </li>
                  <li>
                    <span className="font-medium">Item:</span> {order.item}
                  </li>
                  <li>
                    <span className="font-medium">Amount:</span> {order.amount}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> {order.status}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "leads" && (
          <div>
            {renderPagination({
              currentPage: leadsCurrentPage,
              setCurrentPage: setLeadsCurrentPage,
              totalPages: leadsTotalPages,
              pageSize: leadsPageSize,
              setPageSize: setLeadsPageSize,
              totalItems: leadsTotal,
            })}
            <h2 className="text-xl font-semibold mb-4">Leads</h2>
            {paginatedLeads.map((lead, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={lead.img} alt="User" className="w-10 h-10 rounded-full object-cover" />
                    <div className="text-lg font-bold">{lead.name}</div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`leads-${idx}`]}
                      onChange={() => handleCheckboxChange("leads", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Email:</span> {lead.email}
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> {lead.number}
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> {lead.location}
                  </li>
                  <li>
                    <span className="font-medium">Message:</span> {truncateWords(lead.message)}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            {renderPagination({
              currentPage: messagesCurrentPage,
              setCurrentPage: setMessagesCurrentPage,
              totalPages: messagesTotalPages,
              pageSize: messagesPageSize,
              setPageSize: setMessagesPageSize,
              totalItems: messagesTotal,
            })}
            <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
            {paginatedMessages.map((lead, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={lead.img} alt="User" className="w-10 h-10 rounded-full object-cover" />
                    <div className="text-lg font-bold">{lead.name}</div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={!!selectedRows[`messages-${idx}`]}
                      onChange={() => handleCheckboxChange("messages", idx)}
                      className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                    />
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Email:</span> {lead.email}
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> {lead.number}
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> {lead.location}
                  </li>
                  <li>
                    <span className="font-medium">Message:</span> {truncateWords(lead.message)}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
