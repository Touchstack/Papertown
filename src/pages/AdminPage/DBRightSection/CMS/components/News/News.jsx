import { useState } from 'react';
import { HiPlus } from 'react-icons/hi2';
import AddNewsItem from '../AddNewsItem/AddNewsItem';

const News = () => {
  const [isChecked, setIsChecked] = useState(Array(6).fill(false));
  const [addNewsItem, setAddNewsItem] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };

  const handleGoBack = () => {
    setAddNewsItem(false)
  }

  return (
    <div className="md:mx-[5%] mb-10">
      {addNewsItem ? (
        <AddNewsItem onGoBack={handleGoBack} />
      ) : (
        <>
          {/* Buttons */}
          <div className="flex justify-end gap-5 mx-[5%] mb-10">
            <button className="w-[124px] h-[50px] bg-[#F2F2F2] text-[#BDBDBD] rounded-[30px]">
              Remove
            </button>
            <button
              className="md:w-[175px] w-[104px] md:text-[16px] text-[10px] h-[50px] bg-[#DF327B] text-[#F2F2F2] rounded-[50px] flex items-center justify-center font-[700]"
              onClick={() => setAddNewsItem(true)}
            >
              <HiPlus /> Add news item
            </button>
          </div>

          <div className="flex flex-col">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-row justify-between w-full mb-5">
                  {/* Left */}
                  <div className="flex items-center w-[48%]">
                    <input
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />

                    <div className="flex flex-col justify-center ml-2">
                      <h1 className="font-[700] hover:cursor-pointer text-[#000] text-[10px] md:text-[16px]">
                        UNICEF to initiate Grade 7 spelling Bee
                      </h1>

                      <p className="text-[10px]">Updated 10 Apr 17:23</p>
                    </div>
                  </div>
                  {/* Left */}

                  {/* Right */}
                  <div className="w-[35%] mt-3">
                    <p className="text-[#393939] text-[10px] md:text-[16px]">
                      Christmas writing contest. Dec 17 ‘23 Writers will
                      identify their favorite sensory memories and transfer
                      them to a visual heart map.
                    </p>
                  </div>
                  {/* Right */}
                </div>

                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default News;
