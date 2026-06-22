import { useState } from "react";
import Layout from "../components/Layout";

function Upload() {

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setFile(selectedFile);

    console.log(selectedFile);
  };

  return (
    <Layout>

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800">
          Upload Dataset
        </h1>

        <p className="text-gray-500 mt-2">
          Upload your CSV or Excel file for AI-powered analysis.
        </p>

        <div className="mt-10 border-2 border-dashed border-blue-400 rounded-xl p-12 bg-white">

          <div className="text-center">

            <h2 className="text-2xl font-semibold">
              📂 Choose Dataset
            </h2>

            <p className="text-gray-500 mt-2">
              Supported formats: CSV, XLSX
            </p>

            <input
              type="file"
              accept=".csv,.xlsx"
              onChange={handleFileChange}
              className="mt-6"
            />

            {file && (

              <div className="mt-8">

                <h3 className="text-xl font-semibold text-green-600">
                  File Selected Successfully ✅
                </h3>

                <p className="mt-2">
                  <strong>Name:</strong> {file.name}
                </p>

                <p>
                  <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
                </p>

                <p>
                  <strong>Type:</strong> {file.type}
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Upload;