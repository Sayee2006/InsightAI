import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOugs5Ueb1RoOXSJCPU5-lIlZJ3azZ6w0",
  authDomain: "insightai-eac6c.firebaseapp.com",
  projectId: "insightai-eac6c",
  storageBucket: "insightai-eac6c.firebasestorage.app",
  messagingSenderId: "401017781057",
  appId: "1:401017781057:web:2d6f94ce3e10871bc17fc0",
};

const app = initializeApp(firebaseConfig);

// Create Authentication object
export const auth = getAuth(app);

export default app;


