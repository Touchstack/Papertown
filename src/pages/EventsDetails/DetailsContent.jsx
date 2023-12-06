import BgImage from "../../assets/Images/detaImage.png"
import DetailsForm from "./DetailsForm";
import LocationIcon from "../../assets/Images/LocationIcon.svg"
import MapComponent from "./MapComponent";

const DetailsContent = () => {
  return (
    <div className="lg:ml-[10%] lg:mt-20 mt-10">
      <div className="lg:ml-5 md:ml-20 ml-5">
        <h5 className="lg:w-[800px] md:w-[500px] lg:text-[72px] font-Bold md:text-5xl text-5xl mb-5">
        Annual UNICEF spelling Bee 2023
        </h5>
      </div>

      {/* image*/}
      <div className="mt-10 text-center">
        <img
          src={BgImage}
          alt=""
          className="lg:w-[1150px] lg:h-[330px] md:w-[685px] md:h-[230px] w-[360px] lg:mx-0 md:mx-auto mx-auto block"
        />
      </div>

      {/* image end*/}
      {/* Text section start  */}
      <div className="lg:w-[990px] md:w-[700px] md:ml-20 ml-10 lg:ml-0 w-[320px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20">
        <div className="">
            <p className="font-Bold lg:text-3xl mt-10 py-5">Event Info</p>
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
        
        <p className="">
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
        <p className="font-Bold lg:text-3xl mt-10">Date</p>
        <p className="font-Regular mt-5">Saturday, 1st Decmber 2022</p>
        <p className="font-Regular mb-5">12:00 PM GMT</p>
        <div className="lg:w-[530px] lg:h-[200px] md:w-[420px] md:h-[170px] sm:w-[330px] sm:h-[130px] mb-10 flex-col justify-start items-start gap-2.5 inline-flex">
<div className="w-[553px] h-[310px] rounded-[10px] md:w-1/2 border border-neutral-200 px-5 mb-30">
<div className="flex-col justify-start items-start gap-3 flex">
<div className="justify-start items-center gap-3 inline-flex">
<div className="text-black text-xl font-SemiBold">
    <img src={LocationIcon} alt="LocationIcon" className="inline-block"/> Location
</div>
</div>
<div className="w-[510px] text-neutral-700 text-base font-Regular leading-relaxed">JWHM+WJH, First Floor, Blu Business Park, Aklika Junction, Accra</div>
</div>
<div className="overflow-hidden lg:w-[516px] lg:h-[185px] md:w-[400px] md:h-[150px] sm:w-[300px] sm:h-[100px] mb-5">
 <MapComponent/>
 </div>
 
</div>
</div>

        </div>
        <div className="ml-5 gap-5">
        <DetailsForm/>
        </div>
      </div>
      {/* Text section end  */}
    </div>
);

  
}

export default DetailsContent;