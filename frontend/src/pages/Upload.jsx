import { useState } from "react";
import Layout from "../components/Layout";
import { uploadDataset } from "../api/upload";

function Upload() {
  // Store selected file
  const [file, setFile] = useState(null);

  // Store backend response
  const [result, setResult] = useState(null);

  // Runs when user selects a file
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Runs when user clicks Upload
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file first.");
      return;
    }

    try {
      const response = await uploadDataset(file);

      console.log(response);

      setResult(response);

      alert("Dataset uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800">
          Upload Dataset
        </h1>

        <p className="text-gray-500 mt-2">
          Upload your CSV file for AI-powered analysis.
        </p>

        <div className="mt-10 border-2 border-dashed border-blue-400 rounded-xl p-10 bg-white">

          <h2 className="text-2xl font-semibold">
            📂 Choose Dataset
          </h2>

          <p className="text-gray-500 mt-2">
            Supported formats: CSV
          </p>

          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="mt-6"
          />

          {file && (
            <div className="mt-6">
              <h3 className="text-green-600 font-semibold">
                File Selected ✅
              </h3>

              <p>
                <strong>Name:</strong> {file.name}
              </p>

              <p>
                <strong>Size:</strong>{" "}
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}

          <button
            onClick={handleUpload}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Upload CSV
          </button>

          {result && (
            <div className="mt-8 p-4 bg-green-100 rounded-lg">

              <h2 className="text-xl font-bold">
                Dataset Uploaded Successfully ✅
              </h2>

              <p>
                <strong>Filename:</strong> {result.filename}
              </p>

              <p>
                <strong>Rows:</strong> {result.rows}
              </p>

              <p>
                <strong>Columns:</strong> {result.columns}
              </p>

            </div>
          )}

        </div>

      </div>
    </Layout>
  );
}

export default Upload;