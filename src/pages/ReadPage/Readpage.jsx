import Readbg from "../../assets/Images/Readbg.png";
import readSplash from "../../assets/Images/readSplash.png"
import Footer from '../FooterPage/Footer';
import ReadRowData from '../../Component/RowData/ReadRowData';
import GeneralNav from '../../Navbar/GeneralNav';

const Readpage = () => {
  return (
    <div className="bg-custom-gradient bg-no-repeat lg:bg-cover md:h-[722px] h-[500px]" style={{ backgroundImage: `url(${Readbg})`}}>
      <div className='pt-10'>
        <GeneralNav btnColor="black"/>
     </div>

      {/*Hero Text*/}
       <div className='flex flex-row justify-center mt-[7%] items-center'>

        {/*Left*/}
          <div className='md:w-[611px] w-[411px] flex flex-col'>
             <h1 className='font-Doris px-5 text-[#000] text-[36px] lg:text-[72px] font-Bold lg:leading-[72px] '>
               A library of stories and content by young writers
              </h1>

              <p className='lg:w-[396px] md:px-5 px-3 mt-[30px] font-Varela md:text-[16px] font-normal leading-[26px]'>
                It has survived not only five centuries, 
                but also the leap into electronic typesetting, 
                remaining essentially unchanged
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