import { useState } from 'react';
import employeeMSImage from '../../public/ems2.png';  

const EmployeeRegistration = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDesg, setEmpDesg] = useState("");
  const [empDoj, setEmpDoj] = useState("");
  const [empContact, setEmpContact] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empAddress, setEmpAddress] = useState("");

  return (
    <section className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl h-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden lg:grid lg:grid-cols-12">
        
        <section className="relative flex items-center justify-center lg:col-span-6">
          <img
            alt="background"
            src={employeeMSImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          {/* <div className="hidden lg:block lg:p-8 lg:relative z-10 text-center">
            <h2 className="text-3xl font-bold text-black">
              Welcome to Registration team
            </h2>
            <p className="mt-4 text-white/90">
              Join us and register your details to become part of the team!
            </p>
          </div> */}
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="empId" className="block text-sm font-medium text-gray-700">
                  Employee ID
                </label>
                <input
                  type="text"
                  id="empId"
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Employee ID"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="empName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="empName"
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="empDesg" className="block text-sm font-medium text-gray-700">
                  Designation
                </label>
                <input
                  type="text"
                  id="empDesg"
                  value={empDesg}
                  onChange={(e) => setEmpDesg(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Designation"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="empDoj" className="block text-sm font-medium text-gray-700">
                  Date of Joining
                </label>
                <input
                  type="date"
                  id="empDoj"
                  value={empDoj}
                  onChange={(e) => setEmpDoj(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="empContact" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="empContact"
                  value={empContact}
                  onChange={(e) => setEmpContact(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Contact Number"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="empEmail" className="block text-sm font-medium text-gray-700">
                  Email Id
                </label>
                <input
                  type="email"
                  id="empEmail"
                  value={empEmail}
                  onChange={(e) => setEmpEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Email"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="empAddress" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="empAddress"
                  value={empAddress}
                  onChange={(e) => setEmpAddress(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter Address"
                  rows={4}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Register
                </button>
                <button
                  type="button"
                  className="inline-block shrink-0 rounded-md border bg-gray-500 text-black-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={() => window.location.href = '/'}
                >
                  Go to home
                </button>
              </div>
            </form>
          </div>
        </main>

      </div>
    </section>
  );
};

export default EmployeeRegistration;