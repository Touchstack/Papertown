import UploadFile from "./UploadFile";
import { useForm } from "react-hook-form";

/*const FileInput = () => {
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        console.log('Selected file:', selectedFile.name);
      }
    } 
     ;*/
const SubmitComponent = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div>
        <main className=" flex items-center justify-center bg-[#52B4AE1A]">
          <form onSubmit={handleSubmit(onSubmit)} className="sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
            <h1 className="text-4xl font-Bold text-center pb-6 sm:pb-12">
              Submit your work here
            </h1>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm pb-2" htmlFor="Firstname">
                  First name
                </label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="Firstname"
                  placeholder="Mary"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm pb-2" htmlFor="Lastname">
                  Last name
                </label>
                <input
                {...register("lastName", { required: "Last name is required" })}
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="Lastname"
                  placeholder="Njoku"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName.message}</p>}
              </div>
              <div>
                <label className="block text-sm pb-2" htmlFor="age">
                  Age
                </label>
                <input
                 {...register("age", { required: "Age is required" })}
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="age"
                  placeholder="Please input your age here"
                />
                {errors.age && <p className="text-red-500 text-sm mt-2">{errors.age.message}</p>}
              </div>
              <div>
                <label className="block text-sm pb-2" htmlFor="number">
                  Contact Number
                </label>
                <input
                {...register("Contact", { required: "Contact Number is required" })}
                  className="border-gray-500 rounded-md p-2 w-[297.50px] h-[55px] sm:w-200px"
                  type="text"
                  name="number"
                  placeholder="Please input your contact number"
                />
                {errors.Contact && <p className="text-red-500 text-sm mt-2">{errors.Contact.message}</p>}
              </div>
            </div>
            <div className="grid">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Email address
              </label>
              <input
               {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                className="border-gray-500 rounded-md p-2 w-full h-[55px] sm:w-200px "
                type="text"
                name="email"
                placeholder="name@domain.com"
              />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>

            <br />
            <div className="grid">
              <label className="block text-sm pb-2">School</label>
              <input
               {...register("school", { required: "School is required", pattern: /^\S+@\S+$/i })}
                className="border-gray-500 rounded-md p-2 w-full h-[55px]"
                type="text"
                name="school"
                placeholder="eg. Mirabel Complex"
              />
              {errors.school && <p className="text-red-500 text-sm mt-2">{errors.school.message}</p>}
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
    </div>
  );
};
export default SubmitComponent;
