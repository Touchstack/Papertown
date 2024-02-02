import ManageBody from "./ManageBody";
import ManageHeader from "./ManageHeader";

function Manage() {
  return (
    <div className="mt-2 bg-[#FFFFFF] h-[1210px] rounded-[25px]">
      <ManageHeader />

      <div>
        <ManageBody />
      </div>
    </div>
  );
}

export default Manage;
