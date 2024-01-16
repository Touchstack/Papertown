import SmartgenesImg from "../../../../../assets/Images/SmartgenesImg.png"

const ProfileBody = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Interests</h2>

      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
          Fiction
        </div>
        <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
          Fiction
        </div>
        <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
          Fiction
        </div>
      </div>

      <div className="mt-8">
        <div className=" h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4">
          <img src={SmartgenesImg} className="w-[60px] h-[60px]"/>
          <span className="text-white text-sm font-bold">Smartgenes Club</span>
        </div>
        <p className="text-xl font-bold mb-4">Writing Record</p>
      </div>
    </div>
  );
};

export default ProfileBody;
