import { useState } from "react";
import { articles } from "../../../../../ConstantData";
import target from "@/assets/Images/mingcute.png";
import SingleSubmissions from "./SingleSubmissions";

const Submissions = ({ setIsSubmitting }) => {
    const [showDetails, setshowDetails] = useState(false)

    const handleSubmitting = () => {
      setIsSubmitting(true)  
    }

    const showSingleData = () => {
       setshowDetails(true)
    }

  return (
    <div className="space-y-4">
      {!showDetails ? (
      <>
        <div className="flex justify-between">
         <h3 className="text-[29px] font-Bold">Submissions</h3>
         <button onClick={handleSubmitting} className="flex items-center font-SemiBold justify-center gap-3 text-[14px]  border-[1px] border-[#52B4AE] text-[#52B4AE] p-2 rounded-3xl">
           Submit your writing
         </button>
       </div>
 
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[10px] lg:gap-[15px]">
         {articles.map((article, index) => (
           <div onClick={showSingleData} key={index} className="group max-w-sm hover:cursor-pointer rounded-[30px] border overflow-hidden p-4 transition ease-in-out duration-300">
           <div
             className={`flex justify-center items-center font-bold md:text-[15px] text-[10px] md:w-[70px] w-[50px] md:h-[40px] h-[30px] rounded-[30px] border-[1px] border-black transition ease-in-out duration-300 ${
               article?.contentPreview ? "group-hover:hidden" : ""
             }`}
           >
             {article?.category}
           </div>
       
           <div
             className={`flex flex-row items-center pt-5 gap-3 transition ease-in-out duration-300 ${
              article?.contentPreview ? "group-hover:hidden" : ""
             }`}
           >
             <img
               src={target}
               alt=""
               className="transition ease-in-out duration-300 w-[20px] md:w-[30px] h-[30px]"
             />
             <p className="md:text-[20px] text-[10px]">{article?.date}</p>
           </div>
       
           <div className="pt-4">
             <h3 className="font-bold md:text-4xl transform ease-out duration-300 text-[15px]">
               {article?.title}
             </h3>
           </div>
       
           <div
             className={`hidden pt-[10px] transition ease-out duration-500 ${
               article?.contentPreview ? "group-hover:block" : "hidden"
             }`}
           >
             <p className="w-auto">{article?.contentPreview}</p> {/*add a width*/}
           </div>
       
           <div
             className={`animate flex flex-row pt-6 gap-3 items-center transition ease-in-out duration-300 ${
              article?.contentPreview ? "group-hover:hidden" : ""
             }`}
           >
             <div className="md:w-[40px] md:h-[40px] w-[30px] h-[30px] bg-orange-300 rounded-full flex justify-center items-center overflow-hidden transition ease-in-out duration-300">
               <img
                 src={article?.image}
                 alt=""
                 className="rounded-full w-full h-full object-cover"
               />
             </div>
             <p className="md:text-[16px] text-[10px] font-bold font-Varela text-[#000]">
               {article?.author}
             </p>
           </div>
         </div>
         ))}
       </div>
      </>
      ) : (
        <SingleSubmissions onBackClick={setshowDetails} />
      )}

      {/*  */}
     </div>
  )
}

export default Submissions