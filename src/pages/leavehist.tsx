import { Link } from 'react-router-dom';  

const leavehist = [
    {
        id: 1,
        leaveon: "2024-06-15",
        reason: "Family function",
        leaveupto: "2024-06-16",
        noofdays: "1"
    },
    {
        id: 2,
        leaveon: "2024-07-17",
        reason: "Sick leave",
        leaveupto: "2024-07-18",
        noofdays: "1"
    },
    {
        id: 3,
        leaveon: "2024-08-12",
        reason: "Festival",
        leaveupto: "2024-08-13",
        noofdays: "1"
    }
];

const LeaveHistory = () => {
    return (
        <div className="h-screen bg-blue-400 text-center flex flex-col">
            <div className="absolute top-6 right-6">
                <Link to="/dashboard">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Back to Dashboard
                    </button>
                </Link>
            </div>

            <div className="flex-grow flex flex-col items-center justify-start px-12 py-7">
                <h2 className="text-3xl font-bold text-white mb-10">Employee Leave History</h2>

                <div className="overflow-x-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
                    <table className="min-w-full text-sm text-left text-black table-auto">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="px-2 py-2 border-b">Leave taken on</th>
                                <th className="px-2 py-2 border-b">Reason</th>
                                <th className="px-2 py-2 border-b">Leave taken upto</th>
                                <th className="px-2 py-2 border-b">No of days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leavehist.map((leave) => (
                                <tr key={leave.id} className="border-b hover:bg-gray-50">
                                    <td className="px-2 py-2">{leave.leaveon}</td>
                                    <td className="px-2 py-2">{leave.reason}</td>
                                    <td className="px-2 py-2">{leave.leaveupto}</td>
                                    <td className="px-2 py-2">{leave.noofdays}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeaveHistory;
