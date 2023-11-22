import Team1 from "../../assets/Images/team1.svg";
import Teampic from "../../assets/Images/team2.svg";
import Teamimg from "../../assets/Images/team3.svg";

const Team = () => {
  return (
    <div className="mx-auto bg-[#FFF] py-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="px-8 lg:ml-14">
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
            Meet the team behind Papertown Imaginarium
          </h3>
          <div className="py-6">
            <p className="font-Medium max-w-[470px] lg:text-lg md:text-sm sm:text-sm text-sm lg:text-left md:text-left text-[#393939] leading-7 tracking-wider text-13 leading-26 text-start mt-2">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software.
            </p>
          </div>
        </div>
        <div className="container mx-auto relative">
          <div className="inline-flex justify-center items-center img-fluid mx-8 gap-2 ">
            <img src={Team1} alt="Benz" style={{ height: "auto" }} />
            <img src={Teampic} alt="Benz" style={{ height: "auto" }} />
            <img src={Teamimg} alt="Benz" style={{ height: "auto" }} />
          </div>
          <div className="inline-flex justify-center items-center img-fluid gap-2">
            <img src={Team1} alt="Benz" style={{ height: "auto" }} />
            <img src={Teampic} alt="Benz" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
