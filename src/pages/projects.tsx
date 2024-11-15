import { Link } from "react-router-dom";

const projects = [
    {
        id : 1,
        title : "Employee Management System",
        role : "Frontend",
        desc : "Managing employee data",
        duration : "2 weeks"
    },
    {
        id : 2,
        title : "Ecommerce website",
        role : "Backend",
        desc : "To buy household products",
        duration : "3 weeks"
    },
    {
        id : 3,
        title : "Food Delivery Application",
        role : "Backend",
        desc : "To deliver food orders easily and quickly",
        duration : "4 weeks"
    },
    {
        id : 3,
        title : "Tourism Management Website",
        role : "Frontend",
        desc : "To guide about various travel destinations",
        duration : "4 weeks"
    }
];

const Projects = () => {
  return(
    <div className="h-screen bg-blue-400 text-center flex flex-col">
        <div className="absolute top-6 right-6">
            <Link to="/dashboard">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Back to Dashboard
                </button>
            </Link>
        </div>
        <div className="flex-grow flex flex-col items-center justify-start px-10 py-9">
            <h2 className="text-3xl font-bold text-white mb-10">Employee Projects</h2>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
            <table className="min-w-full text-sm text-left text-black table-auto">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="px-2 py-2 border-b">Project Title</th>
                        <th className="px-2 py-2 border-b">Role</th>
                        <th className="px-2 py-2 border-b">Project description</th>
                        <th className="px-2 py-2 border-b">Duration</th>
                    </tr>
                </thead>
                <tbody>
                {projects.map((projects) => (
                    <tr key={projects.id} className="border-b hover:bg-gray-50">
                    <td className="px-2 py-2">{projects.title}</td>
                    <td className="px-2 py-2">{projects.role}</td>
                    <td className="px-2 py-2">{projects.desc}</td>
                    <td className="px-2 py-2">{projects.duration}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
  </div>
 );
};
export default Projects;
