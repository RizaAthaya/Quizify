import Input from '../../shared/Input'
import InputPassword from '../../shared/InputPassword'
import Button from '../../shared/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAlert } from '../../../context/AlertContext'
import { TLoginFormValues, useLogin } from '../../../hooks/useLogin'
import Spinner from '../../shared/Spinner'

const FormLogin = () => {
    // react hook form 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginFormValues>();

    const handleLogin: SubmitHandler<TLoginFormValues> = (data) => {
        mutate(data);
    };

    const { showAlert } = useAlert();

    // tanstack mutate 
    const { mutate, isPending } = useLogin(
        () => {
            showAlert({ type: "success", message: "Login successfully!" });
        },
        (error) => {
            console.error("Login failed:", error);
            showAlert({ type: "error", message: error.message });
        }
    );

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="relative space-y-6 z-20">
            {/* Title  */}
            <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4">Login</h2>

            <Input
                label="Email"
                type="email"
                placeholder='Enter your email'
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
                placeholder='Enter your password'
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
                        Login
                    </span>
                    <span
                        className={`absolute transition-opacity duration-300 ${isPending ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Spinner size="extraSmall" />
                    </span>
                </div>
            </Button>
        </form>
    )
}

export default FormLogin
