import { FiSquare } from "react-icons/fi"
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
            location: '123 Maple Street',
            message: "How can I help you today?",
        },
        {
            img: "./images/user2.jpg",
            name: "Stive Smith",
            email: "smith123@gmail.com",
            number: "+1-234-567-8900",
            location: '123 Maple Street',
            message: "How can I help you today?",
        },
        {
            img: "./images/user2.jpg",
            name: "Stive Smith",
            email: "smith123@gmail.com",
            number: "+1-234-567-8900",
            location: '123 Maple Street',
            message: "How can I help you today?",
        },
        {
            img: "./images/user2.jpg",
            name: "Stive Smith",
            email: "smith123@gmail.com",
            number: "+1-234-567-8900",
            location: '123 Maple Street',
            message: "How can I help you today?",
        },
       
    ]

    // (Optional) If you want to manage row selection:
    const [selectedRows, setSelectedRows] = useState({})

    const handleCheckboxChange = (idx) => {
        setSelectedRows((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }))
    }
    // Helper function to truncate text to 3 words
function truncateWords(text, limit = 5) {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  }
  
    return (
        <>
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse orders">
                <thead>
                    <tr className="bg-black text-white">
                    {/* Header Icon Column */}
                    <th className="py-3 px-4 text-center">
                        <span className="mx-auto hdr-box" />
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
                    <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0">
                        <td className="py-[22px] px-4 text-center">
                        <input
                            type="checkbox"
                            checked={!!selectedRows[idx]}
                            onChange={() => handleCheckboxChange(idx)}
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

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Leads</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse leads">
                        <thead>
                            <tr className="bg-black text-white">
                                {/* Header Icon Column */}
                                <th className="py-3 px-4 text-center d-flex">
                                    <span className="mx-auto hdr-box " />
                                </th>
                                <th className="py-3 px-4 text-left font-medium">Name</th>
                                <th className="py-3 px-4 text-left font-medium">Email</th>
                                <th className="py-3 px-4 text-left font-medium">Phone number</th>
                                <th className="py-3 px-4 text-left font-medium">Location</th>
                                <th className="py-3 px-4 text-left font-medium">Messages</th>
                            </tr>
                        </thead>

                        <tbody >
                        {leads.map((lead, idx) => (
                            <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0">
                                <td className="py-[22px] px-4 text-center">
                                <input
                                    type="checkbox"
                                    checked={!!selectedRows[idx]}
                                    onChange={() => handleCheckboxChange(idx)}
                                    className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                                />
                                </td>
                                <td className="py-3 px-4 font-semibold user"><span className="user-icon "><img src={lead.img}/></span>{lead.name}</td>
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
            <div className=" mt-6">
                <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse leads">
                        <thead>
                            <tr className="bg-black text-white">
                                {/* Header Icon Column */}
                                <th className="py-3 px-4 text-center d-flex">
                                    <span className="mx-auto hdr-box " />
                                </th>
                                <th className="py-3 px-4 text-left font-medium">Name</th>
                                <th className="py-3 px-4 text-left font-medium">Email</th>
                                <th className="py-3 px-4 text-left font-medium">Phone number</th>
                                <th className="py-3 px-4 text-left font-medium">Location</th>
                                <th className="py-3 px-4 text-left font-medium">Messages</th>
                            </tr>
                        </thead>

                        <tbody >
                        {leads.map((lead, idx) => (
                            <tr key={idx} className="border-b-2 border-b-gray-100 last:border-b-0">
                                <td className="py-[22px] px-4 text-center">
                                <input
                                    type="checkbox"
                                    checked={!!selectedRows[idx]}
                                    onChange={() => handleCheckboxChange(idx)}
                                    className="h-5 w-5 accent-[#FBB040] rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                                />
                                </td>
                                <td className="py-3 px-4 font-semibold user"><span className="user-icon "><img src={lead.img}/></span>{lead.name}</td>
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

