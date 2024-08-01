import { useState } from 'react';
import GeneralNav from "../../Navbar/GeneralNav";
import Footer from "../FooterPage/Footer";
import ProfileCardLeft from "./ProfileCardLeft";
import MyProfileCard from "./MyProfileCard/MyProfileCard";
import { HiDotsVertical } from "react-icons/hi";
import MyClubsCard from './MyClubsCard/MyClubsCard';
import MySubmissionsCard from "./MySubmissionsCard/MySubmissionsCard";
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/features/userSlice';

function Profile() {
  const [activeCard, setActiveCard] = useState('profile');


  const user = useSelector(selectUser)

  const renderActiveCard = () => {
    switch (activeCard) {
      case 'profile':
        return <MyProfileCard />;
      case 'clubs':
        return <MyClubsCard />;
      case 'submissions':
        return <MySubmissionsCard />;
      default:
        return <MyProfileCard />;
    }
  };

  return (
    <div>
      <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
      <div className="flex flex-col items-center">
        <div className="">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <h3 className="lg:text-[60px] gap-20 flex items-center text-[40px] font-Bold mt-20">
              Hi {user?.first_name} 👋🏾
              <div className="lg:hidden inline-block text-2xl">
                <HiDotsVertical />
              </div>
            </h3>
          </div>
          <div className="flex justify-center gap-10">
            <div className="hidden lg:inline-block">
              <ProfileCardLeft setActiveCard={setActiveCard} activeCard={activeCard} />
            </div>
            {renderActiveCard()}
          </div>
        </div>
      </div>
      <div className="bg-[#B44DB8]">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
