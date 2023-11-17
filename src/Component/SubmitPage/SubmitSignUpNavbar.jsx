import { useState, Fragment } from "react";
import Modal from "../Modal/Modal";
//import { useNavigate } from "react-router-dom";
import { NavBarDropdown } from "../../Navbar/NavBarDropdown";
import { NewsDropdown } from "../../Navbar/NewsDropdown";
import AppLogo from "../../assets/Images/Logo.svg";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const SubmitSignUpNavbar = () => {
 // const [currentIndex, setCurrentIndex] = useState(0);
 // const navigate = useNavigate();
  const hidden = "hidden"; //show or hide navbar
  const [ariaExpanded, setAriaExpanded] = useState("false"); //expanded or collapsed state
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const navBarToggler = () => {
    if (hidden && ariaExpanded === "false") {
      cycleOpen();
      setAriaExpanded("true");
      return setShowMenu(true);
    } else {
      setAriaExpanded("false");
      cycleOpen();
      return setShowMenu(false);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const handleDropdown = () => {
    setDropdown(!Dropdown);
  };
   
  const handleCloseLogIn = () => {
    setShowModal(false);
    setShowModal2(true);
  }
  
  const handleCloseJoin = () => {
    setShowModal(true);
    setShowModal2(false);
  }
  const links = [
    { name: "Write", to: "/", id: 1 },
    { name: "Submit", to: "/", id: 2 },
    { name: "Read", to: "/", id: 3 },
    { name: "Press Club", to: "#", id: 4 },
    { name: "Publications", to: "#", id: 5 },
    { name: "News", to: "#", id: 6 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <main>
      <Fragment>
        <AnimatePresence>
          {open ? (
            <motion.aside
              className="bg-white w-full h-[100vh] fixed z-40"
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <div className="flex justify-between items-center p-4">
                <a
                  href="/"
                  className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
                >
                  <img
                    src={AppLogo}
                    alt="Logo"
                    style={{ width: "80px", height: "80px" }}
                    className="md:h-[80px] lg:w-[88px] sm:h-[70px] sm:w-[78px] h-[60px] w-[68px]"
                  />
                </a>
                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border"
                  aria-controls="navbar-cta"
                  aria-expanded={ariaExpanded}
                  onTouchStartCapture={() => showMenu && setShowMenu(false)}
                  onClick={() => navBarToggler()}
                  onMouseEnter={() => hidden && setShowMenu(false)}
                  onMouseLeave={() => setShowMenu(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="46"
                    viewBox="0 0 20 16"
                    fill="none"
                  >
                    <rect
                      x="3.52734"
                      y="0.526855"
                      width="19.8799"
                      height="2"
                      rx="1"
                      transform="rotate(45 3.52734 0.526855)"
                      fill="#8C394C"
                    />
                    <rect
                      x="2"
                      y="15"
                      width="19.9357"
                      height="2"
                      rx="1"
                      transform="rotate(-45 2 15)"
                      fill="#8C394C"
                    />
                  </svg>
                </button>
              </div>
              <motion.div
                className="text-dark font-Regular text-xl flex flex-col justify-center items-start m-5"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <span key={id}>
                    <a
                      href={to}
                      className={`flex justify-center items-center ${
                        showDropdown && name === "Write" ? "mb-1" : "mb-10"
                      } ${
                        location.pathname === to && "text-dark font-Regular"
                      }`}
                      onClick={() =>
                        name === "Write" ? handleShowDropdown() : null
                      }
                    >
                      {name}
                      {name === "Write" && (
                        <svg
                          className="mr-1 h-5 w-5 md:hover:text-fleetBlue hover:scale-105 duration-200 hover:font-SemiBold"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </a>
                    {showDropdown && name === "Write" ? (
                      <div className="">
                        <NavBarDropdown />
                      </div>
                    ) : null}
                  </span>
                ))}
                <div className="absolute bottom-5 flex flex-col">
                  <motion.a
                    href="/login"
                    className="font-Regular text-xl mb-10"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    onClick={() => setShowModal(true)}
                  >
                    Login
                  </motion.a>
                  <motion.button
                    className="text-[#FFF] font-Regular bg-[#52B4AE] px-9 h-[50px] p-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    Join Papertown
                  </motion.button>
                </div>
              </motion.div>
            </motion.aside>
          ) : (
            <nav className="flex container mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-3 bg-white-transparent shadow-xl shadow-purple-200" >
              <div className="container md:pl-25 flex justify-between items-center m-auto">
                <a
                  href="/"
                  className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
                >
                  <img
                    src={AppLogo}
                    alt="Logo"
                    style={{ width: "80px", height: "80px" }}
                    className="md:h-[80px] lg:w-[88px] sm:h-[70px] sm:w-[78px] h-[60px] w-[68px]"
                  />
                </a>

                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border"
                  aria-controls="navbar-cta"
                  aria-expanded={ariaExpanded}
                  onTouchStartCapture={() => showMenu && setShowMenu(false)}
                  onClick={() => navBarToggler("/submit")}
                  onMouseEnter={() => hidden && setShowMenu(false)}
                  onMouseLeave={() => setShowMenu(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className={`${hidden} lg:flex justify-between w-full md:w-auto`}
                  id="navbar-cta"
                >
                  <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 border text-center rounded-lg md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li className={`list-none inline-block text-[#FFF]`}>
                      <button
                        onClick={handleShowDropdown}
                        className="flex justify-center text-black items-center mx-auto"
                      >
                        Write
                        <svg
                          className="mr-1 ml-1 h-5 w-5 mt-1 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {showDropdown && <NavBarDropdown />}
                    </li>
                    <li
                      className={`list-none inline-block text-black  ${
                        location.pathname === "/tips"
                          ? "font-Regular"
                          : `text-[#FFF]`
                      }`}
                    >
                      <a href="/submit" className="">
                        Submit
                      </a>
                    </li>
                    <li
                      className={`list-none inline-block text-black  ${
                        location.pathname === "/tips"
                          ? "font-Regular"
                          : `text-[#FFF]`
                      }`}
                    >
                      <a href="/" className="">
                        Read
                      </a>
                    </li>
                    <li
                      className={`list-none inline-block text-black  ${
                        location.pathname === "/tips"
                          ? "font-Regular"
                          : `text-[#FFF]`
                      }`}
                    >
                      <a href="/" className="">
                        Press Club
                      </a>
                    </li>
                    <li
                      className={`list-none inline-block text-black  ${
                        location.pathname === "/tips"
                          ? "font-SemiBold"
                          : `text-[#FFF]`
                      }`}
                    >
                      <a href="/" className="">
                        Publications
                      </a>
                    </li>
                    <li className={`list-none inline-block text-[#FFF]`}>
                      <button
                        onClick={handleDropdown}
                        className="flex justify-center items-center text-black mx-auto"
                      >
                        News
                        <svg
                          className="mr-1 ml-1 h-5 w-5 mt-1 text-black md:hover:text-fleetBlue hover:scale-105 duration-200 hover:font-SemiBold"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {Dropdown && <NewsDropdown />}
                    </li>
                  </ul>
                </div>
                <div
                  className={`${hidden} w-full lg:flex md:w-auto`}
                  id="navbar-buttons"
                >
                  <ul className="flex items-center py-2 font-Regular text-lg">
                    <button
                      className="border border-lg text-black px-9 p-3 mr-4 rounded-full"
                      onClick={() => setShowModal(true)}
                    >
                      Login
                    </button>
                    <button className="bg-[#52B4AE] text-[#FFF] px-9 p-3 rounded-full" onClick={() => setShowModal2(true)}>
                      Join Papertown
                    </button>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </AnimatePresence>

        {/*Model for Login*/}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <header className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
            Log in
          </header>

          <form name="contact" method="post">
            <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585]">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                name="firstname"
                required
                className="block w-[350px] p-3 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585]">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                required
                className="block  w-[350px] p-3 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <a
              href="#"
              className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
                hover:underline"
            >
              Forgot Password?
            </a>
            <button
              type="submit"
              className="text-[#FFF] bg-[#DF327B] mt-2 focus:ring-1 focus:outline-none
                   focus:ring-amber-100 font-Regular rounded-full text-xl p-3 pl-12 w-[350px] pr-12 ml-4 text-center"
            >
              Log in
            </button>
            <div className="flex items justify-center text-sm font-Regular m-8 text-[#828282]">
              Need an account?
              <a
                href="#"
                className="text-[#942D99] hover:underline ml-1"
                onClick={handleCloseLogIn}
              >
                Sign up
              </a>
            </div>
          </form>
        </Modal>
        
         {/*Model for SignUp*/}
        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}
        >
          <header className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-2 ml-5 font-Bold text-[#000] break-normal md:break-all">
            Set up your account
          </header>
          <div className="flex items justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
            >
              <circle cx="55" cy="55" r="55" fill="#F4F5F7" />
              <path
                d="M33.5791 78.5622V75.9666C33.5791 67.3653 40.772 60.3926 49.6449 60.3926H60.3554C69.2283 60.3926 76.4212 67.3653 76.4212 75.9666V78.5622"
                stroke="#E1E1E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M55.0015 52.6071C49.0863 52.6071 44.291 47.9586 44.291 42.2244C44.291 36.4903 49.0863 31.8418 55.0015 31.8418C60.9167 31.8418 65.7121 36.4903 65.7121 42.2244C65.7121 47.9586 60.9167 52.6071 55.0015 52.6071Z"
                stroke="#E1E1E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <form name="contact" method="post">
            <div className="relative z-0 w-full group text-sm mb-1 font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="First name"
                name="firstname"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full group text-sm mb-1 font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="Last name"
                name="lastname"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="Date of birth"
                name="dateofbirth"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
              <input
                type="phonenumber"
                id="phonenumber"
                placeholder="Phone number"
                name="phonenumber"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-2 group text-sm font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="Personal address"
                name="personaladdress"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="School"
                name="school"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="School address"
                name="schooladdress"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>
            <div className="relative z-0 w-full mb-1 group text-sm font-Regular text-[#858585]">
              <input
                type="text"
                id="large-input"
                placeholder="Class / Grade"
                name="class"
                required
                className="block w-[350px] p-2 ml-4 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
              />
            </div>

            <button
              type="submit"
              className="text-[#FFF] bg-[#DF327B] mt-1 focus:ring-1 focus:outline-none
                   focus:ring-amber-100 font-SemiBold rounded-full text-xl p-2 pl-12 w-[350px] pr-12 ml-4 text-center"
            >
              Continue
            </button>

            <div className="flex items justify-center text-sm font-Regular text-[#828282]">
              Already have an account?
              <a
                href="#"
                className="text-[#942D99] hover:underline ml-1"
                onClick={handleCloseJoin}
              >
                Log in
              </a>
            </div>
          </form>
        </Modal>
      </Fragment>
    </main>
  );
};
export default SubmitSignUpNavbar;
