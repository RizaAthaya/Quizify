import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../api/firebase';

type UserContextType = {
    user: User | null;
    loading: boolean; 
    setUser: (user: User | null) => void;
    logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    // states 
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); 

    // logout 
    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); 
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
