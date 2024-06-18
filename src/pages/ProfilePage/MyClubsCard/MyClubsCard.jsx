import ChildrenPic from "@/assets/Images/Children.png";
import { BsCalendar } from "react-icons/bs";

const MyClubsCard = () => {
  return (
    <div className="bg-white shadow-xl mb-[15%] rounded-xl lg:w-[973px] lg:h-[747px] lg:p-10 p-5 md:p-10  w-[90vw]  md:h-[701px]">
       <div className="flex flex-col space-y-4">
        <h1 className="font-Bold text-[36px]">Clubs</h1>
        <p className="mt-3 text-[16px] max-w-[564px] font-VarelaRegular">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        
        <div className="bg-green-600 w-full h-[260px] rounded-[50px] relative">
          <img src={ChildrenPic} className="absolute inset-0 w-full rounded-[20px] h-[260px] object-cover" alt="Children" />
        </div>


        <div>
            <h1 className="font-Bold md:text-[42px] text-2xl mb-6">Mary Mother of Good counsel</h1>
            <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={ChildrenPic} alt="" />
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={ChildrenPic} alt="" />
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={ChildrenPic} alt="" />
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={ChildrenPic} alt="" />
                <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                  + 15 members
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
                <BsCalendar color="#A3A3A3" />
                <p className="text-[#A3A3A3] font-Regular">Date created</p>
                <p>1st Nov, 2023</p>
            </div>
        </div>

       </div>
    </div>
  )
}

export default MyClubsCard