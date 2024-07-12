import GeneralNav from "@/Navbar/GeneralNav";
import Footer from "@/pages/FooterPage/Footer";
import { ArticlesList } from "@/Component/RowData/ReadRowData";
import { articles } from "./../../../ConstantData";
import Line from "@/assets/Images/line.png";
import target from "@/assets/Images/mingcute.png";
import LocationIcon from "@/assets/Images/LocationIcon.svg"

const ReadpageDetails = () => {
  return (
    <div>
    <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />

    <div className="flex flex-col md:ml-40 items-center p-10 justify-center">
      <div className={"flex flex-col md:flex-row"}>
        <div className={"md:w-10/12"}>
         <div className="flex flex-col space-x-3">
            <div  className="flex items-center hover:cursor-pointer">
                <h1 className="md:text-[72px] text-[28px] mb-8 font-Bold">
                    Repetitive sounds of the echo
                </h1>
            </div>

            <div className="flex space-x-3">
                <img src={target} alt="" />
                <p>23rd January, 2023</p>
            </div>
         </div>

           
            {/* Use a react-PDF to render this */}
            <div className="space-y-5 p-4">
                <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>
                <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software. 
                </p>
                <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>
                <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>
            </div>

        <div className="p-4">
            <h1 className="font-Bold">Writing Category</h1>

            <div className="flex gap-2 mt-3 mb-3">
                <div className="border-[1px] border-[#B8B8B8] bg-[#EDEDED] p-2 rounded-full">
                <p className="text-[#5A5A5A]">Essay</p>
                </div>
            </div>
        </div>


        </div>

        <div className="p-6">
         <h1 className="font-Bold text-[26px] mb-6">Writer Profile</h1>
         <div className="lg:h-[200px]  md:h-[170px]  sm:h-[130px] mb-10 flex-col justify-start items-start gap-2.5 inline-flex">
           <div className=" h-[310px] md:w-6/12 w-12/12 rounded-[10px] border border-neutral-200 p-5 mb-30">
             <div className="flex-col justify-start items-start gap-3 flex">
              <p className="font-Bold">Marley Sinclear</p>
               <div className="justify-start items-center gap-3 inline-flex">
                 <div className="text-[#838383] text-[14px] font-VarelaRegular">
                   <img src={LocationIcon} alt="LocationIcon" className="inline-block"/> Accra, Ghana
                 </div>
               </div>
               <div className="text-neutral-700 text-base font-Regular leading-relaxed">
                I am an avid reader with the Ghana Library Association. I love digging into people's lives and experiences, uncovering their problems and finding solutions for them.
               </div>
              </div>
            </div>
          </div>
        </div>
     </div> 
        <div className="my-20">
          <img src={Line} alt="" />
        </div>
        
        <div className="">
            <h1 className="font-Bold text-[42px] mb-6">Other Writings</h1>
            <ArticlesList articles={articles} />  
        </div>
    </div>

    <div className="bg-[#B44DB8]">
        <Footer />
    </div>
</div>
  )
}

export default ReadpageDetails