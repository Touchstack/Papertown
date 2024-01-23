import { HiChevronLeft } from 'react-icons/hi2';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { LuUpload } from 'react-icons/lu';
import Modal from './Modal';


const AddNewsItem = () => {
   const [title, setTitle] = useState("")
   const [file, setFile] = useState([]);
   const [fileUrl, setFileUrl] = useState('');
   const [about, setAbout] = useState("")
   const [isModalVisible, setIsModalVisible] = useState(false);

   const openModal = () => {
       setIsModalVisible(true);
   }
 
   const closeModal = () => {
       setIsModalVisible(false);
   }

   const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
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
    <div className="px-10 flex flex-col">
        <div className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer'>
          <HiChevronLeft />
          <p className='text-[26px]'>Add news item</p>
        </div>

        <section className='mt-8 text-[#040A1D]'>
            <div className='flex flex-col'>
                <label className='mb-1'>Title</label>
                <input
                  type='text'
                  placeholder="News title"
                  className='w-[40%] h-[50px] rounded-[10px] px-5'
                  value={title}
                  onChange={handleTitleChange}
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
                  <LuUpload color="#FFF" />
                  <p className="text-[#FFF] font-[700]">Upload image</p>
                </button>
              </div>
            </div>
          </div>

            <div className='flex flex-col mt-10'>
                <label className='mb-1'>Add text here</label>
                <textarea
                  type='text'
                  placeholder="About the writer"
                  className='w-[50%] h-[200px] rounded-[10px] px-2 py-2'
                  value={about}
                  onChange={handleAboutChange}
                />
            </div>
        </section>

          <button className="flex w-full md:w-[216px] items-center justify-center h-[54px] mb-5 mt-5  bg-[#DF327B] rounded-[50px]" onClick={openModal}>
            <p className="flex text-[#FFF] font-[700]">Submit News</p>
          </button>

          {isModalVisible && 
                <Modal isVisible={isModalVisible} text="News item added!" onClose={closeModal} />
            }
    </div>
  )
}

export default AddNewsItem