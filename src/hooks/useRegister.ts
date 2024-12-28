import { useMutation } from '@tanstack/react-query';
import { User } from 'firebase/auth';
import { register } from '../api/services/auth';

export type TRegisterFormValues = {
    email: string;
    password: string;
    displayName: string;
};

export const useRegister = (
    onSuccess?: (user: User | null) => void,
    onError?: (error: Error) => void
) => {
    const response = useMutation<User | null, Error, TRegisterFormValues>({
        mutationFn: ({ email, password, displayName }) => register(email, password, displayName),
        onSuccess,
        onError,
    });

    return response;
};
