import { useState } from "react"
import { FiBriefcase, FiUser } from "react-icons/fi"

export default function Verify() {
  const [showModal, setShowModal] = useState(false)
  const [selectedType, setSelectedType] = useState(null)

  // Controls the second modal
  const [showSecondModal, setShowSecondModal] = useState(false)

  // Open the first modal
  const handleOpenModal = () => {
    setShowModal(true)
    setShowSecondModal(false)
  }

  // Close everything
  const handleCloseModal = () => {
    setShowModal(false)
    setShowSecondModal(false)
  }

  return (
    <>
      {/* The card with text + single image on the right */}
      <div className="bg-white rounded-xl shadow p-6 mt-6 flex items-center justify-between">
        {/* LEFT SIDE: Title, text, button */}
        <div className="max-w-lg pr-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            This month statistics
          </h3>
          <p className=" text-gray-600">
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

      {/* ---------------- FIRST MODAL (Step 1) ---------------- */}
      {showModal && !showSecondModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
          onClick={handleCloseModal}
        >
          <div
            className="business-select shadow-lg p-8 w-[440px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-35 object-contain"
              />
            </div>

            <h2 className="text-xl font-medium mb-2">Select Business Type</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Classify your business type based on industry, allowing for
              tailored strategies and targeted approaches.
            </p>

            {/* Two Options: Company / Individual */}
            <div className="business-type flex items-center justify-center gap-6 mb-6">
              {/* Company Button */}
              <div
                onClick={() => setSelectedType("company")}
                className={`company transition ${
                  selectedType === "company" ? "active" : ""
                }`}
              >
                <FiBriefcase className="text-xl" />
                <p>Company</p>
              </div>

              {/* Individual Button */}
              <div
                onClick={() => setSelectedType("individual")}
                className={`individual transition ${
                  selectedType === "individual" ? "active" : ""
                }`}
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
                  console.log("Selected type:", selectedType)
                  setShowSecondModal(true)
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- SECOND MODAL (Step 2) ---------------- */}
      {showModal && showSecondModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
          onClick={handleCloseModal}
        >
          <div
            className="business-select shadow-lg p-8 w-[440px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium mb-2">Add your company details</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Classify your business type based on industry, allowing for
              tailored strategies and targeted approaches.
            </p>

            {/* The 9 Fields Form */}
            <form className="space-y-4 company-details-form">
              {/* 1. Company name */}
              <div>
                <label className="block font-medium mb-1">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 2. Registered address */}
              <div>
                <label className="block  font-medium mb-1">
                  Registered address
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 3. Email */}
              <div>
                <label className="block  font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 4. Phone number */}
              <div>
                <label className="block  font-medium mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 5. Representative name */}
              <div>
                <label className="block  font-medium mb-1">
                  Representative name
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 6. Position */}
              <div>
                <label className="block  font-medium mb-1">
                  Position
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 7. Industry sector */}
              <div>
                <label className="block  font-medium mb-1">
                  Industry sector
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 8. TIN number */}
              <div>
                <label className="block  font-medium mb-1">
                  TIN number
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              {/* 9. Business registration number */}
              <div>
                <label className="block  font-medium mb-1">
                  Business registration number
                </label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>
            </form>

            {/* Next Button at the bottom */}
            <div className="text-center mt-6">
              <button
                className="btn-next transition"
                onClick={() => {
                  console.log("Form submitted")
                  setShowModal(false)
                  setShowSecondModal(false)
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
