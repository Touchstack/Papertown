import GeneralNav from '../../Navbar/GeneralNav';
import SubmitBg from '../../Component/SubmitPage/SubmitBg';
import SubmitComponent from '../../Component/SubmitPage/SubmitComponent';
import Footer from '../FooterPage/Footer';
import ProfilePicture from "../../assets/Images/unsplash_4LunKr1gTd8.png";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Guides } from '../../../ConstantData';

const SubmitPage = () => {


  return (
    <div>
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      <SubmitBg />

      <div className="flex flex-col  my-10 items-center justify-center">
        <h1 className="text-[#000000] font-Bold text-[26px] sm:text-[36px] md:text-4xl lg:text-6xl leading-100 tracking-widest p-5 mt-10">
          Submit your personal <br /> write-ups for review
        </h1>

        <div className="font-[Varela-Regular] mt-5 md:px-20 px-10">
          <p>
            Hello Writers, <br />
            Welcome to our Submission page. This is where you get to share your writing with us (the Papertown Imaginarium team), so that we can help you improve on your craft. Whether it’s a story, poem, or essay, we would love to take a look and give you feedback on your writing. Our feedback could be a note, giving you detailed directions, points, and advice on how to make your writing and narrative better. It could also just be a fan message telling you how
            much we enjoyed the narrative and how great the writing itself is! Whatever the case, we’re here because we believe in your interest in writing, and we want to help
            you do more of it and do it very well. Before you jump in and start sending us materials, please take a moment to read and understand our Submission Guidelines, so that you understand exactly how it works. Thank You! We look forward to receiving your submissions!
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center bg-[#FFD8FF] py-10 md:px-10 px-8">
        <h1 className="font-Bold md:text-[42px] text-[32px]">Guidelines for submission</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full mt-6">
          {Guides.map((data, index) => (
            <div key={index} className="p-4 md:p-8 space-y-1">
              <h2 className="text-lg font-bold">{data?.title}</h2>
              <p className="text-sm">{data?.msg}</p>
            </div>
          ))}
        </div>
      </div>


        <SubmitComponent />
 

      <div className="flex md:flex-row flex-col items-center justify-center  px-[2rem] py-[3rem] gap-[5rem]">
        <div>
          <p className="text-[32px] w-full lg:max-w-[400px] font-Bold p-5">
            Thinking of submitting your writing to us or joining Papertown Imaginarium? Here are some of the young writers we have worked with.
          </p>

          <div className="flex items-center gap-3 pt-5 px-5">
            <div className="w-[34.5px] flex items-center justify-center h-[34.5px] border-[1px] rounded-full border-[#52B4AE]">
              <HiChevronLeft color="#52B4AE" width={70} />
            </div>
            <div className="w-[15px] h-[3px] bg-[#52B4AE]" />
            <div className="w-[15px] h-[3px] bg-[#6caaa6]" />
            <div className="w-[15px] h-[3px] bg-[#52B4AE]" />
            <div className="w-[34.5px] flex items-center justify-center h-[34.5px] border-[2px] rounded-full border-[#52B4AE]">
              <HiChevronRight color="#52B4AE" width={70} />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="lg:max-w-[400px] text-[16px] p-5">
            Through Papertown Imaginarium I got to publish my first book. I have always loved writing and I am happy that I was able to write when I was at Papertown. I am very proud to have written a story that was published. 
          </p>

          <div className="flex items-center gap-5 pt-5 px-5">
            <p>Yojosam Inah</p>
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
