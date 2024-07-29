import { IoIosArrowBack } from "react-icons/io";
import target from "@/assets/Images/mingcute.png";
import { tags } from '../../../../../ConstantData'

const SingleSubmissions = ({onBackClick}) => {
  
  const handleClick = () => {
   onBackClick(false)
  }

  return (
    <div>
        <div className="flex flex-col gap-y-2">
         <div onClick={handleClick} className="flex gap-x-2 items-center hover:cursor-pointer">
          <IoIosArrowBack size={30} />
            <h1 className="sm:text-[36px] text-2xl font-Bold">
                Repetitive sounds of the echo
            </h1>
          </div>

          <div className="flex space-x-3">
            <img src={target} alt="" />
            <p>23rd January, 2023</p>
          </div>
        </div>

        <p className="md:text-[14px] mt-3  text-[#027A48] w-fit bg-[#ECFDF3] py-2 px-4 rounded-[50px] text-[13px] font-bold font-Varela">
            Published
        </p>
 
     {/* Use a react-PDF to render this */}
     <div className="space-y-5 p-4">
        <p>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
        <p>
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
         and more recently with desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. 
        </p>
        <p>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
     </div>

     <div className="p-4">
        <h1 className="font-Bold">Writing Category</h1>

        <div className="flex gap-2 mt-3 mb-3">
             <div className="border border-[#B8B8B8] bg-[#EDEDED] py-2 px-4 rounded-full">
               <p className="text-[#5A5A5A] font-Medium">Essay</p>
             </div>
        </div>
     </div>

     <hr className="w-full" />

     <div className="p-4">
      <div className="flex flex-col gap-y-4 custom-497:flex-row custom-497:items-center justify-between">
      <h1 className="font-Bold">Feedback</h1>
      <div className="text-[#52B4AE] flex flex-col gap-y-2 custom-497:flex-row custom-497:items-center gap-x-4 font-SemiBold ">
        <p className="cursor-pointer"><a href="">View all (3) revisions</a> </p>
        <button className="py-2 px-4 border border-[#52B4AE] rounded-[30px]">Submit revision</button>
      </div>
      </div>
       

        <div className="flex flex-col py-3">
            <h3 className="text-[#A3A3A3] text-[13px]">Comments</h3>
            <p className="max-w-[568px]">
              It has survived not only five centuries, 
              but also the leap into electronic typesetting, 
              remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software.
            </p>
        </div>
     </div>
    </div>
  )
}

export default SingleSubmissions