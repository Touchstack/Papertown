import sponsor from "../../assets/Images/change.svg";
import sponsor2 from "../../assets/Images/ges.svg";
import sponsor3 from "../../assets/Images/unicef.svg";
import british from "../../assets/Images/britishcouncil.svg";

const Sponsor = () => {
  return (
    <div className="bg-[#FFF] text-center py-11 md:px-4">
      <div className="py-2">
        <div className="my-3 container mx-auto text-dark">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:mt-5 md:mt-4 sm:mt-1 mt-1 px-24 gap-y-12">
            <div className="flex">
              <img src={sponsor} alt="change.svg" />
            </div>
            <div className="">
              <img src={sponsor3} alt="unicef.svg" />
            </div>
            <div className="flex">
              <img src={sponsor2} alt="ges.svg" />
            </div>
            <div className="flex">
              <img src={british} alt="britishcounsil.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
