import { HiPlus } from "react-icons/hi2";

const News = () => {
 
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
    </div>
  )
}

export default News
