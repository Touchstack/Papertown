import Child1 from "../../assets/Images/child1.png";
import Child2 from "../../assets/Images/child2.png";
import Child3 from "../../assets/Images/child3.png";
import Child4 from "../../assets/Images/Ellipse22.svg";
import Child5 from "../../assets/Images/child5.png";



const TalkToUs = () => {
  return (
  <div className="flex justify-center px-3">
      <div className="flex flex-col gap-[20px] mb-20 bg-[#EEF7F7] justify-center items-center p-[28px] md:w-[1241px] rounded-[30px]">
         <div className="flex -space-x-4">
              <img style={{ height: "auto" }} src={Child1} alt="" />
              <img style={{ height: "auto" }} src={Child2} alt="" />
              <img style={{ height: "auto" }} src={Child3} alt=""  />
              <img style={{ height: "auto" }} src={Child4} alt=""  />
              <img style={{ height: "auto" }} src={Child5} alt=""  />   
         </div>
         

        <p className="md:text-[32px] text-[22px] font-bold">Want to get your work published?</p>

         <button className="w-[151px] font-bold h-[55px] px-[30px] py-[8px] bg-[#52B4AE] rounded-[30px] text-white">
            Talk to us
        </button>
    </div>
  </div>
  )
}

export default TalkToUs
