import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import ProfileCardLeft from "./ProfileCardLeft";
import ProfileCardRight from "./ProfileCardRight";
import { HiDotsVertical } from "react-icons/hi";

function Profile() {
   // retrive data in local storage
   const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {/* Navbar section starts */}

      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />

      {/* Navbar section ends */}

      {/* profile main section start   */}

      <div>
        <div>
          <h3 className="lg:text-[60px] gap-20 flex items-center text-[40px] font-Bold lg:ml-20 md:ml-10 ml-5 mt-20">
            Hi {user?.data?.studentDetails?.first_name} 👋🏾
            <div className="lg:hidden inlin-block text-2xl md:flex md:ml-[50%]  ">
              <HiDotsVertical />
            </div>
          </h3>
        </div>
        {/* Main cards section start  */}
        <div className="flex lg:gap-10 lg:ml-20 mt-5">
          {/* profile card left start  */}
          <div className="hidden lg:inline-block">
            <ProfileCardLeft />
          </div>
          {/* profile card left end  */}

          {/* profile card right start  */}
          <div>
            <ProfileCardRight />
          </div>
          {/* profile card  right end  */}
        </div>
        {/* Main cards section end  */}
      </div>

      {/* profile main section end   */}

      {/* Footer section starts */}
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
      {/* Footer section ends */}
    </div>
  );
}

export default Profile;
