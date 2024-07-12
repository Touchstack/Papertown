import PublicationsRowData from "../../Component/PublicationsRowData/PublicationsRowData";
import GeneralNav from "../../Navbar/GeneralNav"
import Footer from '../FooterPage/Footer';
import TalkToUs from "../../Component/PublicationsRowData/TalkToUs";

const PublicationsPage = () => {
  return (
    <div className="bg-[#fff]">
          <GeneralNav bgShadow="shadow" btnColor="black" bgColor="transparent" />

         <div className='flex flex-col mt-[70px] md:ml-[50px] ml-[10px] md:p-20 px-2'>
             <h2 className='text-[#000] md:text-[72px]  text-[40px] font-[900]'>Publications</h2>
    
              <div className='mt-5'>
                  <p className='text-[16px] font-[400]'>
                   Since being established in 2017, we have published 15 books written by writers between 8 and 14 years.  We have worked with young writers to come up with original story ideas, create story outlines and manuscripts, and write, review and edit drafts, leading to the publication of four
                   stories, one collection of poems, and ten anthologies.
                  </p>
                  <p className="mt-6">
                   Please note that commercial publication is done through our publishing business, Papertown Press, and is not part of the free services offered by Papertown   Imaginarium.
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
