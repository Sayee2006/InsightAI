import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Menu
        </h2>

        <nav className="space-y-3">

          <Link
            to="/"
            className="block p-3 rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            🏠 Home
          </Link>

          <Link
            to="/dashboard"
            className="block p-3 rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/upload"
            className="block p-3 rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            📂 Upload Dataset
          </Link>

          <Link
            to="/chat"
            className="block p-3 rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            🤖 AI Chat
          </Link>

          <Link
            to="/reports"
            className="block p-3 rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            📑 Reports
          </Link>

        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;