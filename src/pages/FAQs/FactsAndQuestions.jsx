import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../../pages/FooterPage/Footer";
import BgImage from "../../assets/Images/detaImage.png"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion.jsx";

import { accordianData } from "../../../ConstantData";

const FactsAndQuestions = () => {
  return (
    <div>
      <GeneralNav color="black" btnColor="black" bgShadow="shadow" />
      <div className="bg-[#FFF] flex flex-col mx-auto p-4 md:p-16 lg:text-xl md:text-xl sm:text-lg mt-12">
         <h1 className="text-6xl font-Bold mb-6">FAQs</h1> 
         <img src={BgImage} alt="" />
      </div>
 
       <div className="md:p-20 p-10 space-y-6">
         {accordianData.map((data, index) => (
          <Accordion key={index} type="single" collapsible className={"flex h- flex-col gap-8"}>
           <AccordionItem
             value="item-1"
             className={"rounded-[20px] border-[2px] py-6 px-4"}
           >
             <AccordionTrigger className={"hover:no-underline py-4"}>
              <div className="flex flex-col items-start">
                 <h1 className="text-[20px] font-Bold">{data?.title}</h1>
              </div>
             </AccordionTrigger>
             <AccordionContent>
               <div>
                 <p className="text-[16px] text-[#808080]">{data?.msg}</p>
               </div>
             </AccordionContent>
             </AccordionItem>
          </Accordion>
         ))}
       </div>

      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  )
}

export default FactsAndQuestions