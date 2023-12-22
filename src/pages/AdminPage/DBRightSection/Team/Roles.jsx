function Roles() {
  return (
    <div>
      {/* button start  */}
      <div className=" flex justify-end lg:mr-8 mr-5 gap-5 mt-0">
        <button className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
          <a href="/add-role">+ Add role</a>
        </button>

        <button className="bg-[#DF327B]  lg:hidden inline-block text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
          <a href="/add-role">+ Add</a>
        </button>
      </div>
      {/* button end  */}
      <div className="flex justify-between lg:ml-10 mt-10">
        <ul className="flex ml-3 md:ml-7 lg:ml-10">
          <li className="">Role</li>
          <li className="">Description</li>
          <li className="">Date created</li>
        </ul>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
      <div className="mt-10 lg:ml-10 ml-4">
        {/* start  */}
        <div className="flex text-center items-center mb-5">
          <p className="font-Bold lg:inline-flex md:inline-flex hidden">
            Agnes Okparolu
          </p>
          <span className="lg:ml-[10%] md:ml-5">fortune.adeleke@gmail.com</span>
          <span className="lg:ml-[18%] md:ml-16">0200 234 567</span>
          <span className="lg:ml-[13%] md:ml-[20%]">Admin</span>
        </div>
        <p className="lg:hidden md:hidden inline-block font-Bold">
          Agnes Okparolu
        </p>
        {/* end  */}
      </div>
    </div>
  );
}

export default Roles;
