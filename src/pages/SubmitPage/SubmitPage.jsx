import React from 'react';
import GeneralNav from '../../Navbar/GeneralNav';
import SubmitBg from '../../Component/SubmitPage/SubmitBg';
import SubmitComponent from '../../Component/SubmitPage/SubmitComponent';
import Footer from '../FooterPage/Footer';
import YellowBulbs from '../../assets/Images/bulb.png';

const SubmitPage = () => {
  return (
    <div className="">
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      <SubmitBg />

      <div className="text-black text-center mt-40">
        <h1 className="font-Bold text-3xl md:text-4xl lg:text-5xl mt-10">
          Submit your personal <p>write-ups for review</p>
        </h1>

        <div className="font-Light text-sm px-3 mt-5 mb-10">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining
          <p>essentially unchanged. It was popularies in the 1960s with the release of Letraset sheets.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 lg:px-24 mb-10 mt-20">
        <div className="">
          <h2 className="text-black text-[42px] py-5 font-Bold text-center">Guidelines for submission</h2>
          <p className="font-Medium">Guide 1</p>
          <p className="font-Regular">
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
          <p className="font-Medium">Guide 2</p>
          <p className="font-Regular">
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
          <p className="font-Medium">Guide 3</p>
          <p className="font-Regular">
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
          <img
            className="bg-gradient-to-b from-yellow-500 to-white rounded-3xl lg:h-full md:h-[400px] sm:h-[250px] md:mb-4 sm:mb-12"
            src={YellowBulbs}
            alt="bulb.png"
          />
        </div>
      </div>  
      <div className="bg-[#B44DB8]">
         <Footer />  
      </div>
        
    </div>
  );
};

export default SubmitPage;
