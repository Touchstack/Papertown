import WriterLogo from "../../../../assets/Images/WriterLogo.svg";
import EditIcon from "../../../../assets/Images/edit.png";

const NewWriterForm = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <form className="w-full sm:w-11/12 md:w-10/12 lg:w-6/12 xl:w-6/12 rounded-lg p-6">
        <div className="relative flex justify-center" >
          <img src={WriterLogo} alt="Writer Logo" className="h-24 w-auto" />

          <div className=" absolute bottom-0 xl:ml-[17%] lg:ml-[15%] md:ml-[8%] sm:ml-[7%] ml-[7%]">
            <img src={EditIcon} alt="Edit Icon" className=" w-auto h-auto " />
       </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm pb-2" htmlFor="Firstname">
              First name
            </label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md lg:w-full w-1/2 h-[55px]"
              type="text"
              name="Firstname"
              placeholder="Mary"
            />
          </div>
          <div>
            <label className="block text-sm pb-2" htmlFor="Lastname">
              Last name
            </label>
            <input
              className="border-gray-500 bg-[#F4F5F7] rounded-md lg:w-full w-1/2 h-[55px]"
              type="text"
              name="Lastname"
              placeholder="Njoku"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm pb-2 mt-5" htmlFor="email">
            Contact Number
          </label>
          <input
            className="border-gray-500 bg-[#F4F5F7] rounded-md w-full h-[55px]"
            type="text"
            name="ConactNumber"
            placeholder="0200 234 567"
          />
        </div>
        <div>
          <label className="block text-sm pb-2">Email Address</label>
          <input
            className="border-gray-500 bg-[#F4F5F7] rounded-md w-full h-[55px]"
            type="text"
            name="email"
            placeholder="name@domain.com"
          />
        </div>
        <div className="">
          <label className="block text-sm pb-2">Location of residence</label>
          <input
            className="border-gray-500 bg-[#F4F5F7] rounded-md w-full h-[55px]"
            type="text"
            name="location"
            placeholder="6th Catcus St."
          />
        </div>
      </form>
    </div>
  );
};

export default NewWriterForm;
