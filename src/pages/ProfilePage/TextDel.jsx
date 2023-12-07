import { MdCelebration } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { Icon } from "@iconify/react";
function TextDel() {
  return (
    <div>
      {/* top start  */}
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2">
        {/* start  */}
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <MdCelebration />
            <p>Age</p>
          </div>
          <span className="font-Bold">11 years</span>
        </div>
        {/* end  */}
        {/* start  */}
        <div>
          <div className="flex gap-2 lg:mt-0 mt-2 items-center text-[#A3A3A3]">
            <FaGraduationCap />
            <p>School</p>
          </div>
          <span className="font-Bold">Faith Montessori</span>
        </div>
        {/* end  */}
        {/* start  */}
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <Icon
              icon="lets-icons:dimond-alt-light"
              color="#a3a3a3"
              width="23"
              height="20"
            />
            <p>Grade</p>
          </div>
          <span className="font-Bold">Faith Montessori</span>
        </div>
        {/* end  */}
      </div>
      {/* top down  */}
      {/* top start  */}
      <div className="grid mt-5 lg:grid-cols-5 md:grid-cols-2 grid-cols-2">
        {/* start  */}
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <IoMdCall />
            <p>Contact</p>
          </div>
          <span className="font-Bold">0200 234 567</span>
        </div>
        {/* end  */}
        {/* start  */}
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <FaRegCalendar />
            <p>Date joined</p>
          </div>
          <span className="font-Bold">1st Nov, 2023</span>
        </div>
        {/* end  */}
      </div>
      {/* top down  */}

      {/* Ineterests section start  */}
      <div className="lg:mt-16  mt-10">
        <h5 className="text-[22px] font-Bold mb-5">Ineterests</h5>
        <div className="flex">
          <a href="#">
            <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#56CCF233] text-[#2D9CDB] font-bold rounded-3xl md:w-[87px] md:h-[40px]">
              Fiction
            </button>
          </a>
          <a href="#">
            <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FFF95926] text-[#E1B300] font-bold rounded-3xl md:w-[87px] md:h-[40px]">
              Fiction
            </button>
          </a>
          <a href="#">
            <button className="md:text-[13px] text-[13px] px-3 mr-3  leading-8 bg-[#FFD8FF80] text-[#B44DB8] font-bold rounded-3xl md:w-[87px] md:h-[40px]">
              Fiction
            </button>
          </a>
        </div>
      </div>
      {/* Ineterests section end  */}
    </div>
  );
}

export default TextDel;
