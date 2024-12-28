import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};
export const register = async (
  email: string,
  password: string,
  displayName: string
): Promise<User | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: displayName });

    return user;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const logout = () => {
  return signOut(auth);
};