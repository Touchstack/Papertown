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
const DetailsForm = ({id, title}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="lg:mt-8 mt-6">
        <main className=" flex items-center justify-center bg-[#52B4AE1A]">
          <form onSubmit={handleSubmit(onSubmit)} className="sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 rounded-lg p-6">
            <h1 className="text-4xl font-Bold text-center pb-6 sm:pb-12">
              Submit your work here
            </h1>
       {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[40px] sm:gap-8 mb-6">
        
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 lg:h-[200px]">
              <div className="">
                <label className="block text-sm pb-2" htmlFor="Firstname">
                  First name
                </label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="border-gray-500 rounded-md p-2 lg:w-5/6 md:w-3/6 h-[55px] sm:w-4/6"
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
                  className="border-gray-500 rounded-md p-2 lg:w-5/6 md:w-3/6 h-[55px] sm:w-4/6"
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
                  className="border-gray-500 rounded-md p-2 lg:w-5/6 md:w-3/6 h-[55px] sm:w-4/6"
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
                  className="border-gray-500 rounded-md p-2 lg:w-5/6 md:w-3/6 h-[55px] sm:w-4/6"
                  type="text"
                  name="number"
                  placeholder="Please input your contact number"
                />
                {errors.Contact && <p className="text-red-500 text-sm mt-2">{errors.Contact.message}</p>}
              </div>
              <div className="lg:col-span-full">
                 <label className="block text-sm pb-2 mt-5" htmlFor="email">
                   Email address
                 </label>
                 
              <input
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                 className="border-gray-500 rounded-md p-2 lg:w-11/12 md:w-3/6 h-[55px] sm:w-4/6"
                 type="text"
                 name="email"
                 placeholder="name@domain.com"
                 style={{ gridColumn: 'span 2' }}
               />
                 {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
              
          </div>
          <div className="lg:col-span-full">
              <label className="block text-sm pb-2">School</label>
              <input
               {...register("school", { required: "School is required", pattern: /^\S+@\S+$/i })}
                className="border-gray-500 rounded-md p-2 lg:w-11/12 md:w-3/6 h-[55px] sm:w-4/6"
                type="text"
                name="school"
                placeholder="eg. Mirabel Complex"
              />
              {errors.school && <p className="text-red-500 text-sm mt-2">{errors.school.message}</p>}
            </div>

              </div>
              
            
              <div className="">
                <label className="block text-sm pb-2" htmlFor="age">
                Enter the title of your submission
                </label>
                <input
                  className="border-gray-500 rounded-md p-2 w-full h-[55px] sm:w-200px"
                  type="text"
                  name="age"
                  placeholder="Title goes here"
                />
                <div className="mt-2 mb-2">
                <label className="block text-sm pb-2" htmlFor="age">
                Type your response
                </label>
                <input
                  className="border-gray-500 rounded-md p-2 w-full h-[190px] sm:w-200px"
                  type="text"
                  name="age"
                  placeholder="Start typing"
                />
                 </div>
              
              </div>     
            </div> 
            */}

             
            <div className="flex flex-col items-center justify-center">
              <label className="block text-sm pb-2">
                Upload a pdf document of your writeup
              </label>
          
              <UploadFile id={id} title={title}/>
           
            </div>
 
          </form>
        </main>
    </div>
  );
};
export default DetailsForm;
