import GeneralNav from "../../Navbar/GeneralNav"
import boychild1 from "../../assets/Images/boychild1.svg";
import Footer from "../FooterPage/Footer";

const ContactUs = () => {
  return (
    <div>
        <div className="w-full bg-[#FFD8FF]">
          <GeneralNav color="black" btnColor="black" bgColor="pink" bgShadow="whyShadow"/>
          <div className="flex md:flex-row space-y-6 flex-col p-10 md:px-60 items-center justify-center">
            {/* left section */}
             <div>
               <h1 className="font-Bold text-[72px]">Contact Us</h1>
               <p className="md:w-8/12">Want to find out more about us, partner with us, volunteer/share your precious time and expertise, support what we do, resolve queries or get answers, or perhaps you just want to say, “Hello”…Whatever it is, we’re happy to hear from you!</p>
             </div>

             {/* right section */}
             <div className="">
               <img src={boychild1} alt="" />
             </div>
          </div>
        </div>

        <div className="flex w-12/12 p-20 items-center justify-center">
            <div className="bg-gradient-to-b rounded-[16px] h-[306px] flex flex-col items-center justify-center from-[#9747FF] via-[#DF327B] to-[#9747FF]">
               <p className="text-[#FFFFFF] font-Bold text-[26] md:text-[26px] lg:text-[36px]">
                 We are here
               </p>
               <p className="text-[#FFFFFF] cursor-pointer p-3 font-Bold text-[26px] md:text-[26px] lg:text-[72px]">
                  <a href="mailto:hello@papertownimaginarium.org">
                    hello@papertownimaginarium.org
                  </a>
               </p>
            </div>
        </div>

        <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  )
}

export default ContactUs