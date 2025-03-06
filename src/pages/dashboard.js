// pages/dashboard.js
import React from "react"
import dynamic from "next/dynamic"
import Layout from "../components/Layout"
import Verify from "../components/Verify"
import Tables from "@/components/Tables"
import { FiCalendar } from "react-icons/fi"

// Import ApexCharts dynamically with SSR disabled to avoid window errors in Next.js
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

/**
 * MAIN "Sales 2022" CHART
 * Straight line (no curve) + more dramatic dips in the data.
 */
const mainChartSeries = [
  {
    name: "Sales 2022",
    // Updated data to show big dips/spikes
    data: [3000, 5000, 1800, 5500, 1200, 6000, 2500, 4800],
  },
]

const mainChartOptions = {
  chart: {
    type: "area",
    height: 350,
    toolbar: { show: false },
  },
  colors: ["#FBB040"], // Orange line color
  dataLabels: { enabled: false },
  // Straight lines (no curve)
  stroke: {
    curve: "smooth",
    width: 3,
  },
  // Solid fill beneath the line
  fill: {
    type: "solid",
    colors: ["rgba(251, 176, 64, 0.2)"],
  },
  xaxis: {
    categories: [
      "Jan 01",
      "Jan 03",
      "Jan 05",
      "Jan 07",
      "Jan 08",
      "Jan 09",
      "Jan 11",
      "Jan 12",
    ],
    labels: { style: { colors: "#666" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: { colors: "#666" },
      formatter: (val) => `$${val}`,
    },
  },
  tooltip: {
    y: {
      formatter: (val) => `$${val}`,
    },
  },
  grid: {
    borderColor: "#F2F2F2",
    strokeDashArray: 3,
  },
}

/**
 * "This month statistics" mini-charts
 * Straight lines with more dramatic ups/downs.
 */
const statsData = [
  {
    title: "Today sales",
    value: 835,
    growth: "+0.2%",
    color: "#FBB040",
    // More variation
    chartData: [4, 2, 9, 3, 10, 2, 8],
  },
  {
    title: "Today number of orders",
    value: 635,
    growth: "+21.01%",
    color: "#04CE00",
    // More variation
    chartData: [2, 10, 4, 12, 5, 15, 3],
  },
  {
    title: "Total leads/Chats",
    value: 635,
    growth: "-20.1%",
    color: "#F5222D",
    // More variation
    chartData: [9, 3, 7, 2, 10, 4, 1],
  },
  {
    title: "Total sales",
    value: 635,
    growth: "+11.2%",
    color: "#2D5BFF",
    // More variation
    chartData: [3, 11, 2, 14, 5, 12, 4],
  },
  {
    title: "Total orders",
    value: 635,
    growth: "+9.3%",
    color: "#121212",
    // More variation
    chartData: [2, 5, 1, 7, 2, 9, 4],
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
                0.13% <span className="text-gray-800">vs last year</span>
              </p>
            </div>
          </div>
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            This month
            <FiCalendar className="ml-2" />
          </button>
        </div>
        {/* Straight line area chart with big dips */}
        <ApexChart
          options={mainChartOptions}
          series={mainChartSeries}
          type="area"
          height={350}
        />
      </div>

      {/* "This month statistics" SECTION */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              This month statistics
            </h3>
            <p className="text-sm text-gray-500">
              Track your monthly consumption
            </p>
          </div>
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Today
            <FiCalendar className="ml-2" />
          </button>
        </div>

        {/* GRID OF 5 MINI-CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statsData.map((stat) => {
            // Determine growth color
            const isNegative = stat.growth.startsWith("-")
            const growthColor = isNegative ? "text-red-500" : "text-green-500"

            return (
              <div
                key={stat.title}
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <span className="text-xs text-gray-400">Statistics</span>
                <h4 className="text-sm font-bold text-gray-800">{stat.title}</h4>
                <div className="flex items-center justify-between my-1">
                  <div className="w-[40%]">
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className={`text-xs font-semibold ${growthColor}`}>
                      {stat.growth}
                    </div>
                  </div>
                  {/* MINI-CHART with straight lines and bigger dips */}
                  <div className="h-16 mt-2 w-[50%]">
                    <ApexChart
                      options={{
                        chart: { sparkline: { enabled: true } },
                        stroke: {
                          curve: "straight", // no curve
                          width: 2,
                        },
                        colors: [stat.color],
                        tooltip: { enabled: false },
                      }}
                      series={[{ data: stat.chartData }]}
                      type="line"
                      height={64}
                    />
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
