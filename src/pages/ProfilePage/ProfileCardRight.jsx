import { FaPencil } from "react-icons/fa6";
import ProfilePic from "../../assets/Images/Profile.png";
// import Line from "../../assets/Images/lines.png";
// import { MdCelebration } from "react-icons/md";
import TextDel from "./TextDel";
function ProfileCardRight() {
  return (
    <div className="bg-white shadow-xl mb-[15%] rounded-xl lg:w-[973px] lg:h-[747px] lg:p-10 p-5 md:p-10 md:ml-10 w-[90vw]  md:h-[701px] ml-5 lg:ml-0">
      {/* header text section start  */}
      <div className="flex justify-between">
        <h3 className="text-[29px] font-Bold">My Profile</h3>
        <button className=" flex items-center justify-center gap-3 text-[14px]  border-[1px] border-[#52B4AE] text-[#52B4AE]  w-[74px] h-[36px] rounded-3xl">
          <FaPencil />
          Edit
        </button>
      </div>
      {/* header text section end  */}
      {/* image and text section start  */}
      <div className="mt-10">
        <div className="flex items-center lg:gap-9 gap-3 ">
          <img
            src={ProfilePic}
            alt=""
            className="lg:w-[113px] lg:h-[113px] w-[100px] h-[100px] "
          />
          {/* name and email start  */}
          <div>
            <span className="font-Bold text-[24px]">Fortune Adeleke</span>
            <p>fortune.adeleke@gmail.com</p>
          </div>
          {/* name and email end  */}
        </div>
        <div className="mt-10">
          <span className="text-[#A3A3A3]">About the writer</span>
          <p className="lg:w-[730px]">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software.
          </p>
        </div>
      </div>
      {/* image and text section end  */}

      {/* Text del section start  */}
      <div className="mt-14">
        <TextDel />
      </div>
      {/* Text del section end  */}
    </div>
  );
}

export default ProfileCardRight;
