import { useState } from "react";
import Swal from "sweetalert2";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

interface Profile {
  id: number;
  fname: string;
  lname: string;
  desg: string;
  doj: string;
  addr: string;
  contact: string;
}

const Profile = () => {
  const savedProfile = localStorage.getItem('profile');
  const initialProfile: Profile = savedProfile ? JSON.parse(savedProfile) : {
    id: 1,
    fname: "abc",
    lname: "xyz",
    desg: "software developer",
    doj: "2022-10-04",
    addr: "Mangaluru",
    contact: "21236467"
  };

  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProfile, setEditProfile] = useState<Profile>({ ...profile });
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsLoading(true);  
    setTimeout(() => {
      setIsModalOpen(true);
      setIsLoading(false); 
      setEditProfile({ ...profile });  
    }, 1000); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProfile((prevState: Profile) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setProfile({ ...editProfile });
    localStorage.setItem('profile', JSON.stringify(editProfile)); 
    
    closeModal(); 
    
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
      title: 'Profile updated successfully'
    });
    
    setTimeout(() => {
      window.location.reload(); 
    }, 1000);
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

      <div className="flex-grow flex flex-col items-center justify-start px-4 py-6">
        <h2 className="text-3xl font-bold text-white mb-6">Employee Profile</h2>

        <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl px-6 py-4">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="font-semibold text-gray-700">First Name:</span>
            </div>
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="text-gray-500">{profile.fname}</span>
            </div>

            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="font-semibold text-gray-700">Last Name:</span>
            </div>
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="text-gray-500">{profile.lname}</span>
            </div>

            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="font-semibold text-gray-700">Designation:</span>
            </div>
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="text-gray-500">{profile.desg}</span>
            </div>

            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="font-semibold text-gray-700">Date of Joining:</span>
            </div>
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="text-gray-500">{profile.doj}</span>
            </div>

            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="font-semibold text-gray-700">Address:</span>
            </div>
            <div className="flex justify-start items-center py-2 border-b border-gray-300">
              <span className="text-gray-500">{profile.addr}</span>
            </div>

            <div className="flex justify-start items-center py-2">
              <span className="font-semibold text-gray-700">Contact:</span>
            </div>
            <div className="flex justify-start items-center py-2">
              <span className="text-gray-500">{profile.contact}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={openModal}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-2">Edit Profile</h2>

            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner aria-label="Loading" size="2xl" />
              </div>
            ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700">First Name</label>
                <input
                  type="text"
                  name="fname"
                  value={editProfile.fname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  value={editProfile.lname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700">Designation</label>
                <input
                  type="text"
                  name="desg"
                  value={editProfile.desg}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700">Date of Joining</label>
                <input
                  type="date"
                  name="doj"
                  value={editProfile.doj}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  name="addr"
                  value={editProfile.addr}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={editProfile.contact}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
