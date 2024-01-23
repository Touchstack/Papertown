import UIfix from "../SubmitPage/UIfix";
import ProfilePicture from "../../assets/Images/unsplash_4LunKr1gTd8.png";
import UploadFile from "./UploadFile";

/*const FileInput = () => {
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        console.log('Selected file:', selectedFile.name);
      }
    } 
     ;*/
const SubmitComponent = () => {
  return (
    <div>
      <div>
        <main className="min-h-screen flex items-center justify-center bg-[#52B4AE1A]">
          <form className="w-full sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
            <h1 className="text-4xl font-Bold text-center pb-6 sm:pb-12">
              Submit your work here
            </h1>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm pb-2" htmlFor="Firstname">
                  First name
                </label>
                <input
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
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
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="Lastname"
                  placeholder="Njoku"
                />
              </div>
              <div>
                <label className="block text-sm pb-2" htmlFor="age">
                  Age
                </label>
                <input
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="age"
                  placeholder="Please input your age here"
                />
              </div>
              <div>
                <label className="block text-sm pb-2" htmlFor="number">
                  Contact Number
                </label>
                <input
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="number"
                  placeholder="Please input your contact number"
                />
              </div>
            </div>
            <div className="grid">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Email address
              </label>
              <input
                className="border-gray-500 rounded-md p-2 w-full h-[55px] sm:w-200px "
                type="text"
                name="email"
                placeholder="name@domain.com"
              />
            </div>
            <br />
            <div className="grid">
              <label className="block text-sm pb-2">School</label>
              <input
                className="border-gray-500 rounded-md p-2 w-full h-[55px]"
                type="text"
                name="email"
                placeholder="eg. Mirabel Complex"
              />
            </div>
            <br />
            <div>
              <label className="block text-sm pb-2">
                Upload a pdf or Word document of your writeup
              </label>
          
              <UploadFile/>
            </div>

            <button
              type="submit"
              className="bg-[#099B96] font-Bold w-[250px] h-[45px] px-[30px] py-2.5 gap-2.5 justify-center text-center inline-flex text-white mt-10 mb-10 rounded-full"
            >
              Submit my writeup
            </button>
          </form>
        </main>

        <div className="mt-10 py-8 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-20 lg:items-center md:items-left sm:items-left overflow-hidden md:col-span-1 gap-8 ">
          <div className="font-Bold w-[558px] text-black lg:text-[42px] md:text-3xl sm:text-2xl text-left ">
            Dont take our word for it. Hear what our past and current writers
            have to say
          </div>
          <div className=" sm:text-left inline-block mt-3 text-justify text-neutral-700">
            <p className="text-sm font-Regular">
              Writers will identify their favorite sensory memories and transfer
              them to a visual heart map. Writers will identify their favorite
              sensory memories and transfer them to a visual heart map. Writers
              will identify their favorite sensory memories and transfer them to
              a visual heart map.
            </p>
            <div className="grid grid-cols-2 mt-5">
             <div> 
              <img
                src={ProfilePicture}
                alt="Profile Picture"
                className="w-[39px] h-[39px] rounded-full border border-amber-400"
              />
              </div>
              <div className="text-sm absolute translate-x-12 translate-y-2 ">Enoch Charway</div>
            </div>
          </div>
        </div>
      </div>
      <UIfix/>
    </div>
  );
};
export default SubmitComponent;
