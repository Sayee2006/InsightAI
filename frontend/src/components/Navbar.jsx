import { logout } from "../services/auth";

function Navbar() {

  const handleLogout = async () => {
    try {
      await logout();

      localStorage.removeItem("user");

      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white h-16 flex items-center justify-between px-6 shadow-md">

      <h1 className="text-2xl font-bold">
        InsightAI
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;