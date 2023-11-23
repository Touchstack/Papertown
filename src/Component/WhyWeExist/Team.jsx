import Team1 from "../../assets/Images/team1.svg";
import Teampic from "../../assets/Images/team2.svg";
import Teamimg from "../../assets/Images/team3.svg";
import briefcase from "../../assets/Images/lucide.svg";

const Team = () => {
  return (
    <div className="mx-auto bg-[#FFF] py-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="px-8 lg:ml-14">
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
            Meet the team behind Papertown Imaginarium
          </h3>
          <div className="py-6">
            <p className="font-Medium max-w-[470px] lg:text-lg md:text-sm sm:text-sm text-sm lg:text-left md:text-left text-[#393939] leading-7 tracking-wider text-13 leading-26 text-start">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software.
            </p>
          </div>
        </div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 justify-center items-center img-fluid mx-8">
            <a href="./teamdetails">
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <img src={Team1} alt="" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "#fff",
                    padding: "10px 18px",
                  }}
                >
                  <p className="font-Bold text-[#FFF] text-sm">Ruth Dumany</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={briefcase}
                      style={{
                        height: "11px",
                        marginRight: "5px",
                      }}
                    />
                    <span className="font-Regular text-xs leading-4 text-[#C0C0C0]">
                      Quality Assurance
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="./teamdetails">
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <img src={Teampic} alt="" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "#fff",
                    padding: "10px 18px",
                  }}
                >
                  <p className="font-Bold text-[#FFF] text-sm">
                    Bassey Effiong
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={briefcase}
                      style={{
                        height: "11px",
                        marginRight: "5px",
                      }}
                    />
                    <span className="font-Regular text-xs leading-4 text-[#C0C0C0]">
                      Quality Assurance
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="./teamdetails">
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <img src={Teamimg} alt="" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "#fff",
                    padding: "10px 18px",
                  }}
                >
                  <p className="font-Bold text-[#FFF] text-sm">
                    Edwards Effiong
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={briefcase}
                      style={{
                        height: "11px",
                        marginRight: "5px",
                      }}
                    />
                    <span className="font-Regular text-xs leading-4 text-[#C0C0C0]">
                      Quality Assurance
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="./teamdetails">
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <img src={Team1} alt="" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "#fff",
                    padding: "10px 18px",
                  }}
                >
                  <p className="font-Bold text-[#FFF] text-sm">
                    Mamadu Philipe
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={briefcase}
                      style={{
                        height: "11px",
                        marginRight: "5px",
                      }}
                    />
                    <span className="font-Regular text-xs leading-4 text-[#C0C0C0]">
                      chief Writer
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a href="./teamdetails">
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <img src={Teampic} alt="" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    color: "#fff",
                    padding: "10px 18px",
                  }}
                >
                  <p className="font-Bold text-[#FFF] text-sm">
                    Abigail Adonami
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={briefcase}
                      style={{
                        height: "11px",
                        marginRight: "5px",
                      }}
                    />
                    <span className="font-Regular text-xs leading-4 text-[#C0C0C0]">
                      Quality Assurance
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
