import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, getAuth, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

export const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account', 
  });
  
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};

export const register = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    await updateProfile(user, { displayName });
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

export const logout = () => {
  return signOut(auth);
};