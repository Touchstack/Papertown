import Readbg from "../../assets/Images/Readbg.png";
import readSplash from "../../assets/Images/readSplash.png"
import Footer from '../FooterPage/Footer';
import ReadRowData from '../../Component/RowData/ReadRowData';
import GeneralNav from '../../Navbar/GeneralNav';
 
const Readpage = () => {
  return (
    <div className="bg-custom-gradient bg-no-repeat lg:bg-cover md:h-[722px] xl:h-[922px] h-[50%]" style={{ backgroundImage: `url(${Readbg})`}}>
        <GeneralNav btnColor="black" bgShadow="shadow"/>
      {/*Hero Text*/}
      <div className='flex flex-row justify-center items-center pt-8 md:p-20'>
 
        {/*Left*/}
          <div className='md:w-[611px] w-[411px] pb-4 flex flex-col'>
             <h1 className='font-Doris px-5 text-[#000] text-[36px] lg:text-[52px] font-Bold '>
                A library of stories and content by young writers
              </h1>

              <p className='md:px-5 px-3 mt-[30px] font-Varela md:text-[19px] font-normal'>
                Welcome, <br />
                You have arrived at a place filled with magic and wonder!<br />
                This is our Read page……here, you get to read stories, poems, and essays written by writers aged 10-19.
                We invite you to experience the world through the minds of our writers. Meet characters, enjoy narratives, and delve into worlds crafted by young, uninhibited dreamers.<br />
                Happy Reading!
              </p>
          </div>
           {/*Left*/}
 
          {/*Righ*/}
          <div className='w-[569.61px] h-[235.611px] justify-center rotate-[10deg] bg-custom-prm rounded-[90.62px] overflow-hidden hidden md:block relative'>
             <p className='text-[#e0b9e2] absolute z-10 left-[105px] lg:top-[-5px] md:text-[50px] lg:text-[72px] font-Bold'>my writing</p>
            <img src={readSplash} alt="" className='absolute z-20 left-10 w-[450px] bottom-[-4rem]' />
          </div>
         {/*Righ*/}
       </div>
          
        <ReadRowData />  
      
       {/*Footer*/}
       <div className='bg-custom-prm'>
         <Footer />
       </div>
  </div>
  )
}
 
export default Readpage