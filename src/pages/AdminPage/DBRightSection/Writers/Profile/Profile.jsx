import ProfileBody from "./ProfileBody";
import ProfileCard from "./ProfileCards";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";

function Profile() {
  return (
    <div className="mt-2 bg-[#FFFFFF] lg:w-full w-full lg:h-full h-full rounded-[25px] overflow-x-auto">
      <ProfileHero />
      <ProfileHeader />
      <ProfileBody />
      <ProfileCard />
    </div>
  );
}

export default Profile;