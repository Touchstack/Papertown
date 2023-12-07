import Modal from "./Modal";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { logInUser } from "../../Api";

const LogInModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const onSubmit = async (values, actions) => {
    try {
      await basicSchema.validate(values, { abortEarly: false });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      // Validation successful - make API call or handle login logic here
      console.log(values);

      const res = await logInUser(JSON.stringify(values));
      console.log(res);
      if (res.status === 200) {
        // Handle successful login here
      }
    } catch (error) {
      // Handle validation or API call errors
      console.error("Error:", error);
    }

    // console.log(values);
    // console.log(actions);
    // console.log("submitted");
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  //console.log(errors);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Log in
      </header>

      <form onSubmit={handleSubmit} name="contact" method="post">
        {/* className= {errors.email && touched.email ? "input-error" : ""} */}
        {/* <form autoComplete="off"> */}
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} // validates the form when you click out of the input
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {errors.email && touched.email && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.email}
            </p>
          )}
        </div>

        {/* <p className="error absolute bottom-[-30px] left-0 ml-2 text-red-500 text-xs">
         */}

        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
          {errors.password && touched.password && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.password}
            </p>
          )}
        </div>
        <a
          href="#"
          className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
           hover:underline"
        >
          Forgot Password?
        </a>
        <div className="flex justify-center items-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="opacity-35 cursor-not-allowed text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
          >
            <p className="text-center font-bold text-xl">Log in</p>
          </button>
        </div>
        <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
          Need an account?
          <a href="#" className="text-[#942D99] hover:underline ml-1">
            Sign up
          </a>
        </div>
      </form>
    </Modal>
  );
};

LogInModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LogInModal;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Modal from "./Modal";
// import PropTypes from "prop-types";
// import * as Yup from "yup";
// // import { logInUser } from "../../Api";

// const LogInModal = ({ isVisible, onClose }) => {
//   const navigate = useNavigate();
// const [formData, setFormData] = useState({
//   email: "",
//   password: "",
// });

// const [errors, setErrors] = useState({});

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     await schema.validate(formData, { abortEarly: false });
//     // Validation successful - make API call or handle login logic here
//     console.log("Form data:", formData);

//     const res = await logInUser(JSON.stringify(formData));
//     //console.log(res)
//     if (res.status === 200) {
//then you navigate to the page you want
//navigate("/");
//     }
//   } catch (validationErrors) {
//     const errors = {};
//     validationErrors.inner.forEach((error) => {
// errors[error.path] = error.message;
//     });
//     setErrors(errors);
//   }
// };

// if (!isVisible) {
//   return null;
// }

//   return (
//     <Modal isVisible={isVisible} onClose={onClose}>
//       <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
//         Log in
//       </header>

//       <form onSubmit={handleSubmit}>
//         <div className="relative mb-2 group text-sm font-Regular text-[#858585] items-center justify-center flex flex-col">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="block w-[350px] h-[55px]  p-3  text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex flex-col">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         {/*
//         <button type="submit">Login</button> */}

//         <a
//           href="#"
//           className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
//           hover:underline"
//         >
//           Forgot Password?
//         </a>

//         <div className="flex justify-center items-center">
//           <button
//             type="submit"
//             className="text-[#FFF] bg-[#DF327B] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
//           >
//             <p className="text-center font-bold text-xl">Log in</p>
//           </button>
//         </div>

//         <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
//           Need an account?
//           <a href="#" className="text-[#942D99] hover:underline ml-1">
//             Sign up
//           </a>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// LogInModal.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

//export default LogInModal;

// import Modal from "./Modal";
// import PropTypes from "prop-types";

// const LogInModal = ({ isVisible, onClose }) => {
//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <Modal isVisible={isVisible} onClose={onClose}>
//       <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
//         Log in
//       </header>

//       <form name="contact" method="post">
//         <div className="relative mb-2 group text-sm font-Regular text-[#858585] items-center justify-center flex">
//           <input
//             type="email"
//             id="email"
//             placeholder="Email Address"
//             name="firstname"
//             required
//             className="block w-[350px] h-[55px]  p-3  text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
//           />
//         </div>
//         <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             name="password"
//             required
//             className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
//           />
//         </div>
//         <a
//           href="#"
//           className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
//            hover:underline"
//         >
//           Forgot Password?
//         </a>

//         <div className="flex justify-center items-center">
//           <button
//             type="submit"
//             className="text-[#FFF] bg-[#DF327B] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
//           >
//             <p className="text-center font-bold text-xl">Log in</p>
//           </button>
//         </div>

//         <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
//           Need an account?
//           <a href="#" className="text-[#942D99] hover:underline ml-1">
//             Sign up
//           </a>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// LogInModal.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
// export default LogInModal;


import Modal from "./Modal";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { logInUser } from "../../Api";

const LogInModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const onSubmit = async (values, actions) => {
    try {
      await basicSchema.validate(values, { abortEarly: false });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      // Validation successful - make API call or handle login logic here
      console.log(values);

      const res = await logInUser(JSON.stringify(values));
      console.log(res);
      if (res.status === 200) {
        // Handle successful login here
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  //console.log(errors);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Log in
      </header>

      <form onSubmit={handleSubmit} name="contact" method="post">
        {/* className= {errors.email && touched.email ? "input-error" : ""} */}
        {/* <form autoComplete="off"> */}
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} // validates the form when you click out of the input
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {errors.email && touched.email && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {errors.password && touched.password && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {errors.password}
            </p>
          )}
        </div>
        <a
          href="#"
          className="text-sm font-Regular text-[#942D99] flex items justify-end m-4
           hover:underline"
        >
          Forgot Password?
        </a>
        <div className="flex justify-center items-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="opacity-35 cursor-not-allowed text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
          >
            <p className="text-center font-bold text-xl">Log in</p>
          </button>
        </div>
        <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
          Need an account?
          <a href="#" className="text-[#942D99] hover:underline ml-1">
            Sign up
          </a>
        </div>
      </form>
    </Modal>
  );
};

LogInModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LogInModal;














import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import AppLogo from "../assets/Images/Logo.svg";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { NavBarDropdown } from "./NavBarDropdown";
import { NewsDropdown } from "./NewsDropdown";
import LogInModal from "../Component/Modal/LogInModal";
import JoinUSModal from "../Component/Modal/JoinUSModal";
import "../Style/Style.css";
import SideNav from "./SideNav";

const GeneralNav = ({ color, btnColor, bgColor, bgShadow }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  // Define prop types
  GeneralNav.propTypes = {
    color: PropTypes.string.isRequired,
    btnColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    bgShadow: PropTypes.string.isRequired,
  };

  // Define a mapping of color classes
  const txtcolorClasses = {
    white: "text-white",
    black: "text-black",
  };

  const btncolorClasses = {
    black: "border-black",
    white: "border-white",
  };

  const bgcolorClasses = {
    white: "bg-white",
    transparent: "bg-white-transparent",
    black: "bg-black",
    pink: "bg-[#FFD8FF]",
  };

  const bgShadowClasses = {
    shadow: "custom-shadow",
    whyShadow: "box-shadow",
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
    setDropdown(false); // Close the other dropdown
  };

  const handleDropdown = () => {
    setDropdown(!Dropdown);
    setShowDropdown(false); // Close the other dropdown
  };

  const toggleLoginModal = () => {
    setShowLogInModal(!showLogInModal);
    setSideNav(false); // Close SideNav when opening LoginModal
  };

  const toggleJoinModal = () => {
    setShowJoinUsModal(!showJoinUsModal);
    setSideNav(false); // Close SideNav when opening LoginModal
  };

  const toggleCloseNav = () => {
    setSideNav(false);
  };

  // Determine the appropriate class to apply
  const txColorClass = txtcolorClasses[color] || "text-black"; // Default color
  const btColorClass = btncolorClasses[btnColor] || "border-white"; // Default button color
  const bgColorClass = bgcolorClasses[bgColor] || "bg-white-transparent";
  const bgShadowClass = bgShadowClasses[bgShadow] || " ";

  return (
    <>
    <div className="pt-10">
      <nav
        className={`flex container mx-auto px-2 text-center font-Regular rounded-full max-w-6xl lg:pt-2 md:pt-2 sm:px-4 py-3 ${bgColorClass} ${bgShadowClass}`}
      >
        <div className="container md:pl-25 flex justify-between items-center m-auto">
          <a
            href="/"
            className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
          >
            <img
              src={AppLogo}
              alt="Logo"
              className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px]"
            />
          </a>
          <div
            className={`lg:flex justify-between w-full md:w-auto`}
            id="navbar-cta"
          >
            <ul className="lg:flex flex-col text-lg p-4 md:p-0 mt-4 border text-center rounded-lg md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 hidden">
              <li className="relative">
                <div
                  className={`list-none flex gap-1 items-center ${txColorClass} cursor-pointer`}
                  onClick={handleDropdown}
                >
                  Write <FaChevronDown className="text-[20px] pt-2" />
                </div>
                {Dropdown && (
                  <div className="absolute top-full left-0">
                    <NavBarDropdown />
                  </div>
                )}
              </li>
              <li
                className={`list-none inline-block  ${
                  location.pathname === "/tips"
                    ? "font-Regular"
                    : `${txColorClass}`
                }`}
              >
                <a href="/submit" className="">
                  Submit
                </a>
              </li>
              <li
                className={`list-none inline-block  ${
                  location.pathname === "/tips"
                    ? "font-Regular"
                    : `${txColorClass}`
                }`}
              >
                <a href="/read" className="">
                  Read
                </a>
              </li>
              <li
                className={`list-none inline-block  ${
                  location.pathname === "/tips"
                    ? "font-Regular"
                    : `${txColorClass}`
                }`}
              >
                <a href="/pressclub" className="">
                  Press Club
                </a>
              </li>
              <li
                className={`list-none inline-block  ${
                  location.pathname === "/tips"
                    ? ""
                    : `${txColorClass}`
                }`}
              >
                <a href="/publication" className="">
                  Publications
                </a>
              </li>
              <li className="relative">
                <div
                  className={`list-none flex gap-1 items-center ${txColorClass} cursor-pointer`}
                  onClick={handleShowDropdown}
                >
                  News <FaChevronDown className="text-[20px] pt-2" />
                </div>
                {showDropdown && (
                  <div className="absolute top-full left-0">
                    <NewsDropdown />
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className={`w-full lg:flex md:w-auto`} id="navbar-buttons">
            <ul className="lg:flex items-center py-2 font-Regular text-lg hidden">
              <button
                className={`border-[1px] ${btColorClass} ${txColorClass} px-7 p-3 mr-4 rounded-full`}
                onClick={() => setShowLogInModal(true)}
              >
                Login
              </button>
              <button
                className="bg-[#52B4AE] text-[#FFF] lg:px-9 lg:p-3 rounded-full"
                onClick={() => setShowJoinUsModal(true)}
              >
                Join Papertown
              </button>
            </ul>
          </div>

          {/*Humberg button*/}
          <FaBars
            className={`lg:hidden w-[70px] h-[30px] ${txColorClass}`}
            onClick={() => setSideNav(!sideNav)}
          />
        </div>
       </nav>
      </div>
      {sideNav && (
        <SideNav
          onLoginClick={toggleLoginModal}
          onJoinClick={toggleJoinModal}
          onCloseClick={toggleCloseNav}
        />
      )}
      {showLogInModal && (
        <LogInModal
          isVisible={showLogInModal}
          onClose={() => setShowLogInModal(false)}
        />
      )}
      {showJoinUsModal && (
        <JoinUSModal
          isVisible={showJoinUsModal}
          onClose={() => setShowJoinUsModal(false)}
        />
      )}
    </>
  );
};

export default GeneralNav;



  // const handleLogin = async () => {
  //   try {
  //     const userData = await index.Api.logInUser({ username, password });

  //     localStorage.setItem("user", JSON.stringify(userData));
  //     window.location.reload();
  //   } catch (error) {
  //     setError("Login failed. Please try again.");
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     // Call the login API using the values from state
  //     const res = await logInUser({ username, password }); // Changed to use state values

  //     // Check if the login was successful
  //     if (res.status === 200) {
  //       // Successful login
  //       // Store user data in localStorage or state management system
  //       localStorage.setItem("user", JSON.stringify(res.data)); // Assuming res.data contains user data
  //       window.location.reload(); // Reload the page
  //     } else {
  //       setError("Login failed. Please try again."); // Set error message for failed login
  //     }
  //   } catch (error) {
  //     setError("Login failed. Please try again."); // Set error message for any error during login
  //   }
  // };


  




{user ? (
    <div>
      <span>Welcome, {user.firstName}</span>
      {/* Replace the profile picture with an appropriate icon */}
      <img src="fortune" alt="fortune.svg" />
    </div>
  ) : (
    <div>
      <span>Welcome, Guest</span>
      {/* Render login or signup links */}
    </div>
  )}