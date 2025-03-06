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
          <div className="business-select shadow-lg p-8 w-[440px] relative">
            {/* Close Button (top-right) */}

            {/* Brand/Logo at the top */}
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-35 object-contain"
              />
            </div>
            
            <h2 className="text-xl font-medium mb-2">
              Select Business Type
            </h2>
            <p className= "text-gray-500 mb-6 leading-relaxed">
              Classify your business type based on industry, allowing for
              tailored strategies and targeted approaches.
            </p>

            {/* Two Options: Company / Individual */}
            <div className=" business-type flex items-center justify-center gap-6 mb-6">
              {/* Company Button */}
              <div
                onClick={() => setSelectedType("company")}
                className={`company transition 
                  ${
                    selectedType === "company"
                      ? `active`
                      : ""
                  }
                `}
              >
                <FiBriefcase className="text-xl" />
                <p>
                  Company
                </p>
              </div>

              {/* Individual Button */}
              <div
                onClick={() => setSelectedType("individual")}
                className={`individual transition
                  ${
                    selectedType === "individual"
                      ? `active`
                      : ""
                  }
                `}
              >
                <FiUser className="text-xl" />
                <p>Individual</p>
              </div>
            </div>

            {/* Next Button at the bottom */}
            <div className="text-center">
              <button
                className="btn-next transition"
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
