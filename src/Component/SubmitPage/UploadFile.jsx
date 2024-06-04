import { useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import {  createSubMissions } from "../../api";

const UploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [Error, setError] = useState("")
    const [Success, setSuccess] = useState("")
    const [Loading, setLoading] = useState(false)
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };

  const data = localStorage.getItem('user');
  const user = JSON.parse(data);
 
  const uploadFileHandler = async () => {
    if (!selectedFile) {
      setError("Please select a file");
      return;
    }

  
      const payload = {
        userId: user?.data?.id,
        promptId: "",
        promptTitle: "",
        file: selectedFile,
      };
  
      try {
        setLoading(true)
        const response = await createSubMissions(payload);
        console.log(response);
        if (response.status === 201) {
          setSuccess(response?.data?.message);
          alert(response?.data?.message)
          setLoading(false)
        } else {
          setError(response?.response?.data?.error);
          aler(response?.response?.data?.error)
          setLoading(false)
        }
      } catch (error) {
        console.error("Error occurred while uploading file:", error);
        setError("An error occurred while uploading the file");
  };
};
  
  
  return (
    <div className="p-6 md:w-2/6 flex flex-col items-center justify-center">
      <div className="flex items-center text-sm text-opacity-30 border-2 border-dashed border-neutral-400 w-full">
        <label
          htmlFor="fileInput"
          className="hover:bg-[#099B96] text-black font-Regular py-2 px-4 rounded flex items-center"
        >
          <BsFilePdf className=" mr-2 w-[21.75px] h-[29px]" />
          <span>{selectedFile ? "Upload Another File" : "Upload File"}</span>
        </label>
        <input
          className="bg-transparent hidden"
          accept=".pdf"
          type="file"
          id="fileInput"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <span className="ml-3">Selected file: {selectedFile.name}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#099B96] p-4 font-Bold  justify-center text-center inline-flex text-white my-10 md:rounded-full rounded-3xl"
        onClick={uploadFileHandler}
        disabled={!selectedFile} 
      >
        {Loading && <ClipLoader color={'#ffffff'} size={20} />}
        {!Loading && "Submit my writeup"}
      </button>


    </div>
    );
  };
  
  export default UploadFile;
  