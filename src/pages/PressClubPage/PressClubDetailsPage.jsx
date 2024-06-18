import GeneralNav from "@/Navbar/GeneralNav";
import ChildrenPic from "@/assets/Images/Children.png";
import { BsCalendar } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import Footer from "../FooterPage/Footer";
import PublicationsRowData from "@/Component/PublicationsRowData/PublicationsRowData";
import MapComponent from "../../Component/MapComponent";

const PressClubDetailsPage = () => {
  return (
    <div>
      <GeneralNav 
        bgColor="transparent" 
        bgShadow="shadow" 
        btnColor="black" 
      />
      <div className="md:p-20 md:px-40 space-y-10 p-5 pt-10">
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

         <div className="flex justify-between w-full md:w-6/12">
            {/* right section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                 <MdMyLocation color="#A3A3A3" />
                 <p className="font-SemiBold">Location</p>
              </div>

              <div>
                <p>2 JKN Airport West</p>
                <p>JWHM+WJH, First Floor, Blu Business</p>
              </div>

             <div className="md:flex hidden">
               <MapComponent />
             </div>
            </div>

            {/* second section */}
            <div className="flex flex-col space-y-4">
              <div className="mb-10">
                <div className="flex items-center gap-3">
                    <MdLocalPhone color="#A3A3A3" />
                    <p className="font-SemiBold">Contact</p>
                </div>

                <div>
                    <p>Patience Awuku</p>
                    <p>fortune.adeleke@gmail.com</p>
                    <p>0200 234 567 / 0200 234 567</p>
                </div>
              </div>


              <div>
                <div className="flex items-center gap-3">
                    <FaRegClock  color="#A3A3A3" />
                    <p className="font-SemiBold">Meeting Schedule</p>
                </div>

                <div>
                   <div className="flex gap-4">
                    <p>Wednesday</p>
                    <p>3 pm–5 pm</p>
                   </div>
                   <div className="flex gap-4">
                    <p>Thursday</p>
                    <p>3 pm–5 pm</p>
                   </div>
                   <div className="flex gap-4">
                    <p>Friday</p>
                    <p>3 pm–5 pm</p>
                   </div>
                </div>
              </div>

            </div>
         </div>

      </div>

      <div className="md:px-20 px-5 pb-20">
         <div className="flex flex-row items-center justify-between">
            <h1 className="text-[42px] font-Bold hidden md:flex mr-[10rem]">Published magazines</h1>
           <div className="md:flex flex-row hover:underline text-[#52B4AE] items-center gap-2">
            <p><a href="/publication">View all</a></p>
           </div>
         </div>
      <PublicationsRowData />
    </div>     
            
     

      <div className="bg-[#B44DB8]">
        <Footer />
    </div>
    </div>
  );
};

export default PressClubDetailsPage;
