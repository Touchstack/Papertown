import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { BsFilePdf } from "react-icons/bs";

const UploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    return (
      <div className="flex items-center text-sm text-opacity-30 border-2 border-dashed border-neutral-400 lg:w-3/6 w-2/6 lg:h-2/6 h-2/6 rounded-lg p-2 sm:w-1/4">
        <label
          htmlFor="fileInput"
          className="hover:bg-[#099B96] text-black font-Regular py-2 px-4 rounded flex items-center"
        >
          <BsFilePdf className=" mr-2 w-[21.75px] h-[29px]" />
          <span>{selectedFile ? "Upload Another File" : "Upload File"}</span>
        </label>
        <input
          className="bg-transparent hidden"
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
  