// pages/dashboard.js
import React, { useState } from "react"
import dynamic from "next/dynamic"
import Layout from "../components/Layout"
import Verify from "../components/Verify"
import Tables from "@/components/Tables"
import { FiCalendar, FiChevronDown  } from "react-icons/fi"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })
const mainChartSeries = [
  {
    name: "Sales 2022",
    data: [300, 1800, 500, 2700, 1000, 2800, 2200, 1500], // All <= 3000
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
  stroke: {
    curve: "smooth", // Curved line
    width: 3,
  },
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
    min: 0,
    max: 3000,
    tickAmount: 3, // Produces 4 ticks: 0, 1k, 2k, 3k
    labels: {
      style: { colors: "#666" },
      formatter: (val) => {
        if (val === 0) return "0"
        return (val / 1000) + "k"
      },
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
 */
const statsData = [
  {
    title: "Today sales",
    value: 835,
    growth: "+0.2%",
    color: "#FBB040",
    chartData: [4, 2, 9, 3, 10, 2, 8],
  },
  {
    title: "Today number of orders",
    value: 635,
    growth: "+21.01%",
    color: "#04CE00",
    chartData: [2, 10, 4, 12, 5, 15, 3],
  },
  {
    title: "Total leads/Chats",
    value: 635,
    growth: "-20.1%",
    color: "#F5222D",
    chartData: [9, 3, 7, 2, 10, 4, 1],
  },
  {
    title: "Total sales",
    value: 635,
    growth: "+11.2%",
    color: "#2D5BFF",
    chartData: [3, 11, 2, 14, 5, 12, 4],
  },
  {
    title: "Total orders",
    value: 635,
    growth: "+9.3%",
    color: "#121212",
    chartData: [2, 5, 1, 7, 2, 9, 4],
  },
]

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Today sales")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const tabs = [
    "Today sales",
    "Today number of orders",
    "Total leads/Chats",
    "Total sales",
    "Total orders",
  ]

  const handleSelect = (tab) => {
    setSelectedTab(tab)
    setDropdownOpen(false)
  }

  return (
    <Layout>
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>

      <div className="hidden md:flex mb-6 overflow-x-auto flex-nowrap space-x-4 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-shrink-0 px-2 py-2 font-medium text-[18px] transition ${
              selectedTab === tab
                ? "text-[#FBB040] border-b-2 border-[#FBB040]"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdown for small and tablet screens */}
      <div className="md:hidden mb-6 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-gray-700"
        >
          <span className="font-medium text-[18px]">{selectedTab}</span>
          <FiChevronDown />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 w-full bg-white shadow z-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleSelect(tab)}
                style={{borderRadius: '0'}}
                className={`block w-full text-left px-2 py-2 text-[18px] font-medium transition ${
                  selectedTab === tab ? "bg-gray-100 text-[#FBB040]" : "text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MAIN CHART: "Sales 2022" */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-medium" style={{ color: "#9291A5", fontSize: "18px" }}>
              Sales 2022
            </h2>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-4xl font-bold" style={{ color: "#1E1B39" }}>
                $12.7k
              </span>
              <p className="text-sm text-green-500">
                0.13%{" "}
                <span style={{ color: "#9291A5", fontSize: "14px" }}>
                  vs last year
                </span>
              </p>
            </div>
          </div>
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            This month
            <FiCalendar className="ml-2" />
          </button>
        </div>
        {/* Curved line area chart with 0, 1k, 2k, 3k on the y-axis */}
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
            <p className="text-sm text-gray-500">Track your monthly consumption</p>
          </div>
          <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Today
            <FiCalendar className="ml-2" />
          </button>
        </div>

        {/* Responsive grid for mini-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  {/* Mini chart with straight lines */}
                  <div className="h-16 mt-2 w-[50%]">
                    <ApexChart
                      options={{
                        chart: { sparkline: { enabled: true } },
                        stroke: {
                          curve: "straight",
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
