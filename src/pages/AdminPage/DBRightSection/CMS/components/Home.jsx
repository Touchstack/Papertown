import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { LuPencil } from "react-icons/lu";

const Home = () => {
  const [marqueInput, setMarqueInput] = useState('');
  const [boardInput, setBoardInput] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState('');

  const handlemarqueChange = (e) => {
    setMarqueInput(e.target.value);
  };

  const handleboardChange = (e) => {
    setBoardInput(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onDrop = useCallback(
    function (acceptedFiles) {
      setFile(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
    },
  });

  return (
    <div className="px-10 flex flex-col ">
      {/* Marque section */}
      <div className="flex flex-row mb-10 gap-[150px]">
        <p className="text-[#000] font-[700]">Marque</p>

        <div>
          {/* Create an input field here */}
          <input
            type="text"
            value={marqueInput}
            onChange={handlemarqueChange}
            className="w-[522px] h-full p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
            placeholder="Type something..."
          />
        </div>
      </div>
      {/* Marque section */}

      <hr className="mx-5" />

      {/* Notice Board */}
      <div className="mt-[2.5rem] flex flex-row gap-[120px]">
        <p className="text-[#000] font-[700]">Notice board</p>

        <div className="flex flex-col">
          {/* Create an input field here */}
          <div className="mt-10">
            <p className="text-[#393939] mb-2">Board Title</p>
            <input
              type="text"
              value={boardInput}
              onChange={handleboardChange}
              className="w-[522px] h-full p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
              placeholder="Type something..."
            />
          </div>

          <div className="mt-10">
            <p className="text-[#393939] mb-2">Description</p>
            <input
              type="text"
              value={description}
              onChange={handledescriptionChange}
              className="w-[522px] h-[140px] p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
              placeholder="Type something..."
            />
          </div>

          <div className="mt-10 mb-10">
            <p className="text-[#393939] mb-2">Upload cover photo</p>
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <div className="w-[500px] h-[200px] border-dashed border-4  rounded-[10px] relative">
                {fileUrl && (
                  <img
                    src={fileUrl}
                    alt="Uploaded Cover"
                    className="h-[195px] w-[500px] rounded-[10px] object-cover"
                  />
                )}
                <button className='absolute top-[5rem] left-[10rem] flex flex-row items-center justify-center gap-2 border-[1px] border-[#FFF] rounded-[10px] p-2' >
                  <LuPencil color='#FFF'/>
                  <p className='text-[#FFF] font-[700]'>Change image</p>
                </button>
              </div>
            </div>
            <div className='flex flex-col'>
             <p className='text-[10px] flex justify-end pt-3'>Updated 10 Apr 17:23</p>
              <button className='flex w-[216px] items-center justify-center h-[54px] mt-10 bg-[#DF327B] rounded-[50px]'>
                <p className='flex text-[#FFF] font-[700]'>Save Changes</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Notice Board */}
    </div>
  );
};

export default Home;
