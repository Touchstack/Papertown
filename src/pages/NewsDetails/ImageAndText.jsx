import { MdDateRange } from "react-icons/md";
import DetaImage from "../../assets/Images/detaImage.png";
import Line from "../../assets/Images/line.png";
import OtherRelated from "./OtherRelated";
function ImageAndText() {
  return (
    <div>
      {/* text and date section start */}
      <div className="lg:ml-[10%] lg:mt-20 mt-10">
        <div className="lg:ml-5 md:ml-20 ml-5">
          <h5 className="lg:w-[800px] md:w-[500px] lg:text-[72px] font-Bold md:text-5xl text-5xl mb-5">
            UNICEF to initiate Grade 7 spelling Bee
          </h5>
          <span className="flex items-center ">
            <MdDateRange className="text-[#A3A3A3]" />
            <p className="font-Bold">
              <span className="mr-1 text-[#A3A3A3]">Date</span> 1st Nov,2023
            </p>
          </span>
        </div>

        {/* image section start  */}
        <div className="mt-10  text-center">
          <img
            src={DetaImage}
            alt=""
            className="lg:w-[989px] lg:h-[330px] md:w-[685px] md:h-[230px] w-[360px] lg:mx-0 md:mx-auto mx-auto block"
          />
        </div>

        {/* image section end  */}
        {/* Text section start  */}
        <div className="lg:w-[990px] md:w-[700px] md:ml-20 ml-10 lg:ml-0 w-[320px]">
          <p className="mb-5 mt-10">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software.
          </p>
          <p className="mb-5">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software.
          </p>
          <p className="mb-5">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software.
          </p>
        </div>
        <div className="mt-20 mb-20">
          <img src={Line} alt="" />
        </div>
        {/* Text section end  */}
      </div>
      {/* text and date section end */}
      {/* Other related stories section start  */}
      <div className="lg:ml-20  mb-20">
        <OtherRelated />
      </div>
      {/* Other related stories section end  */}
    </div>
  );
}

export default ImageAndText;
