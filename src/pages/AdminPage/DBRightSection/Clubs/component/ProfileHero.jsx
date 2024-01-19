import Bell from "../../../../../assets/Images/NotificationBell.svg";
import AmakaImg from "../../../../../assets/Images/Amaka.svg";
import Arrow from "../../../../../assets/Images/ArrowUp.svg";
import ChildrenPic from "../../../../../assets/Images/Children.svg";
import Boy from "../../../../../assets/Images/SmilingBoy.svg";
import Girl from "../../../../../assets/Images/SmilingGirl.svg";
import Student from "../../../../../assets/Images/Student.svg";
import Pupil from "../../../../../assets/Images/Pupil.svg";
import Calender from "../../../../../assets/Images/bi_calendar.svg";
import PencilPic from "../../../../../assets/Images/Pencil.svg";
import ArrowIcon from "../../../../../assets/Images/ArrowLeft.svg";

const ProfileHero = () => {
  const handleButtonClick = () => {
    // Navigate to another page
    window.location.href = "/admin/manageclub";
  };
  return (
    <div className="mx-auto">
      <div className="flex flex-row items-center justify-between md:p-10 p-6 mt-8 lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center">
        <h1 className="font-Bold text-4xl">
          <span className="inline-flex mr-2">
            {" "}
            <img src={ArrowIcon} alt="ArrowLeft.svg" />
          </span>
          Clubs Profile
        </h1>
        <div className="flex gap-4">
          <img src={Bell} alt="NotificationBell.svg" />
          <img src={AmakaImg} alt="Amaka.svg" />
          <p className="inline-block">Amaka Ndubisi </p>
          <img src={Arrow} alt="ArrowUp.svg" className="mt-2 w-[20px]" />
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="ml-16">
          <img src={ChildrenPic} />

          <div className="">
            <p className="text-[#000000] lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-lg my-8 font-Bold">
              Mary Mother of Good Counsel
            </p>
            <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={Boy}
                  alt=""
                />
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={Girl}
                  alt=""
                />
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={Student}
                  alt=""
                />
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={Pupil}
                  alt=""
                />
                <span className="inline-flex text-[#000000] text-md m-3 pl-7 tracking-wider ">
                  15 members
                </span>
              </div>
              <div className="flex text-[#A3A3A3] gap-5 pt-4 font-Medium leading-6 tracking-wider text-left spacing-4">
                <img src={Calender} alt="bi_calender.svg" />
                Date created
                <span className="text-[#000000]">1st Nov, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-4">
          <button
            className="inline-flex text-[#FFFFFF] font-Bold rounded-full w-[115px] py-2 text-[#000000] bg-[#DB2E78] rounded-full justify-center items-center mt-40"
            onClick={handleButtonClick}
          >
            <span className="inline-flex mr-2 ">
              <img src={PencilPic} alt="Pencil.svg" />
            </span>
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
