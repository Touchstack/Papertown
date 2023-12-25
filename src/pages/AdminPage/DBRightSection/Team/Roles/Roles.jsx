import { Link, Navigate } from "react-router-dom";

function Roles() {
  const handleNewmember = () => {
    Navigate("/admin/team/add-role");
  };

  return (
    <div>
      {/* button start  */}
      <div className=" flex justify-end lg:mr-8 mr-5 gap-5 mt-0">
        <Link to="/admin/team/add-role">
          <button
            onClick={handleNewmember}
            className="bg-[#DF327B] lg:inline-block hidden   text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2"
          >
            + Add role
          </button>
        </Link>

        <button className="bg-[#DF327B]  lg:hidden inline-block text-[#FFFFFF] font-Bold rounded-full w-[111px] py-2">
          <a href="/add-role">+ Add</a>
        </button>
      </div>
      {/* button end  */}

      <div className=" flex mt-10">
        <table className="table-auto ml-20">
          <thead>
            <tr>
              <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                Role
              </th>
              <th className="font-Medium text-[#9A9A9A] text-start px-[170px] py-2">
                Description
              </th>
              <th className="font-Medium text-[#9A9A9A] text-start px-[180px] py-2">
                Date Created
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <hr className="text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
      <div className=" flex mt-5">
        <table className="table-auto ml-20 mb-5">
          <tbody className="mb-5">
            {/* start  */}
            <tr>
              <td className="font-Medium px-14 py-5">Admin</td>
              <td className="font-Medium px-[100px] py-5">
                A description to what this specific role can do
              </td>
              <td className="font-Medium px-[70px] py-5">3rd Feb, 2023</td>
            </tr>
            {/* end  */}
            {/* start  */}
            <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
              <td className="font-Medium px-14 py-5">Editor</td>
              <td className="font-Medium px-[100px] py-5">
                A description to what this specific role can do
              </td>
              <td className="font-Medium px-[70px] py-5">3rd Feb, 2023</td>
            </tr>
            {/* end  */}
            {/* start  */}
            <tr>
              <td className="font-Medium px-14 py-5">Contributor</td>
              <td className="font-Medium px-[100px] py-5">
                A description to what this specific role can do
              </td>
              <td className="font-Medium px-[70px] py-5">3rd Feb, 2023</td>
            </tr>
            {/* end  */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roles;
