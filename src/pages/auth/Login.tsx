import FormLogin from "../../components/features/login/FormLogin";
import { googleLogin } from "../../api/services/auth";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="lg:w-1/2 lg:flex items-center justify-center flex-col text-blue-800 gap-14 py-10 px-32 bg-white hidden">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Welcome to Quizify! 👋</h1>
          <p className="text-left text-lg">
            A fun and interactive quiz platform designed to test your knowledge on various topics. It's perfect for both casual users and competitive learners.
          </p>
        </div>
        <img src="/src/assets/Question.svg" className="max-w-md xl:max-w-lg" />
      </div>

      {/* Right side */}
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center relative bg-cover bg-center bg-transparent bg-opacity-80"
        style={{ backgroundImage: 'url(/src/assets/classroom.jpg)' }}>

        <div className="absolute inset-0 bg-blue-600 bg-opacity-30 backdrop-blur-sm"></div>

        {/* Form Box */}
        <div className="relative w-[calc(100%-36px)] lg:w-full max-w-md bg-white p-6 lg:p-8 rounded-lg shadow-lg z-10">
          <FormLogin />

          {/* Line */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={googleLogin}
              className="flex items-center justify-center w-full py-2 px-4 border-2 border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <img src="/src/assets/google.png" alt="Google logo" className="w-5 h-5 mr-3" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
