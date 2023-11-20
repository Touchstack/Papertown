import PublicationsRowData from "../../Component/PublicationsRowData/PublicationsRowData";
import GeneralNav from "../../Navbar/GeneralNav"
import Footer from '../FooterPage/Footer';
import TalkToUs from "../../Component/PublicationsRowData/TalkToUs";

const PublicationsPage = () => {
  return (
    <div className="bg-[#fff]">
         <div className="pt-10">
            <GeneralNav bgShadow="shadow" btnColor="black" bgColor="transparent" />
         </div>

         <div className='flex flex-col mt-[70px] md:ml-[50px] ml-[10px] md:p-20 px-2'>
             <h2 className='text-[#000] md:text-[72px]  text-[40px] font-[900]'>Publications</h2>
    
              <div className='md:w-[520px] mt-10'>
                  <p className='text-[16px] font-[400]'> It has survived not only five centuries,
                    but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing. 
                  </p>
              </div>

              <h2 className='text-[#000] md:text-[72px]  text-[24px] font-[900] mt-10 md:hidden'>Published magazines</h2>
          </div>
    
           <div className="md:px-20">
             <PublicationsRowData />
           </div>


           <div className='flex justify-center items-center m-[50px]'>
            <button
                type="button"
                className="inline-flex items-center justify-center py-[10px] px-[10px] rounded-[30px] border border-solid  border-[#52B4AE]  w-[100px] h-[50px] bg-white text-[#52B4AE]"
                >
                Load more
            </button>
        </div>

         <TalkToUs />

         {/*Footer Section*/}
         <div className="bg-custom-prm">
           <Footer />
         </div>
    </div>
  )
}

export default PublicationsPage
