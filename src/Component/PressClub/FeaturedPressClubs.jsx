import ChildrenPic from "../../assets/Images/Children.png";
import Child1 from "../../assets/Images/child1.png";
import Child2 from "../../assets/Images/child2.png";
import Child3 from "../../assets/Images/child3.png";
import Child4 from "../../assets/Images/child4.png";
import Child5 from "../../assets/Images/child5.png";

const FeaturedPressClubs = () => {
  return (
    <div className="px-16 pb-24 bg-[#FFF]">
      <div className="flex justify-between items-center">
        <h2 className="font-Bold text-4xl md:text-5xl lg:text-5xl pb-10 text-[#000] pt-20">
          Featured press clubs
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 font-Bold">
        <div>
          <img src={ChildrenPic} />
          <p className="text-[#000] lg:text-xl text-lg my-4">
            Mary Mother of Good Counsel
          </p>
          <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img style={{ height: "auto" }} src={Child1} alt="" />
              <img style={{ height: "auto" }} src={Child2} alt="" />
              <img style={{ height: "auto" }} src={Child3} alt="" />
              <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                + 12 members
              </span>
            </div>
          </div>
        </div>

        <div>
          <img src={ChildrenPic} />
          <p className="text-[#000] lg:text-xl text-lg my-4">
            North Ridge Lyceum
          </p>
          <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img style={{ height: "auto" }} src={Child1} alt="" />
              <img style={{ height: "auto" }} src={Child4} alt="" />
              <img style={{ height: "auto" }} src={Child5} alt="" />{" "}
              <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                + 19 members
              </span>
            </div>
          </div>
        </div>

        <div>
          <img src={ChildrenPic} />
          <p className="text-[#000] lg:text-xl text-lg my-4">
            University Primary School, Legon
          </p>
          <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img style={{ height: "auto" }} src={Child1} alt="" />
              <img style={{ height: "auto" }} src={Child2} alt="" />
              <img src={Child3} alt="" style={{ height: "auto" }} />
              <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                + 35 members
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPressClubs;
