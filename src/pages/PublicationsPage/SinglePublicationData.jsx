import PublicationsRowData from "../../Component/PublicationsRowData/PublicationsRowData";
import GeneralNav from "../../Navbar/GeneralNav"
import Footer from '../FooterPage/Footer';
import { useLocation, } from 'react-router-dom';
import TalkToUs from "../../Component/PublicationsRowData/TalkToUs";
import Barcode from "@/assets/Images/barcode.png"

const SinglePublicationData = () => {
    const { state } = useLocation();
    //console.log(state);
  return (
    <div className="">
         <GeneralNav bgShadow="shadow" btnColor="black" bgColor="transparent" color="black" />

         <div className="flex flex-col md:flex-row md:py-40 py-20 lg:px-40 px-5 gap-[100px]">

            {/*Card*/}
            <div className='max-w-md rounded-[15px] h-[383px] border px-[20px] pt-[25px] bg-[#F5F5F5]'>
            <div className='max-w-md rounded-[15px_15px_0px_0px] border '>
                <img src={state.item.image} alt='' />
            </div>
            </div>
             
             {/*Writing*/}
            <div className="flex flex-col">
               <h1 
                style={{ lineHeight: '100%', letterSpacing: '2.16px' }}
               className="md:text-[72px] text-[24px] font-[900] md:w-[611px]">{state.item.topic}
               </h1>

               <div className="mt-5">
                 <p>by <span className="font-bold ml-2">{state.item.author}</span></p>
               </div>

               <div className="mt-5">
                <p className="md:w-[530px] font-Bold">
                {state.item.content}
                </p>

                <p className="md:w-[530px] mt-2">
                {state.item.content}
                </p>
               </div>

               {/* Description section */}
                <div className="flex flex-col mt-7 gap-2 flex-wrap">
                    <div className="flex flex-row md:gap-10 gap-5 text-[#667085]">
                        <p>Pages</p>
                        <p>Date of publication</p>
                        <p>Languauge</p>
                        <p>ISBN</p>
                    </div>

                    <div className="flex flex-row md:gap-[3.8rem] gap-10 font-bold">
                        <p>{state.item.pages}</p>
                        <p>{state.item.dop}</p>
                        <p>{state.item.language}</p>
                        <div>
                        <img src={Barcode} alt="" />
                        <p>
                          {state.item.isbn}
                        </p>
                        </div>
                    </div>

                  <button className="w-6/12 font-bold h-[55px] px-[30px] py-[8px] bg-[#52B4AE] rounded-[30px] text-white">
                     View
                  </button>
                </div>
            </div>
         </div>

          <div className="md:px-40 px-5 pb-20">
            
             <div className="flex flex-row items-center justify-between">
               <h1 className="text-[42px] font-Bold hidden md:flex mr-[10rem]">Other related stories</h1>
               <h1 className="text-[42px] font-Bold md:hidden">Other Publication</h1>

               <div className="md:flex flex-row text-[#52B4AE] hidden items-center gap-2">
                
                <p>View all</p>
              
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
