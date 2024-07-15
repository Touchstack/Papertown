
import GeneralNav from "../../Navbar/GeneralNav"
//import Vector from "../../assets/Images/Vector.png"

const EventsHero = () => {
  return (
          <div>
            <div>
            <GeneralNav
                bgColor="transparent"
                bgShadow="shadow"
                btnColor="black" 
            />
            <div className="flex-col text-black items-center p-10 lg:px-24 md:px-24 sm:px-6 ">
                <h1 className="flex-col font-Bold text-left lg:text-7xl md:text-5xl text-4xl justify-center mt-10">
                  Events
                </h1>
                <div className="font-Light w-12/12 lg:text-lg text-sm lg:px-0 md:px-2 px-3 mt-5 mb-10">
                   <p className="mb-6">
                     While most of our services are offered virtually, we are sometimes able to host physical writing sessions and programs for young writers to meet, learn, write, read, and connect over their shared interest in writing.
                     Our events are free, engaging, insightful, and fun.
                   </p>
                   <p className="mb-6">
                     If you would like to attend any of our upcoming events please let us know by registering for the event. This would allow us reserve a space for you. We are only able to accommodate a few attendants at a time. 
                   </p>
                   <p>
                     Please note that attendants must be accompanied by adults. 
                   </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
export default EventsHero