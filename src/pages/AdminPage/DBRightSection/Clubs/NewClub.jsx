import NewClubHeader from "./component/NewClubHeader";
import NewClubDetails from "./component/NewClubDetails";
import NewClubSchedule from "./component/NewClubSchedule";

const NewClub = () => {
  return (
    <div className="mt-2 bg-[#FFFFFF] h-[2000px] rounded-[25px]">
      <NewClubHeader />
      <NewClubDetails />
      <NewClubSchedule />
    </div>
  );
};
export default NewClub;
