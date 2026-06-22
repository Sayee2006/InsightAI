import Layout from "../components/Layout";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>

      <div className="p-6">

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to InsightAI 🚀
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 mt-8">

          <div className="flex items-center gap-6">

            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />

            <div>

              <h2 className="text-2xl font-bold">
                {user.displayName}
              </h2>

              <p className="text-gray-500">
                {user.email}
              </p>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;