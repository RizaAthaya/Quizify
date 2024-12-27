import { useMutation } from '@tanstack/react-query';
import { User } from 'firebase/auth';
import { login } from '../api/services/auth';

export type LoginFormValues = {
    email: string;
    password: string;
};

export const useLogin = (
    onSuccess?: (user: User | null) => void,
    onError?: (error: Error) => void
) => {
    const response = useMutation<User | null, Error, LoginFormValues>({
        mutationFn: ({ email, password }) => login(email, password),
        onSuccess,
        onError,
    });

    return response
};
