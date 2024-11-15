import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Sample data
const initialActPending = [
  { id: 1, wrkgPrjct: "Employee Management System", actDesc: "Admin Dashboard" },
  { id: 2, wrkgPrjct: "Ecommerce Website", actDesc: "Add to cart page" },
  { id: 3, wrkgPrjct: "Tourism Management Application", actDesc: "Users module" },
  { id: 4, wrkgPrjct: "Banking Application", actDesc: "Login page" },
  { id: 5, wrkgPrjct: "abc", actDesc: "xyz" },
  { id: 6, wrkgPrjct: "abc", actDesc: "xyz" },
  { id: 7, wrkgPrjct: "abc", actDesc: "xyz" },
  { id: 8, wrkgPrjct: "abc", actDesc: "xyz" },
];

const PendingAct = () => {
  const [actPending, setActPending] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  // Fetch activities from localStorage when component mounts
  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActPending(JSON.parse(storedActivities));
    } else {
      setActPending(initialActPending);
    }
  }, []);

  // Save activities to localStorage
  const saveToLocalStorage = (activities: any[]) => {
    localStorage.setItem('activities', JSON.stringify(activities));
  };

  const handleDelete = (id: number) => {
    const updatedActivities = actPending.filter((activity) => activity.id !== id);
    setActPending(updatedActivities);
    saveToLocalStorage(updatedActivities);
    setShowModal(false); // Close modal after delete
  };

  const handleEdit = (activity: any) => {
    setSelectedActivity(activity);
    setShowModal(true); // Show modal when editing
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  const handleSave = () => {
    // Save the edited activity back to the list
    const updatedActivities = actPending.map((activity) =>
      activity.id === selectedActivity.id ? selectedActivity : activity
    );
    setActPending(updatedActivities);
    saveToLocalStorage(updatedActivities);
    setShowModal(false); // Close modal after save
  };

  return (
    <div className="h-screen bg-blue-400 text-center flex flex-col">
      <div className="absolute top-6 right-6">
        <Link to="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Back to Dashboard
          </button>
        </Link>
      </div>
      <div className="flex-grow flex flex-col items-center justify-start px-10 py-9">
        <h2 className="text-3xl font-bold text-white mb-10">Pending Activities</h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg w-full max-w-6xl">
          <table className="min-w-full text-sm text-left text-black table-auto">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-2 py-2 border-b">Working Project</th>
                <th className="px-2 py-2 border-b">Activity Description</th>
                <th className="px-2 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {actPending.map((act) => (
                <tr key={act.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2">{act.wrkgPrjct}</td>
                  <td className="px-2 py-2">{act.actDesc}</td>
                  <td className="px-2 py-2 flex justify-start gap-4">
                    {/* Edit button */}
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
                      onClick={() => handleEdit(act)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
                      onClick={() => setSelectedActivity(act)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedActivity ? 'Edit Activity' : 'Confirm Deletion'}</h3>
            {selectedActivity && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Working Project</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={selectedActivity.wrkgPrjct}
                    onChange={(e) => setSelectedActivity({ ...selectedActivity, wrkgPrjct: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Activity Description</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={selectedActivity.actDesc}
                    onChange={(e) => setSelectedActivity({ ...selectedActivity, actDesc: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {!selectedActivity && (
              <div>
                <p>Are you sure you want to delete this activity?</p>
                <div className="flex justify-end gap-4">
                  <button
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => handleDelete(selectedActivity?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAct;
