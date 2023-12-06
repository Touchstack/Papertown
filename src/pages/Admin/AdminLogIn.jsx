import AppLogo from "../../assets/Images/Logo.svg";


const AdminLogIn = () => {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-amber-200 bg-fixed bg-opacity-10 p-10">
         {/*papertown icon*/}
    <a
      href="/"
      className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
    >
      <img
        src={AppLogo}
        alt="Logo"
        className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px] mt-10 ml-20"
      />
    </a> 
   

    <div className="bg-white backdrop-blur-[50px] m-80 rounded-xl">
       
       
    <div className=" px-70 py-20">
    <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-40 font-Bold text-[#000] break-normal md:break-all">
     Log in
    </header>

    <form name="contact" method="post" >
      <div className="relative mb-2 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="firstname"
          required
          className="block w-[350px] h-[55px]  p-3  text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300"
        />
      </div>
      <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required
          className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300"
        />
      </div>
      <a
        href="#"
        className="text-sm font-Regular text-[#942D99] flex items justify-end mr-10  px-20
          hover:underline"
      >
        Forgot Password?
      </a>
    
       <div className="flex justify-center items-center">
        <button
          type="submit"
          className="text-[#FFF] bg-[#DF327B] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
        >
          <p className="text-center font-Bold text-md">Log in</p>
        </button>
       </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default AdminLogIn