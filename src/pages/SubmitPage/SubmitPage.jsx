import SubmitComponent from "../../Component/SubmitPage/SubmitComponent";
import YellowBulbs from "../../assets/Images/bulb.png";
import SubmitBg from "../../Component/SubmitPage/SubmitBg";
import Footer from "../FooterPage/Footer";
import SubmitGeneralNav from "../../Component/SubmitPage/SubmitGeneralNav";

const SubmitPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="pt-10">
        <br />
        <SubmitGeneralNav />
      </div>
      <SubmitBg />
      <div className="flex-col text-black mt-40 text-center items-center h-144px w-734px">
        <h1 className="flex-col font-Bold lg:text-5xl md:text-4xl text-3xl justify-center mt-10">
          Submit your personal <p>write-ups for review</p>
        </h1>

        <div className="font-Light lg:text-sm text-sm lg:px-0 md:px-2 px-3 mt-5 mb-10">
          It has survived not only five centuries, but also the leap into
          electronic typsetting, remaining
          <p>
            essentially unchanged. It was popularies in the 1960s with the
            release of Letraset sheets.
          </p>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 lg:px-24 mb-10 mt-20">
          <div className="">
            <h2 className="text-black text-[42px] py-5 w-[437px] font-Bold text-center ">
              Guidelines for submission
            </h2>
            <br />
            <p className="font-Medium">Guide 1</p>
            <br />
            <p className="font-Regular ">
              {" "}
              Writers will identify their favorite sensory memories and transfer
              them to a visual heart map.
            </p>
            <br />
            <p className="font-Medium">Guide 2</p>
            <br />
            <p className="font-Regular ">
              {" "}
              Writers will identify their favorite sensory memories and transfer
              them to a visual heart map.
            </p>
            <br />
            <p className="font-Medium">Guide 3</p>
            <br />
            <p className="font-Regular ">
              Writers will identify their favorite sensory memories and transfer
              them to a visual heart map.
            </p>
            <br />
          </div>
          <div className="flex justify-center items-center mt-10">
            <img
              className="bg-gradient-to-b from-yellow-500 to-white rounded-10xl lg:h-full md:h-[400px] sm:h-[250px] md:mb-4 sm:mb-12"
              src={YellowBulbs}
              alt="bulb.png"
            />
          </div>
          <br />
          <br />
        </div>
      </div>
      <div>
        <SubmitComponent />
      </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
};

export default SubmitPage;
