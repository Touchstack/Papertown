import { FaAngleDown } from "react-icons/fa6";
function MemberForm() {
  return (
    <div>
      <div className="flex mt-20 lg:ml-[31%]  md:ml-48 ml-10 sm:ml-10 lg:mr-32 md:mr-36 ">
        <h6 className="lg:w-[400px] w-[280px] text-[16px] ">
          Enter the email address of the member you wish to add. They’ll receive
          an email with instructions to setup their account.
        </h6>
      </div>
      <div className="lg:ml-[32%] ml-10 mt-10 md:ml-48 justify-center sm:ml-[19%] ml-10 lg:mr-32 md:mr-36 items-center h-full">
        <form action="" className="overflow-x-hidden">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email address
              </label>
              <input
                className="appearance-none  block lg:w-[400px] w-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="name@domain.com"
              />
            </div>
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              User role
            </label>
            <div className="relative lg:w-[400px] w-[300px]">
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-700">
                <FaAngleDown />
              </div>
              <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Select role</option>
                <option>Admin</option>
                <option>Contributor</option>
                <option>Editor</option>
              </select>
            </div>
          </div>
          <button
            className="shadow bg-[#DF327B] mt-5 text-white font-bold py-3 px-20 rounded-full"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
