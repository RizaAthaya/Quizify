import { googleLogin } from "../../api/services/auth";
import FormRegister from "../../components/features/auth/FormRegister";
import { useNavigate } from "react-router-dom";

// assets 
import Image from "../../assets/Computer.svg"
import GImage from "../../assets/google.png"

const Register = () => {
  const navigate = useNavigate();  

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="lg:w-1/2 lg:flex items-center justify-center flex-col text-blue-800 gap-14 py-10 px-32 bg-white hidden">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Join Quizify Today! 🎉</h1>
          <p className="text-left text-lg">
            Become part of a fun and interactive quiz community! Sign up to challenge your knowledge and compete with others across various topics.
          </p>
        </div>
        <img src={Image} className="max-w-lg" />
      </div>

      {/* Right side */}
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center relative bg-cover bg-center bg-transparent bg-opacity-80"
        style={{ backgroundImage: 'url(/src/assets/classroom.jpg)' }}>

        <div className="absolute inset-0 bg-blue-600 bg-opacity-30 backdrop-blur-sm"></div>

        {/* Form Box */}
        <div className="relative w-[calc(100%-32px)] lg:w-full max-w-md bg-white p-8 rounded-lg shadow-lg z-10">
          <FormRegister />

          {/* Line */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google */}
          <div className="flex justify-center mt-4">
            <button
              onClick={googleLogin}
              className="flex items-center justify-center w-full py-2 px-4 border-2 border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {/* Google Logo */}
              <img src={GImage} alt="Google logo" className="w-5 h-5 mr-3" />
              Sign up with Google
            </button>
          </div>

          {/* to login*/}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/auth/login")} 
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
