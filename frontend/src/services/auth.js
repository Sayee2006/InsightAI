import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const login = async () => {
  return await signInWithPopup(auth, provider);
};

export const logout = async () => {
  return await signOut(auth);
};