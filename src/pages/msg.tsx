import {Link} from "react-router-dom";

const messages = [
    {
        id : 1,
        rcvdDate : "2024-10-16",
        senderName : "abc",
        subject : "Project Meeting",
        body : "A meeting regarding ongoing project will be held today afternoon, kindly assemble in meeting room"
    },
    {
        id : 2,
        rcvdDate : "2024-11-04",
        senderName : "abc",
        subject : "Project Meeting",
        body : "A meeting regarding ongoing project will be held today morning at 11:00 am, kindly assemble in meeting room"
    },
];

const Message = () => {
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
            <h2 className="text-3xl font-bold text-white mb-10">Messages</h2>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
            <table className="min-w-full text-sm text-left text-black table-auto">
                <thead className="bg-gray-300">
                <tr>
                    <th className="px-2 py-2 border-b">Message Rcvd. Date</th>
                    <th className="px-2 py-2 border-b">Message Sender Name</th>
                    <th className="px-2 py-2 border-b">Message Subject</th>
                    <th className="px-2 py-2 border-b">Message Body</th>
                </tr>
                </thead>
                <tbody>
                {messages.map((messages) => (
                    <tr key={messages.id} className="border-b hover:bg-gray-50">
                    <td className="px-2 py-2">{messages.rcvdDate}</td>
                    <td className="px-2 py-2">{messages.senderName}</td>
                    <td className="px-2 py-2">{messages.subject}</td>
                    <td className="px-2 py-2">{messages.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
    </div>
    );
};
export default Message;