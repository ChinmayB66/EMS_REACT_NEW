import React from 'react';
import logo from '../../public/itcsinfotech_new_logo1.webp';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; 

const employees = [
  {
    id: 1,
    name: 'ABC',
    role: 'Software Engineer',
    projects: ['Employee Management System', 'Ecommerce Website'],
    leaveHistory: [
      { date: '2024-01-10', type: 'Sick Leave' },
      { date: '2024-03-15', type: 'Annual Leave' },
    ],
  },
];

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: 'success',
      title: 'Signed out successfully'
    });

    setTimeout(() => {
      window.location.href = './login';
    }, 1000);
  };
  return (
    <div className="h-screen bg-blue-400 text-center flex flex-col">
      <header className="w-full bg-white text-gray-800 py-4 shadow-md">
        <div className="max-w-9xl mx-auto px-6 flex justify-between items-center">
         <img src={logo} alt="Company Logo" className="w-15 h-14" />
         <h1 className="mr-12 text-2xl font-bold">Employee Management System</h1>       
          <nav className="space-x-14">
            <Link to="/projects" className="hover:text-blue-300">Projects</Link>
            <Link to="/PendingActivities" className="hover:text-blue-300">Pending Activities</Link>            
            <Link to="/leavehist" className="hover:text-blue-300">Leave Historys</Link>
            <Link to="/msg" className="hover:text-blue-300">Message</Link>
            <Link to="/profile" className="hover:text-blue-300">Profile</Link>
            <Link to="/login" className="hover:text-blue-300" onClick={handleLogout}>Logout</Link>
          </nav>
        </div>
      </header>

      <div className="flex-grow flex flex-col items-center justify-start px-12 py-7">
        <h2 className="text-3xl font-bold text-white mb-10">Employee Dashboard</h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
          <table className="min-w-full text-sm text-left text-black table-auto">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-2 py-2 border-b">Employee Name</th>
                <th className="px-2 py-2 border-b">Role</th>
                <th className="px-2 py-2 border-b">Projects Handled</th>
                <th className="px-2 py-2 border-b">Leave Historysgggg</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2">{employee.name}</td>
                  <td className="px-2 py-2">{employee.role}</td>
                  <td className="px-2 py-2">{employee.projects.join(', ')}</td>
                  <td className="px-2 py-2">
                    <ul className='list-disc pl-5'>
                      {employee.leaveHistory.map((leave, index) => (
                        <li key={index}>
                          {leave.date} - {leave.type}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
