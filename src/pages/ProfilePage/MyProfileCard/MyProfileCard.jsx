import { useState } from 'react';
import MyProfileCardInfo from "./component/MyProfileCardInfo";
import EditMyProfile from "./component/EditMyProfile";

function MyProfileCard() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white shadow-xl mb-[15%] rounded-xl lg:w-[973px] lg:p-10 p-5 md:p-10 w-[90vw]">
      {isEditing ? (
        <EditMyProfile setIsEditing={setIsEditing} />
      ) : (
        <MyProfileCardInfo setIsEditing={setIsEditing} />
      )}
    </div>
  );
}

export default MyProfileCard;