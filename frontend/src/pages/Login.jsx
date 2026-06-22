import { login } from "../services/auth";

function Login() {

  const handleLogin = async () => {
    try {
      const result = await login();

      localStorage.setItem(
      "user",
      JSON.stringify(result.user)
    );

    window.location.href = "/dashboard";

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Continue with Google
      </button>

    </div>
  );
}

export default Login;