import Child1 from "../../../../../assets/Images/child1.png";
import Child2 from "../../../../../assets/Images/child2.png";
import Child3 from "../../../../../assets/Images/child3.png";
import Child4 from "../../../../../assets/Images/child4.png";
import Child5 from "../../../../../assets/Images/child5.png";

import { HiChevronRight } from "react-icons/hi2";

const RightSection = () => {
  const data = [
    {
      img: Child1,
      name:"Fifi Brown"
    },
    {
      img: Child2,
      name:"Fifi Brown"
    },
    {
      img: Child3,
      name:"Fifi Brown"
    },
    {
      img: Child4,
      name:"Fifi Brown"
    },
    {
      img: Child5,
      name:"Fifi Brown"
    },
  ]
  return (
    <div className="w-[410px] bg-[#FFFFFF] h-[203px] rounded-[10px] mr-6">
        <div className="flex flex-row justify-between p-5">
            <p>Top Writers</p>
            
            <div className="flex flex-row items-center text-[#BCBCBC] cursor-pointer">
              <p>View all</p>
              <HiChevronRight />
            </div>
        </div>
        
        <hr className="mx-5"/>

        <div className="flex flex-row mt-3 gap-3 pl-5">
          {data.map((data) => (
            <div key={data.name} className="flex flex-col">
              <img src={data.img} alt="" className="rounded-full w-full h-full" />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RightSection
