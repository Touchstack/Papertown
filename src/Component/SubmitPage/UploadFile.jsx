import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex items-center text-sm text-opacity-30 border-2 border-dashed border-neutral-400 w-[149px] h-[55px] rounded-lg p-2 sm:w-1/4 ">
      <label
        htmlFor="fileInput"
        className="hover:bg-blue-700 text-black font-Regular py-2 px-4 rounded inline-flex items-center"
      >
        {/* <FontAwesomeIcon icon={faUpload} className="mr-2" /> */}
        <span>{selectedFile ? "Upload Another File" : "Upload File"}</span>
      </label>
      <input
        className=" bg-transparent hidden"
        accept=".pdf, .doc, .docx"
        type="file"
        id="fileInput"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <span className="ml-3">Selected file: {selectedFile.name}</span>
      )}
    </div>
  );
};

export default UploadFile;
