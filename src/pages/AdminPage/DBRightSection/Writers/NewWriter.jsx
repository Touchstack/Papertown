import WriterSearchBar from "./WriterSearchBar";
import WriterLogo from "../../../../assets/Images/WriterLogo.svg"
const NewWriter = () => {
  return (
   <div className="bg-[#FFFFFF] rounded-[25px] mt-2">
      <WriterSearchBar />
      <main className="min-h-screen flex items-center justify-center lg:ml-[5%] ">
          <form className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
          <div className="lg:ml-[40%] lg:mb-3 relative">
            <img src={WriterLogo} alt="Writer Logo" />
             <div className="rounded-full bg-[#DF327B] w-6 h-6"></div>
             </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm pb-2 mt-2" htmlFor="Firstname">
                  First name
                </label>
                <input
                  className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[217.50px] h-[55px] sm:w-100px"
                  type="text"
                  name="Firstname"
                  placeholder="Mary"
                />
              </div>
              <div>
                <label className="block text-sm pb-2 mt-2" htmlFor="Lastname">
                  Last name
                </label>
                <input
                  className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[217.50px] h-[55px] sm:w-100px"
                  type="text"
                  name="Lastname"
                  placeholder="Njoku"
                />
              </div>
            </div>
            <div className="w-[500px]">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Contact Number
              </label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[55px] sm:w-200px "
                type="text"
                name="ConactNumber"
                placeholder="0200 234 567"
              />
            </div>
            <br />
            <div className="w-[500px]">
              <label className="block text-sm pb-2">Email Address</label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[55px]"
                type="text"
                name="email"
                placeholder="name@domain.com"
              />
            </div>
            <br />
            <div className="w-[500px]">
              <label className="block text-sm pb-2">Location of residence</label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[55px]"
                type="text"
                name="location"
                placeholder="6th Catcus St."
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-[#DB2E78] font-Bold text-white rounded-full p-2 w-[500px] h-[55px]"
            >
              Continue
            </button>
          </form>
        </main>
        </div>
  );
};

export default NewWriter;
