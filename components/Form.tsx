import React from "react";

const Form = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Personal Information Form
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Surname & Other Names
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="passport"
            >
              Passport Photo
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              name="image"
              id="image"
              accept="image/*"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="age"
              id="age"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="maritalStatus"
            >
              Marital Status
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="maritalStatus"
              id="maritalStatus"
              required
            >
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact Information */}
          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="address"
            >
              Residential Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="address"
              id="address"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="occupation"
              id="occupation"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="phone"
              id="phone"
              required
            />
          </div>

          <div className="form-group">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form-group md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="qualification"
            >
              Highest Education/Professional Qualification
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="qualification"
              id="qualification"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <hr />
          <p>spiritual data</p>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="salvation"
            >
              Date of New Birth
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="salvation"
              id="salvation"
              required
            />
          </div>
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Have you attended the Believers Foundation Class?
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="foundationClass"
                    value="yes"
                    className="form-radio h-4 w-4 text-blue-600"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="foundationClass"
                    value="no"
                    className="form-radio h-4 w-4 text-blue-600"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Have you been baptized with the Holy Ghost with the evidence of
                speaking in tongues?
              </label>
              <div className="flex gap-4 items-center">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="holyGhostBaptism"
                    value="yes"
                    className="form-radio h-4 w-4 text-blue-600"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="holyGhostBaptism"
                    value="no"
                    className="form-radio h-4 w-4 text-blue-600"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
                <input
                  type="number"
                  name="holyGhostYear"
                  placeholder="Year"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="holyGhostLocation"
                  placeholder="Location"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="form-group md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="baptized"
            >
              Have you been baptized in water by immersion
            </label>
            <div className="flex gap-4 items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="holyGhostBaptism"
                  value="yes"
                  className="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="baptized"
                  value="no"
                  className="form-radio h-4 w-4 text-blue-600"
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="form-group md:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="memberdate"
            >
              When did you become a member of this church 
            </label>
            <div className="flex gap-4 items-center">
              
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
