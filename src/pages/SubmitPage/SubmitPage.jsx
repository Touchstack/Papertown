import React from 'react';
import GeneralNav from '../../Navbar/GeneralNav';
import SubmitBg from '../../Component/SubmitPage/SubmitBg';
import SubmitComponent from '../../Component/SubmitPage/SubmitComponent';
import Footer from '../FooterPage/Footer';
import YellowBulbs from '../../assets/Images/submitIdea.png';
import UIfix from "../../Component/SubmitPage/UIfix";
import ProfilePicture from "../../assets/Images/unsplash_4LunKr1gTd8.png";
import { HiChevronLeft, HiChevronRight} from 'react-icons/hi2';

const SubmitPage = () => {
  return (
    <div className="">
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      <SubmitBg />
          
    <div className="flex flex-col  mt-40">
      <h1 className="text-[#000000] text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-100 tracking-widest mt-10">
        Submit your personal <br /> write-ups for review
      </h1>

      <div className="font-Varela-Regular text-center text-[10px] sm:text-sm md:text-base lg:text-base px-3 mt-5 mb-10">
        It has survived not only five centuries, but also the leap into electronic typesetting,
         ,remaining
         <br />
        essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets.
      </div>
    </div>


    <div className="flex flex-col md:flex-row items-center justify-between px-10 lg:px-[7rem] mb-10 mt-[4rem]">
      <div className="flex flex-col items-start px-10">
        <h2 className="text-[#000000] text-[20px] sm:text-[22px] md:text-[32px] lg:text-[42px] pb-5 font-bold">Guidelines for submission</h2>

        <div className='w-[300px] sm:w-[300px] md:w-[400px]'>
          <p className="font-bold text-[20px] mb-4">Guide 1</p>
          <p className="font-[Varela-Regular] text-[16px] mb-4">
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
          <p className="font-bold text-[20px] mb-4">Guide 2</p>
          <p className="font-[Varela-Regular] text-[16px] mb-4"> 
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
          <p className="font-bold text-[20px] mb-4">Guide 3</p>
          <p className="font-[Varela-Regular] text-[16px] mb-4">
             Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
        </div>
      </div>

        <div className="flex justify-center items-center mt-10">
          <img
            className="lg:h-[572px] md:h-[400px] sm:h-[250px] md:mb-4 sm:mb-12"
            src={YellowBulbs}
            alt="bulb.png"
          />
        </div>
      </div>

      <SubmitComponent />

      <div className='flex md:flex-row flex-col items-center justify-center px-[10rem] py-[3rem] gap-[5rem]'>
          <div className=''>
             <p className='text-[32px] w-[400px] font-Bold'>
             Don’t take our word for it. Hear what our past and current writers have to say
             </p>

            <div className='flex items-center gap-3 pt-5'>
               <div className='w-[34.5px] flex items-center justify-center h-[34.5px] border-[1px] rounded-full border-[#52B4AE]'>
                  <HiChevronLeft color='#52B4AE'  width={70}/>
               </div>
                <div className='w-[15px] h-[3px] bg-[#52B4AE]'/>
                <div className='w-[15px] h-[3px] bg-[#6caaa6]'/>
                <div className='w-[15px] h-[3px] bg-[#52B4AE]'/>
               <div className='w-[34.5px] flex items-center justify-center h-[34.5px] border-[2px] rounded-full border-[#52B4AE]'>
                  <HiChevronRight color='#52B4AE' width={70}/>
               </div>
            </div>
          </div>

          <div className='flex flex-col'>
              <p className='w-[400px] md:w-[503px] text-[16px]'>
                Writers will identify their favourite sensory memories and transfer them to a visual heart map. Writers will identify their favourite sensory memories and transfer them to a visual heart map. Writers will identify their favourite sensory memories and transfer them to a visual heart map. 
              </p>

              <div className='flex items-center gap-5 pt-5'>
                <img
                  src={ProfilePicture}
                  alt="Profile Picture"
                  className="w-[39px] h-[39px] rounded-full border border-amber-400"
                />
                <p>Enoch Charway</p>
              </div>
          </div>
          
      </div>

      <div className="bg-[#B44DB8] mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default SubmitPage;

