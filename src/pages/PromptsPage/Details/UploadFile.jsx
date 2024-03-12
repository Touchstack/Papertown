import { useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import {  createSubMissions } from "../../.././api";

const UploadFile = ({id, title}) => {
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
        promptId: id,
        promptTitle: title,
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
    <div className="sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 p-6 flex flex-col items-center justify-center">
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
        className="bg-[#099B96] font-Bold md:w-2/6 sm:w-4/6 h-2/6 px-[30px] py-2.5 gap-2.5 justify-center text-center inline-flex text-white mt-10 mb-10 md:rounded-full rounded-3xl"
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
  