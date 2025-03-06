import { useState } from "react"
import { FiBriefcase, FiUser } from "react-icons/fi"

export default function Verify() {
  const [showModal, setShowModal] = useState(false)

  // Track which option is selected: "company" or "individual" (or null initially)
  const [selectedType, setSelectedType] = useState(null)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  // Reusable color code for active border
  const YELLOW = "#FBB040"

  return (
    <>
      {/* The card with text + single image on the right */}
      <div className="bg-white rounded-xl shadow p-6 mt-6 flex items-center justify-between">
        {/* LEFT SIDE: Title, text, button */}
        <div className="max-w-lg pr-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            This month statistics
          </h3>
          <p className="text-sm text-gray-600">
            Embark on a journey of a lifetime with Wanderlust Adventures!
            We are your trusted travel companions, dedicated to curating
            extraordinary experiences that will leave you breathless.
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-4 bg-[#FBB040] text-[#121212] px-[65px] py-[10px] rounded-[12px] hover:bg-orange-400 transition"
          >
            Verify yourself
          </button>
        </div>

        {/* RIGHT SIDE: Single image */}
        <div className="flex-shrink-0">
          <img
            src="/images/group.png"
            alt="Group"
            className="w-[350px] h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* MODAL OVERLAY + CONTENT */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
          {/* Modal Box */}
          <div className="bg-white rounded-[30px] shadow-lg p-8 w-[440px] relative">
            {/* Close Button (top-right) */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Brand/Logo at the top */}
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Heading & Subtext */}
            <h2 className="text-2xl font-bold text-center mb-2">
              Select Business Type
            </h2>
            <p className="text-center text-gray-500 mb-6 px-4 leading-relaxed">
              Classify your business type based on industry, allowing for
              tailored strategies and targeted approaches.
            </p>

            {/* Two Options: Company / Individual */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {/* Company Button */}
              <button
                onClick={() => setSelectedType("company")}
                className={`
                  flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-lg font-semibold
                  border-2 transition 
                  ${
                    selectedType === "company"
                      ? `border-[${YELLOW}] bg-[${YELLOW}] text-black`
                      : "border-gray-300 bg-white text-gray-600 hover:border-[#FBB040]"
                  }
                `}
              >
                <FiBriefcase className="text-xl" />
                Company
              </button>

              {/* Individual Button */}
              <button
                onClick={() => setSelectedType("individual")}
                className={`
                  flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-lg font-semibold
                  border-2 transition
                  ${
                    selectedType === "individual"
                      ? `border-[${YELLOW}] bg-[${YELLOW}] text-black`
                      : "border-gray-300 bg-white text-gray-600 hover:border-[#FBB040]"
                  }
                `}
              >
                <FiUser className="text-xl" />
                Individual
              </button>
            </div>

            {/* Next Button at the bottom */}
            <div className="text-center">
              <button
                className="bg-[#FBB040] text-black px-10 py-3 rounded-full hover:bg-orange-400 transition text-lg font-semibold"
                onClick={() => {
                  // TODO: handle next step logic here
                  console.log("Selected type:", selectedType)
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
