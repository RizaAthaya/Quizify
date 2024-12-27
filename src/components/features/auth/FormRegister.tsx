import Input from '../../shared/Input';
import InputPassword from '../../shared/InputPassword';
import Button from '../../shared/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAlert } from '../../../context/AlertContext';
import { RegisterFormValues, useRegister } from '../../../hooks/useRegister';
import Spinner from '../../shared/Spinner';

const FormRegister = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const handleRegister: SubmitHandler<RegisterFormValues> = (data) => {
    mutate(data);  
  };

  const { showAlert } = useAlert();

  // tanstack mutate
  const { mutate, isPending } = useRegister(
    () => {
      showAlert({ type: "success", message: "Registration successful!" });
    },
    (error) => {
      console.error("Registration failed:", error);
      showAlert({ type: "error", message: error.message });
    }
  );

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="relative space-y-6 z-20">
      <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4">Register</h2>

      <Input
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        {...register('displayName', {
          required: 'Full name is required',
        })}
        errorMessage={errors.displayName?.message}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address',
          },
        })}
        errorMessage={errors.email?.message}
      />

      <InputPassword
        label="Password"
        placeholder="Enter your password"
        {...register('password', {
          required: 'Password is required',
        })}
        errorMessage={errors.password?.message}
      />

      <Button type="submit" variant="primary" size="large" className="w-full py-5">
        <div className="relative w-full h-full flex items-center justify-center">
          <span
            className={`absolute transition-opacity duration-300 ${isPending ? 'opacity-0' : 'opacity-100'}`}
          >
            Register
          </span>
          <span
            className={`absolute transition-opacity duration-300 ${isPending ? 'opacity-100' : 'opacity-0'}`}
          >
            <Spinner size="extraSmall" />
          </span>
        </div>
      </Button>
    </form>
  );
};

export default FormRegister;
