import Profile from "../../../../../assets/Images/Profile.png";

const ProfileMemberList = () => {
  return (
    <div>
      <div
        className="flex justify-between lg:ml-10 mt-10 pb-4 border-b-2 border-[#D9D9D9]
     border-dashed"
      ></div>
      <div className="mx-auto">
        <div className="flex flex-row items-center justify-between md:p-10 p-6 mt-8 text-center">
          <h1 className="font-Bold text-4xl">Member List</h1>
          <div className="flex gap-4">
            <button className="inline-flex text-[#BDBDBD] font-Medium rounded-full w-[110px] h-[50px] py-2 text-[#000000] bg-[#F2F2F2] justify-center items-center">
              <span className="inline-flex mr-2"></span> Remove
            </button>
            <button className="inline-flex text-[#DB2E78] font-Bold text-lg rounded-full w-[170px] py-2 text-[#000000] justify-center items-center border border-[#DB2E78]">
              <span className="inline-flex mr-2"></span>+ Add member
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between lg:ml-1 mt-10 text-[#9A9A9A]">
        <ul className="flex ml-3 md:ml-7 lg:ml-28">
          <li className="lg:mr-[100%] mr-16 md:mr-[140%]">Name</li>
          <li className="lg:mr-[100%] mr-16 md:mr-[140%]">Email</li>
          <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Contact</li>
          <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Age</li>
          <li className="lg:mr-[90%] mr-16 md:mr-[140%]">Grade</li>
        </ul>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
      <div className="mt-10 lg:ml-2 ml-4">
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5 py-4 font-SemiBold">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-[#F6F6F6] border-gray-300 rounded dark:bg-gray-700"
          />

          <img src={Profile} alt="" className="w-[51px] h-[51px]" />
          <p className="lg:inline-flex md:inline-flex hidden">
            Fortune Adeleke
          </p>
          <span className="lg:ml-[3%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[7%] md:ml-[20%]">9</span>
          <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
        </div>

        <p className="lg:hidden md:hidden inline-block font-Bold">
          Fortune Adeleke
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex lg:gap-3 bg-[#F9F9F9] text-center py-4 items-center mb-5 lg:mx-auto font-SemiBold">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" className="w-[51px] h-[51px]" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Fortune Adeleke
          </p>
          <span className="lg:ml-[3%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[7%] md:ml-[20%]">15</span>
          <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Fortune Adeleke
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex gap-3 text-center items-center mb-5 py-4 font-SemiBold">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700"
          />

          <img src={Profile} alt="" className="w-[51px] h-[51px]" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Fortune Adeleke
          </p>
          <span className="lg:ml-[3%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[7%] md:ml-[20%]">13</span>
          <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold font-SemiBold">
          Fortune Adeleke
        </p>
        {/* end  */}
        {/* start  */}
        <div className="flex lg:gap-3 bg-[#F9F9F9] py-4 text-center items-center mb-5 lg:mx-auto font-SemiBold">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700"
          />

          <img src={Profile} alt="" className="w-[51px] h-[51px]" />
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Fortune Adeleke
          </p>
          <span className="lg:ml-[3%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[14%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[7%] md:ml-[20%]">8</span>
          <span className="lg:ml-[15%] md:ml-[20%]">Grade 6</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Fortune Adeleke
        </p>
        {/* end  */}
      </div>
    </div>
  );
};

export default ProfileMemberList;
