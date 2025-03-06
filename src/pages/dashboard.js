import Tables from "@/components/Tables"
import Layout from "../components/Layout"
import Verify from "../components/Verify"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { FiCalendar } from "react-icons/fi" // optional icon for the "Today" button

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

/**
 * MAIN "Sales 2022" CHART
 */
const mainChartData = {
  labels: ["Jan 01", "Jan 03", "Jan 05", "Jan 07", "Jan 09", "Jan 11", "Jan 12"],
  datasets: [
    {
      label: "Sales 2022",
      data: [3000, 3400, 3200, 3800, 3600, 4200, 4000],
      fill: true,
      borderColor: "#FBB040",
      backgroundColor: "rgba(251, 176, 64, 0.2)",
      tension: 0.4,
      pointRadius: 4,
    },
  ],
}

const mainChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { intersect: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      grid: { color: "#F2F2F2" },
      ticks: {
        callback: (value) => `$${value}`,
      },
    },
  },
}

/**
 * MINI-CHARTS FOR "THIS MONTH STATISTICS"
 * Each card has custom data to shape the line similarly to your screenshot.
 */
const getMiniChartData = (color, dataValues) => ({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: dataValues,
      borderColor: color,
      backgroundColor: "transparent",
      borderWidth: 2,
      tension: 0.1,    // slight curve
      pointRadius: 0,  // no visible points
      fill: false,
    },
  ],
})

const miniChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
    tooltip: { intersect: false },
  },
}

// Example data for the 5 mini-cards, with lines shaped to match your screenshot more closely
const statsData = [
  {
    title: "Today sales",
    value: 835,
    growth: "+0.2%",
    color: "#FBB040", // Orange
    chartData: [4, 6, 5, 8, 6, 10, 7], // Slightly up and down
  },
  {
    title: "Today number of orders",
    value: 635,
    growth: "+21.01%",
    color: "#04CE00", // Green
    chartData: [2, 4, 8, 7, 9, 6, 10], // Noticeable spike
  },
  {
    title: "Total leads/Chats",
    value: 635,
    growth: "-20.1%",
    color: "#F5222D", // Red
    chartData: [9, 7, 8, 6, 7, 4, 5], // Overall downward shape
  },
  {
    title: "Total sales",
    value: 635,
    growth: "+11.2%",
    color: "#2D5BFF", // Blue
    chartData: [3, 5, 7, 6, 9, 8, 11], // Overall up with small dips
  },
  {
    title: "Total orders",
    value: 635,
    growth: "+9.3%",
    color: "#121212", // Black
    chartData: [2, 3, 4, 5, 6, 5, 7], // Gradual up
  },
]

export default function Dashboard() {
  return (
    <Layout>
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>

      {/* TABS ROW */}
      <div className="flex items-center space-x-4 mb-6">
        <button className="px-4 py-2 rounded-full text-[#FBB040] font-medium text-[18px]">
          Today sales
        </button>
        <button className="px-4 py-2 rounded-full text-gray-600 font-medium text-[18px] hover:bg-gray-200 transition">
          Today number of orders
        </button>
        <button className="px-4 py-2 rounded-full text-gray-600 font-medium text-[18px] hover:bg-gray-200 transition">
          Total leads/Chats
        </button>
        <button className="px-4 py-2 rounded-full text-gray-600 font-medium text-[18px] hover:bg-gray-200 transition">
          Total sales
        </button>
        <button className="px-4 py-2 rounded-full text-gray-600 font-medium text-[18px] hover:bg-gray-200 transition">
          Total orders
        </button>
      </div>

      {/* MAIN CHART: "Sales 2022" */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-500">Sales 2022</h2>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-4xl font-semibold text-gray-800">$12.7k</span>
              <p className="text-sm text-green-500">
                13% <span className="text-gray-800">vs last year</span>
              </p>
            </div>
          </div>
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            This month
            <FiCalendar className="ml-2" />
          </button>
        </div>
        {/* Main Chart */}
        <Line data={mainChartData} options={mainChartOptions} />
      </div>

      {/* "This month statistics" SECTION */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">This month statistics</h3>
            <p className="text-sm text-gray-500">Track your monthly consumption</p>
          </div>
          {/* Optional "Today" button with calendar icon */}
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Today
            <FiCalendar className="ml-2" />
          </button>
        </div>

        {/* GRID OF 5 MINI-CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statsData.map((stat) => {
            // Determine color for the growth percentage
            const isNegative = stat.growth.startsWith("-")
            const growthColor = isNegative ? "text-red-500" : "text-green-500"
            // Build the mini chart data
            const miniData = getMiniChartData(stat.color, stat.chartData)

            return (
              <div
                key={stat.title}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <span className="text-xs text-gray-400">Statistics</span>
                <h4 className="text-sm font-bold text-gray-800">{stat.title}</h4>
                <div className="flex items-center justify-between my-1">
                  {/* Value and growth stacked */}
                  <div className="w-[40%]">
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className={`text-xs font-semibold ${growthColor}`}>
                      {stat.growth}
                    </div>
                  </div>
                  {/* Mini Chart Container */}
                  <div className="h-16 mt-2 w-[50%]">
                    <Line data={miniData} options={miniChartOptions} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      <Verify />
      <Tables />
    </Layout>
  )
}
