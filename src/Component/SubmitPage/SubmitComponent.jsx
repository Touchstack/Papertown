import UploadFile from "./UploadFile";


const SubmitComponent = () => {
  const user = localStorage.getItem("user");

  return (
    <div>
        <div className=" flex items-center justify-center bg-[#52B4AE1A] w-full">
          <div className="flex flex-col w-full items-center justify-center p-10">
              {user ? (
                <h1 className="block text-[24px] pb-2 font-Bold">
                 Submit your work here
                </h1>
               ): (
               <h1 className="block text-[24px] pb-2 font-Bold">
                Sign up to Submit your work here
               </h1>
              )}
          
              {user ?  <UploadFile/> :
               <button
                 onClick={() => window.location.href = '/signup'}
                 className="bg-[#099B96] p-4 font-Bold  justify-center text-center inline-flex text-white w-[298px] my-10 md:rounded-full rounded-3xl"
 
               >
                 Get started
               </button>
               }
          </div>
        </div>
    </div>
  );
};
export default SubmitComponent;
