import Layout from "../components/Layout";
import app from "../services/firebase";

function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">
        Welcome to InsightAI 🚀
      </h1>

      <p className="mt-4 text-gray-600">
        AI Powered Data Analytics Platform
      </p>
    </Layout>
  );
}

export default Home;