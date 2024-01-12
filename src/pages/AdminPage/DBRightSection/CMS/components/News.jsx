import { HiPlus } from "react-icons/hi2";
import { useState } from 'react';

const News = () => {
  const [isChecked, setIsChecked] = useState(Array(6).fill(false));

  // const initialCheckboxState = Array.from({ length: yourData.length }, () => false);
  // const [isChecked, setIsChecked] = useState(initialCheckboxState);
  // use this line when array lenght is known

  const handleCheckboxChange = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };
 
  return (
    <div>
      {/* Buttons */}
      <div className="flex justify-end gap-5 mx-[5%] mb-10">
        <button className="w-[124px] h-[50px] bg-[#F2F2F2] text-[#BDBDBD] rounded-[30px]">
          Remove
        </button>
        <button className="w-[175px] h-[50px] bg-[#DF327B] text-[#F2F2F2] rounded-[50px] flex items-center justify-center font-[700]">
          <HiPlus /> Add news item
        </button>
      </div>

      <div className="flex flex-row justify-between items-center justify-center">
        {/* Left */}
        <div className="flex flex-col items-center justify-start mb-5 gap-10">
          {Array.from({length: 6}).map((_, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked[index]}
                onChange={() => handleCheckboxChange(index)}
              />

              <div className="flex flex-col justify-center ml-2">
                <h1 className="font-[700] text-[#000] text-[16px]">
                  UNICEF to initiate Grade 7 spelling Bee
                </h1>

                <p className="text-[10px]">Updated 10 Apr 17:23</p>
              </div>
            </div>
          ))}
        </div>
        {/* Left */}

        {/* Right */}
        <div className="flex flex-col items-center justify-end mb-5  gap-8">
          {Array.from({length: 6}).map((_, index) => (
            <div key={index} className="">
            

              <div className="flex flex-col justify-center ml-2 w-[457px]">
                <p className=" text-[#393939] text-[16px]">
                  Christmas writing contest . Dec 17 ‘23 Writers will identify their favorite sensory memories and transfer them to a visual heart map.
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right */}
      </div>
    </div>
  )
}

export default News;
