import Bell from "../../../../../assets/Images/NotificationBell.svg";
import AmakaImg from "../../../../../assets/Images/Amaka.svg";
import Arrow from "../../../../../assets/Images/ArrowUp.svg";
import ArrowIcon from "../../../../../assets/Images/ArrowLeft.svg";

const ManageClubHeader = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-row items-center justify-between md:p-10 p-6 mt-8 lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center">
        <h1 className="font-Bold text-4xl">
          <span className="inline-flex mr-2">
            {" "}
            <img src={ArrowIcon} alt="ArrowLeft.svg" />
          </span>
          Manage Club Profile
        </h1>
        <div className="flex gap-4">
          <img src={Bell} alt="NotificationBell.svg" />
          <img src={AmakaImg} alt="Amaka.svg" />
          <p className="inline-block">Amaka Ndubisi </p>
          <img src={Arrow} alt="ArrowUp.svg" className="mt-2 w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default ManageClubHeader;
