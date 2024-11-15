import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import employeeMSImage from '../../public/ems2.png';

interface LoginFormData {
  username: string;
  password: string;
}

const EmployeeLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log('Form data:', data);
    
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
      title: 'Signed in successfully'
    });

    setTimeout(() => {
      window.location.href = './dashboard';  
    }, 1000);
  };

  return (
    <section className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden lg:grid lg:grid-cols-12">
        
        <section className="relative flex items-center justify-center lg:col-span-6">
          <img
            alt="background"
            src={employeeMSImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12">
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">

            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="mb-4 col-span-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
                  placeholder="Enter your username"
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && (
                  <p className="text-sm text-red-600">{errors.username.message}</p>
                )}
              </div>

              <div className="mb-6 col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
                  placeholder="Enter your password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div className="col-span-6">
                <button
                  type="submit"  
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4"
                >
                  Login
                </button>
              </div>

              <div className="col-span-6">
                <button
                  type="button"
                  className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
                  onClick={() => window.location.href = '/'}
                >
                  Back to home
                </button>
              </div>
            </form>
          </div>
        </main>

      </div>
    </section>
  );
};

export default EmployeeLogin;
