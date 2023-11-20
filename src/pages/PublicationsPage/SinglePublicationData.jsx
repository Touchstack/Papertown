import PublicationsRowData from "../../Component/PublicationsRowData/PublicationsRowData";
import GeneralNav from "../../Navbar/GeneralNav"
import Footer from '../FooterPage/Footer';
import { useLocation } from 'react-router-dom';
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import TalkToUs from "../../Component/PublicationsRowData/TalkToUs";

const SinglePublicationData = () => {
    const { state } = useLocation();
    //console.log(state);
  return (
    <div className="">
       
         <div className="pt-10">
            <GeneralNav bgShadow="shadow" btnColor="black" bgColor="transparent" color="black" />
         </div>

         <div className="flex flex-col md:flex-row py-40 px-40 gap-[100px]">

            {/*Card*/}
            <div className='max-w-sm rounded-[15px] border px-[20px] pt-[25px] bg-[#F5F5F5]'>
            <div className='max-w-sm rounded-[15px_15px_0px_0px] border '>
                <img src={state.item.image} alt='' />
            </div>
            </div>
             
             {/*Writing*/}
            <div className="flex flex-col">
               <h1 
                style={{ lineHeight: '100%', letterSpacing: '2.16px' }}
               className="text-[72px] font-bold w-[611px]">{state.item.topic}
               </h1>

               <div className="mt-5">
                 <p>by <span className="font-bold ml-2">{state.item.author}</span></p>
               </div>

               <div className="mt-5">
                <p className="w-[530px] font-Bold">
                {state.item.content}
                </p>

                <p className="w-[530px]">
                {state.item.content}
                </p>
               </div>

               {/* Description section */}
                <div className="flex flex-col mt-7 gap-2">
                    <div className="flex flex-row gap-10 text-[#667085]">
                        <p>Pages</p>
                        <p>Date of publication</p>
                        <p>Languauge</p>
                        <p>ISBN</p>
                    </div>

                    <div className="flex flex-row gap-[3.8rem] font-bold">
                        <p>{state.item.pages}</p>
                        <p>{state.item.dop}</p>
                        <p>{state.item.language}</p>
                        <p>{state.item.isbn}</p>
                    </div>
                </div>
            </div>
         </div>

          <div className="px-40 pb-20">
             <div className="flex flex-row items-center justify-between">
               <h1 className="text-[42px] font-Bold hidden md:flex mr-[10rem]">Other related stories</h1>
               <h1 className="text-[42px] font-Bold md:hidden">Other Publication</h1>

               <div className="md:flex flex-row text-[#52B4AE] hidden items-center gap-2">
                
                <p>View all</p>
                
                <div className="rounded-full border border-[#52B4AE] h-[30px] w-[30px] flex items-center justify-center">
                    <HiMiniChevronLeft className="text-[50px]"/>
                </div>
                
                <div className="rounded-full border border-[#52B4AE] bg-[#EEF7F7] h-[30px] w-[30px] flex items-center justify-center">
                    <HiMiniChevronRight className="text-[50px]"/>
                </div>

               </div>

             </div>

             <PublicationsRowData />
          </div>
         
           <TalkToUs />
         {/*Footer Section*/}
         <div className="bg-custom-prm">
           <Footer />
         </div>
    </div>
  )
}

export default SinglePublicationData
