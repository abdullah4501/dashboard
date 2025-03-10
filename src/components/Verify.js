import { useState } from "react"
import { FiBriefcase, FiUser, FiUpload } from "react-icons/fi"

export default function Verify() {
  const [showModal, setShowModal] = useState(false)
  const [selectedType, setSelectedType] = useState(null)

  // Step 2 control
  const [showSecondModal, setShowSecondModal] = useState(false)
  // Step 3 control (new)
  const [showThirdModal, setShowThirdModal] = useState(false)

  // Open the first modal
  const handleOpenModal = () => {
    setShowModal(true)
    setShowSecondModal(false)
    setShowThirdModal(false)
  }

  // Close everything
  const handleCloseModal = () => {
    setShowModal(false)
    setShowSecondModal(false)
    setShowThirdModal(false)
  }

  return (
    <>
      <div className="bg-white rounded-[20px] shadow px-6 mt-6 grid grid-cols-1 md:grid-cols-2 justify-between">
        <div className="max-w-lg pr-4 py-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            This month statistics
          </h3>
          <p className="text-[#9291A5]">
          Embark on a journey of a lifetime with Wanderlust Adventures! We are your trusted travel companions, dedicated to curating extraordinary experiences that will leave you breathless. From mesmerizing landscapes to vibrant cultures, our expertly crafted itineraries will take you to the most captivating destinations across the globe.
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-4 bg-[#FBB040] text-[#121212] px-[65px] py-[10px] rounded-[12px] hover:bg-orange-400 transition"
          >
            Verify yourself
          </button>
        </div>
        <div className="flex img_group">
          <img
            src="/images/group.png"
            alt="Group"
            className="w-[350px] object-cover rounded-lg"
          />

        </div>
      </div>


      {/* ---------------- FIRST MODAL (Step 1) ---------------- */}
      {showModal && !showSecondModal && !showThirdModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
          onClick={handleCloseModal}
        >
          <div
            className="business-select shadow-lg p-8 lg:w-[35%] md:w-[55%] sm:w-[75%] relative"
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
            <div className="business-type flex items-center justify-between gap-6 mb-6">
              {/* Company Button */}
              <div
                onClick={() => setSelectedType("company")}
                className={`company transition w-full ${
                  selectedType === "company" ? "active" : ""
                }`}
              >
                <FiBriefcase className="text-xl" />
                <p>Company</p>
              </div>

              {/* Individual Button */}
              <div
                onClick={() => setSelectedType("individual")}
                className={`individual transition w-full ${
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
      {showModal && showSecondModal && !showThirdModal && (
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
                  // Go to step 3
                  setShowSecondModal(false)
                  setShowThirdModal(true)
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- THIRD MODAL (Step 3) ---------------- */}
      {showModal && showThirdModal && (
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

            {/* FILE UPLOAD SECTION */}
            <div className="space-y-6 uploads">
              {/* 1. Business registration certificate */}
              <h3 className="text-lg font-bold mb-0">Business registration certificate</h3>
              <p className="text-xs mb-3 text">
                Add your documents here, and you can upload up to 5 files max
              </p>
              <div className="upload-section border-dashed border-2 border-[#1849D6] rounded-[12px] p-2 text-center mb-5">
                <span className="flex justify-center mb-3">
                  <img src="./images/upload.png" alt="" />
                </span>
                <div className="drag-drop-area py-1">
                  <p className=" mb-0">Drag your file(s) or <span>browse</span></p>
                  <p className=" limit">Max 10 MB files are allowed</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-0">Business registration certificate</h3>
              <p className="text-xs mb-3 text">
                Add your documents here, and you can upload up to 5 files max
              </p>
              <div className="upload-section border-dashed border-2 border-[#1849D6] rounded-[12px] p-2 text-center mb-5">
                <span className="flex justify-center mb-3">
                  <img src="./images/upload.png" alt="" />
                </span>
                <div className="drag-drop-area py-1">
                  <p className=" mb-0">Drag your file(s) or <span>browse</span></p>
                  <p className=" limit">Max 10 MB files are allowed</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-0">Business registration certificate</h3>
              <p className="text-xs mb-3 text">
                Add your documents here, and you can upload up to 5 files max
              </p>
              <div className="upload-section border-dashed border-2 border-[#1849D6] rounded-[12px] p-2 text-center mb-5">
                <span className="flex justify-center mb-3">
                  <img src="./images/upload.png" alt="" />
                </span>
                <div className="drag-drop-area py-1">
                  <p className=" mb-0">Drag your file(s) or <span>browse</span></p>
                  <p className=" limit">Max 10 MB files are allowed</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-0">Business registration certificate</h3>
              <p className="text-xs mb-3 text">
                Add your documents here, and you can upload up to 5 files max
              </p>
              <div className="upload-section border-dashed border-2 border-[#1849D6] rounded-[12px] p-2 text-center mb-5">
                <span className="flex justify-center mb-3">
                  <img src="./images/upload.png" alt="" />
                </span>
                <div className="drag-drop-area py-1">
                  <p className=" mb-0">Drag your file(s) or <span>browse</span></p>
                  <p className=" limit">Max 10 MB files are allowed</p>
                </div>
              </div>
            </div>

            {/* Note about supported file types */}
            <p className="text-xs text-gray-400 mt-4">
              Only support .jpg, .png, .svg and .zip files
            </p>

            {/* Next Button at the bottom */}
            <div className="text-center mt-6">
              <button
                className="btn-next transition"
                onClick={() => {
                  console.log("File types submitted")
                  // End or proceed
                  setShowModal(false)
                  setShowSecondModal(false)
                  setShowThirdModal(false)
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
