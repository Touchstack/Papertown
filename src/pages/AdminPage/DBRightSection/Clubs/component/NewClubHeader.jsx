import Bell from "../../../../../assets/Images/NotificationBell.svg";
import AmakaImg from "../../../../../assets/Images/Amaka.svg";
import Arrow from "../../../../../assets/Images/ArrowUp.svg";
import ArrowIcon from "../../../../../assets/Images/ArrowLeft.svg";

const NewClubHeader = () => {
  return (
    <div className="m-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-row">
          <img src={ArrowIcon} alt="ArrowLeft.svg" />
          <h1 className="font-Bold text-[16px] sm:text-2xl md:text-3xl lg:text-4xl">
            New Club Profile
          </h1>
        </div>

        <div className="flex gap-4 items-center">
          <img src={Bell} alt="NotificationBell.svg" />
          <img src={AmakaImg} alt="Amaka.svg" />
          <p className="md:text-[15px]">Amaka Ndubisi </p>
          <img src={Arrow} alt="ArrowUp.svg" className="mt-2 sm:w-[15px] md:w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default NewClubHeader;
