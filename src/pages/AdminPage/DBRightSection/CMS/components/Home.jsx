import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { LuPencil } from 'react-icons/lu';
import Modal from './Modal';

const Home = () => {
  const [marqueInput, setMarqueInput] = useState('');
  const [boardInput, setBoardInput] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
      setIsModalVisible(true);
  }

  const closeModal = () => {
      setIsModalVisible(false);
  }

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
    <div className="px-4 md:px-10 flex flex-col">
      {/* Marque section */}
      <section className="flex flex-col md:flex-row md:mb-10 gap-4 md:gap-12">
        <p className="text-[#000] font-[700] mb-3 md:mb-0">Marque</p>

        <div>
          {/* Create an input field here */}
          <input
            type="text"
            value={marqueInput}
            onChange={handlemarqueChange}
            className="w-[350px] md:w-[522px] h-full p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
            placeholder="Type something..."
          />
        </div>
      </section>
      {/* Marque section */}

      <hr className="mx-5" />

      {/* Notice Board */}
      <section className="mt-5  flex flex-col md:flex-row gap-4 md:gap-12">
        <p className="text-[#000] font-[700] mb-3 md:mb-0">Notice board</p>

        <div className="flex flex-col w-full md:w-[60%]">
          {/* Create input fields here */}
          <div className="mt-5">
            <p className="text-[#393939] mb-2">Board Title</p>
            <input
              type="text"
              value={boardInput}
              onChange={handleboardChange}
              className="w-[350px] md:w-[500px] h-full p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
              placeholder="Type something..."
            />
          </div>

          <div className="mt-5">
            <p className="text-[#393939] mb-2">Description</p>
            <textarea
              type="text"
              value={description}
              onChange={handledescriptionChange}
              className=" w-[350px] md:w-[500px] h-[140px] p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
              placeholder="Type something..."
              maxLength={5000}
            />
          </div>

          <div className="mt-5 mb-5">
            <p className="text-[#393939] mb-2">Upload cover photo</p>
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <div className="w-full md:w-[522px] h-[200px] border-dashed border-4 rounded-[10px] relative">
                {fileUrl && (
                  <img
                    src={fileUrl}
                    alt="Uploaded Cover"
                    className="w-full md:w-[422px] h-[195px] rounded-[10px] object-cover"
                  />
                )}
                <button className="absolute  flex items-center justify-center gap-2 border-[1px] border-[#FFF] rounded-[10px] p-2 top-[5rem] left-[8rem] md:left-[10rem]">
                  <LuPencil color="#FFF" />
                  <p className="text-[#FFF] font-[700]">Change image</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <p className="text-[10px] flex pt-3">Updated 10 Apr 17:23</p>
              <button className="flex w-full md:w-[216px] items-center justify-center h-[54px] mt-5 md:mt-10 bg-[#DF327B] rounded-[50px]" onClick={openModal}>
                <p className="flex text-[#FFF] font-[700]">Save Changes</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Notice Board */}

      {isModalVisible && 
                <Modal isVisible={isModalVisible} text="Changes Saved!" onClose={closeModal} />
            }
    </div>
  );
};

export default Home;
