import { MdCelebration } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { FaPencil } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { selectUser } from "@/redux/features/userSlice";
import { useSelector } from "react-redux";
import { formatDatePretty } from "@/utils/dateFormatting";

function MyProfileCardInfo({ setIsEditing }) {
  const user = useSelector(selectUser);

  // Parse the ISO string to get the date of birth
  const dob = new Date(user?.date_of_birth);

  console.log("dob: ", dob);

  // Calculate the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the current date and the birthdate
  const diffMs = currentDate - dob;

  console.log(diffMs);

  // Calculate the age by dividing the difference in milliseconds by the number of milliseconds in a year
  const age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <h3 className="text-[29px] font-Bold">My Profile</h3>
        {/* <button
          className="flex items-center justify-center gap-3 text-[14px] border-[1px] border-[#52B4AE] text-[#52B4AE] w-[74px] h-[36px] rounded-3xl"
          onClick={() => setIsEditing(true)}
        >
          <FaPencil />
          Edit
        </button> */}
      </div>
      <div className="mt-10">
        <div className="flex items-center lg:gap-9 gap-3 ">
          {/* <BsPersonCircle
            alt=""
            className="lg:w-[113px] lg:h-[113px] w-[100px] h-[100px] "
          /> */}
          <div>
            <span className="font-Bold text-[24px]">
              {user?.first_name}
              {"  "}
              {user?.last_name}
            </span>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
      {/* <div className="mb-10">
        <p className="text-[13px] text-[#A3A3A3]">About the writer</p>
        <span>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </span>
      </div> */}
      <div className="font-VarelaRegular flex flex-wrap gap-y-8 custom-497:flex-row  gap-x-12">
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <MdCelebration />
            <p>Age</p>
          </div>
          <span className="font-VarelaRegular">{age} years</span>
        </div>
        <div className="custom-497:border-x-2 custom-497:px-12">
          <div className="flex  gap-2 lg:mt-0 mt-2 items-center text-[#A3A3A3]">
            <FaGraduationCap />
            <p>School</p>
          </div>
          <span className="font-VarelaRegular">{user?.school}</span>
        </div>
        <div>
          <div className="flex gap-1 items-center text-[#A3A3A3]">
            <Icon
              icon="lets-icons:dimond-alt-light"
              color="#a3a3a3"
              width="23"
              height="23"
            />
            <p>Grade</p>
          </div>
          <span className="font-VarelaRegular">Grade {user?.grade}</span>
        </div>
      </div>
      <div className="font-VarelaRegular flex flex-wrap gap-y-8 custom-497:flex-row  gap-x-12">
        <div className="custom-497:border-r-2 custom-497:pr-12">
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <IoMdCall />
            <p>Contact</p>
          </div>
          <span className="font-VarelaRegular">{user?.contact}</span>
        </div>
        <div>
          <div className="flex gap-2 items-center text-[#A3A3A3]">
            <FaRegCalendar />
            <p>Date joined</p>
          </div>
          <span className="font-VarelaRegular break-words">
            {formatDatePretty(user?.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyProfileCardInfo;
