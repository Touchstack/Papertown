import Profile from "../../../../assets/Images/child5.png";
import { Link, useNavigate } from "react-router-dom";

// import NewMember from "./NewMember";

function Members() {
  // setisModalOpen

  const navigate = useNavigate();
  const handleNewmember = () => {
    navigate("/admin/team/member-profile");
  };
  return (
    <div>
      <div className="lg:flex hidden justify-between lg:ml-10 mt-5">
        <ul className="flex ml-3 md:ml-7 lg:ml-10">
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Name</li>
          <li className="lg:mr-[200%] mr-16 md:mr-[140%]">Email</li>
          <li className="lg:mr-[130%] mr-16 md:mr-[140%]">Contact</li>
          <li className="">Role</li>
        </ul>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px] hidden lg:inline-block" />
      <div className="mt-10 lg:ml-10 ml-4">
        {/* start  */}
        <div className="lg:flex  lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex  items-center justify-between mr-10">
            <label>
              <input type="checkbox" className="accent-pink-400 w-10 h-10" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <Link to="/admin/team/member-profile">
            <div className="hidden lg:inline-block lg:flex lg:items-center lg:space-x-[130px]">
              <p className="font-bold text-lg">Agnes Okparolu</p>
              <p className="hidden lg:inline-block text-xl">
                fortune.adeleke@gmail.com
              </p>

              <p className="hidden lg:inline-block">0200 234 567</p>

              <p className="hidden lg:inline-block">Admin</p>
            </div>
            <div onClick={handleNewmember} className="lg:hidden inline-block">
              <p className="font-bold text-2xl">Agnes Okparolu</p>
              <p className=" text-xl">fortune.adeleke@gmail.com</p>

              <div className="flex gap-20">
                <p className="">0200 234 567</p>

                <p className="bg-[#F2F2F2] text-[#BDBDBD] px-5 py-1 rounded-full mt-2">
                  Admin
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:flex  lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex  items-center justify-between mr-10">
            <label>
              <input type="checkbox" className="accent-pink-400 w-10 h-10" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <Link to="/admin/team/member-profile">
            <div className="hidden lg:inline-block lg:flex lg:items-center lg:space-x-[130px]">
              <p className="font-bold text-lg">Agnes Okparolu</p>
              <p className="hidden lg:inline-block text-xl">
                fortune.adeleke@gmail.com
              </p>

              <p className="hidden lg:inline-block">0200 234 567</p>

              <p className="hidden lg:inline-block">Contributor</p>
            </div>
            <div onClick={handleNewmember} className="lg:hidden inline-block">
              <p className="font-bold text-2xl">Agnes Okparolu</p>
              <p className=" text-xl">fortune.adeleke@gmail.com</p>

              <div className="flex gap-20">
                <p className="">0200 234 567</p>

                <p className="bg-[#F2F2F2] text-[#BDBDBD] px-5 py-1 rounded-full mt-2">
                  Contributor
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="lg:flex  lg:text-center items-center mb-5 lg:ml-0 ml-5">
          <div className="flex  items-center justify-between mr-10">
            <label>
              <input type="checkbox" className="accent-pink-400 w-10 h-10" />
            </label>

            <img src={Profile} alt="" className="w-[30%] lg:w-[70%]" />
          </div>
          <Link to="/admin/team/member-profile">
            <div className="hidden lg:inline-block lg:flex lg:items-center lg:space-x-[130px]">
              <p className="font-bold text-lg">Agnes Okparolu</p>
              <p className="hidden lg:inline-block text-xl">
                fortune.adeleke@gmail.com
              </p>

              <p className="hidden lg:inline-block">0200 234 567</p>

              <p className="hidden lg:inline-block">Editor</p>
            </div>
            <div onClick={handleNewmember} className="lg:hidden inline-block">
              <p className="font-bold text-2xl">Agnes Okparolu</p>
              <p className=" text-xl">fortune.adeleke@gmail.com</p>

              <div className="flex gap-20">
                <p className="">0200 234 567</p>

                <p className="bg-[#F2F2F2] text-[#BDBDBD] px-5 py-1 rounded-full mt-2">
                  Editor
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* end  */}
      </div>
    </div>
  );
}

export default Members;
