import { Navigate } from "react-router-dom";

function RoleForm() {
  const handleNewmember = () => {
    Navigate("/team/role-permissions");
  };

  return (
    <div>
      <div className="flex lg:mt-10 justify-center">
        <h6 className="lg:w-[400px] text-[16px] ">
          Enter the email address of the member you wish to add. They’ll receive
          an email with instructions to setup their account.
        </h6>
      </div>
      <div className="ml-[32%] lg:mt-10 justify-center items-center h-full">
        <form action="" className="overflow-x-hidden">
          <div className="flex flex-wrap -mx-3 mb-3">
            {/* start  */}
            <div className="w-full px-3 mb-5">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Role title
              </label>
              <input
                className="appearance-none  block w-[400px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Admin"
              />
            </div>
            {/* end  */}
            {/* start  */}
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Description
              </label>
              <textarea
                id="message"
                rows="4"
                className="appearance-none  block w-[400px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Write your description here..."
              ></textarea>
            </div>
            {/* end  */}
          </div>

          <button
            onClick={handleNewmember}
            className="mx-auto shadow bg-[#DF327B]  mt-3 text-white font-bold py-3 px- rounded-full w-[400px]"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoleForm;
