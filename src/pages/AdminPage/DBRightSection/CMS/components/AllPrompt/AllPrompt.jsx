import { HiChevronLeft} from 'react-icons/hi2';
import { promptTypes } from '../../../../../../../ConstantData';
import AllPromtCard from '../AllPromptCard/AllPromtCard';
import { PiSlidersHorizontalThin } from "react-icons/pi";

const AllPrompt = () => {
  return (
    <div className="flex flex-col">
       <div className='flex flex-row items-center gap-3 text-[#040A1D] font-[700] cursor-pointer mb-10'>
          <HiChevronLeft />
          <p className='text-[26px]'>All prompts</p>
       </div>
          {/* PropTypes and filter section */}
          <div className='flex flex-col md:flex-row items-center justify-between mb-10'>
            <div className='flex flex-row items-center gap-3'>
              {promptTypes.map((promptType) => (
                <div key={promptType.id} className='bg-[#7272721A] rounded-full w-[110px] h-[44px] text-[#000] flex items-center justify-center mb-2 md:mb-0'>
                  {promptType.msg}
                </div>
              ))}
            </div>

            <div className='w-[110px] h-[44px] flex items-center justify-center rounded-full border-[1px] border-[#393939] text-[#000] gap-3 cursor-pointer mt-3 md:mt-0'>
              <PiSlidersHorizontalThin />
              Filter
            </div>
          </div>
          {/* PropTypes and filter section */}

          <AllPromtCard /> 
    </div>
  )
}

export default AllPrompt