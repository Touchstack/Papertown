import UploadFile from "./UploadFile";
import { useForm } from "react-hook-form";

const SubmitComponent = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

 
  return (
    <div>
        <main className=" flex items-center justify-center bg-[#52B4AE1A] w-full">
         {/*
          <form onSubmit={handleSubmit(onSubmit)} className=" ">
             <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-[24px] font-Bold text-center pt-6  pb-5">
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
            <div className="grid col-span-2">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Email address
              </label>
              <input
               {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                className="border-gray-500 rounded-md p-2 w-full  h-[55px] sm:w-200px "
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
          </form>
          */}
          <div className="flex flex-col items-center justify-center p-10">
              <label className="block text-[24px] pb-2 font-[700]">
                Upload a pdf document of your writeup
              </label>
          
              <UploadFile/>
          </div>
        </main>
    </div>
  );
};
export default SubmitComponent;
