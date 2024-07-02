import { IoIosArrowBack } from "react-icons/io";
import target from "@/assets/Images/mingcute.png";
import { tags } from '../../../../../ConstantData'

const SingleSubmissions = ({onBackClick}) => {
  
  const handleClick = () => {
   onBackClick(false)
  }

  return (
    <div>
        <div className="flex flex-col space-x-3">
         <div onClick={handleClick} className="flex items-center hover:cursor-pointer">
          <IoIosArrowBack size={30} />
            <h1 className="text-[36px] font-Bold">
                Repetitive sounds of the echo
            </h1>
          </div>

          <div className="flex space-x-3">
            <img src={target} alt="" />
            <p>23rd January, 2023</p>
            <p>2 min read</p>
          </div>
        </div>

        <p className="md:text-[14px] mt-3 w-1/12 text-[#027A48] bg-[#ECFDF3] p-2 rounded-[50px] text-[13px] font-bold font-Varela">
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
             <div className="border-[1px] border-[#B8B8B8] bg-[#EDEDED] p-2 rounded-full">
               <p className="text-[#5A5A5A]">Essay</p>
             </div>
        </div>
     </div>

     <hr className="w-full" />

     <div className="p-4">
        <h1 className="font-Bold">Remarks</h1>

        <div className="flex flex-col py-3">
            <h3 className="text-[#A3A3A3] text-[13px]">Score</h3>
            <p>7 out of 10</p>
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