import { useState } from "react";
import { motion } from "framer-motion";
import AppLogo from "../../assets/Images/Logo.svg";
import { ClipLoader } from "react-spinners";
import { submitNewsLetter } from "../../api";

const Footer = () => {
  const [hoverIcon, setHoverIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");

  const hoverOver = (icon) => {
    return setHoverIcon(icon);
  };

  const handleChange = (e) => {
    // 👇 Store the input value to local state
    setEmail(e.target.value);
  };

 
  const subscribeNewsLetter = async () => {
    const data = {
     email: email.toLowerCase()
    }

   if(email === ""){
     setErrorText(true);
     setErrorAlert("Email address is required")
     return setTimeout(() => setErrorAlert(false), 2000);
    } else {
    
    try {
      setLoading(true); 
      const res = await submitNewsLetter(data);


      if (res?.data?.status === true){
        setLoading(false)
        setSuccessText(res?.data?.message);
        setSuccessAlert(true);
        setErrorText("")
        return setTimeout(() => setSuccessAlert(false), 3000);
      } else if (res?.response?.data?.status === 400){
         setErrorAlert(true)
         setErrorText(res?.response?.data?.error)
         return setTimeout(() => setErrorAlert(false), 3000);
      } else {
        setErrorAlert(true)
        setErrorText(res?.resposne?.data?.error)
        return setTimeout(() => setErrorAlert(false), 3000);
      }

    } catch (error) {
      if (error?.data?.error) {
        setErrorAlert(true)
        setErrorText(error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message)
        return setTimeout(() => setErrorAlert(false), 3000);
      }
    } finally {
       setLoading(false)
    }
   }

}

  
  const ErrorAlert = () => {
    return (
      <motion.div
        id="alert-2"
        className="flex p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/">
          <img className="" src={AppLogo} alt="Logo.png" />
        </a>

        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">{errorText}</div>
      </motion.div>
    );
  };

  const SuccessAlert = () => {
    return (
      <motion.div
        id="alert-2"
        className="flex p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlnsXlink="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">{successText}</div>
      </motion.div>
    );
  };

  return (
    <div className="">
      <div>
        {/* bg-gradient-to-r */}
        <footer className="md:px-[50px] sm:p-6  from-purple-600 via-pink-500 to-purple-600 font-Medium">
          <div className="md:flex md:justify-center md:p-[50px] p-[20px]">
            <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 sm:gap-6">
              <div className="">
                <a href="/" className="flex justify-start items-start">
                  <img
                    src={AppLogo}
                    alt="App Logo"
                    style={{ width: 88.727, height: 80.495 }}
                  />
                </a>

                <div className="font-VarelaRegular text-[#D0D0D0] mt-6 text-[14px] md:text-sm sm:text-start">
                  Quick Links
                </div>

                <div
                  className="items-start text-xl font-SemiBold leading-normal
               absolute flex justify-start gap-[20px]  mt-3"
                >
                  <span className="text-[#FFF] text-[14px] md:text-lg font-VarelaRegular">
                    <a href="./whyweexist"> Why We Exist </a>
                  </span>

                  <span className="text-[#FFF] text-[14px] md:text-lg font-VarelaRegular">
                    FAQs
                  </span>
                  <span className="text-[#FFF] text-[14px] md:text-lg font-VarelaRegular">
                    Contact Us
                  </span>
                </div>

                <div className="font-Regular text-[#D0D0D0] w-[150px] text-sm sm:text-start mt-20">
                  Follow us on social media
                </div>
                <div className="flex md:justify-start text-gray-600 dark:text-gray-400 pt-4 pb-4 pr-8">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-white mr-4"
                    onMouseOver={() => hoverOver("whatsapp")}
                    onMouseLeave={() => hoverOver()}
                  >
                    {hoverIcon === "whatsapp" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M23.8125 6.13757C22.6665 4.97998 21.3015 4.06216 19.797 3.43764C18.2926 2.81312 16.6789 2.4944 15.05 2.50007C8.225 2.50007 2.6625 8.06257 2.6625 14.8876C2.6625 17.0751 3.2375 19.2001 4.3125 21.0751L2.5625 27.5001L9.125 25.7751C10.9375 26.7626 12.975 27.2876 15.05 27.2876C21.875 27.2876 27.4375 21.7251 27.4375 14.9001C27.4375 11.5876 26.15 8.47507 23.8125 6.13757ZM15.05 25.1876C13.2 25.1876 11.3875 24.6876 9.8 23.7501L9.425 23.5251L5.525 24.5501L6.5625 20.7501L6.3125 20.3626C5.28468 18.7213 4.73893 16.8241 4.7375 14.8876C4.7375 9.21257 9.3625 4.58757 15.0375 4.58757C17.7875 4.58757 20.375 5.66257 22.3125 7.61257C23.2719 8.56753 24.0321 9.7034 24.5492 10.9544C25.0664 12.2053 25.33 13.5465 25.325 14.9001C25.35 20.5751 20.725 25.1876 15.05 25.1876ZM20.7 17.4876C20.3875 17.3376 18.8625 16.5876 18.5875 16.4751C18.3 16.3751 18.1 16.3251 17.8875 16.6251C17.675 16.9376 17.0875 17.6376 16.9125 17.8376C16.7375 18.0501 16.55 18.0751 16.2375 17.9126C15.925 17.7626 14.925 17.4251 13.75 16.3751C12.825 15.5501 12.2125 14.5376 12.025 14.2251C11.85 13.9126 12 13.7501 12.1625 13.5876C12.3 13.4501 12.475 13.2251 12.625 13.0501C12.775 12.8751 12.8375 12.7376 12.9375 12.5376C13.0375 12.3251 12.9875 12.1501 12.9125 12.0001C12.8375 11.8501 12.2125 10.3251 11.9625 9.70007C11.7125 9.10007 11.45 9.17507 11.2625 9.16257H10.6625C10.45 9.16257 10.125 9.23757 9.8375 9.55007C9.5625 9.86257 8.7625 10.6126 8.7625 12.1376C8.7625 13.6626 9.875 15.1376 10.025 15.3376C10.175 15.5501 12.2125 18.6751 15.3125 20.0126C16.05 20.3376 16.625 20.5251 17.075 20.6626C17.8125 20.9001 18.4875 20.8626 19.025 20.7876C19.625 20.7001 20.8625 20.0376 21.1125 19.3126C21.375 18.5876 21.375 17.9751 21.2875 17.8376C21.2 17.7001 21.0125 17.6376 20.7 17.4876Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="ic:baseline-whatsapp">
                          <path
                            id="Vector"
                            d="M23.8125 6.13757C22.6665 4.97998 21.3015 4.06216 19.797 3.43764C18.2926 2.81312 16.6789 2.4944 15.05 2.50007C8.225 2.50007 2.6625 8.06257 2.6625 14.8876C2.6625 17.0751 3.2375 19.2001 4.3125 21.0751L2.5625 27.5001L9.125 25.7751C10.9375 26.7626 12.975 27.2876 15.05 27.2876C21.875 27.2876 27.4375 21.7251 27.4375 14.9001C27.4375 11.5876 26.15 8.47507 23.8125 6.13757ZM15.05 25.1876C13.2 25.1876 11.3875 24.6876 9.8 23.7501L9.425 23.5251L5.525 24.5501L6.5625 20.7501L6.3125 20.3626C5.28468 18.7213 4.73893 16.8241 4.7375 14.8876C4.7375 9.21257 9.3625 4.58757 15.0375 4.58757C17.7875 4.58757 20.375 5.66257 22.3125 7.61257C23.2719 8.56753 24.0321 9.7034 24.5492 10.9544C25.0664 12.2053 25.33 13.5465 25.325 14.9001C25.35 20.5751 20.725 25.1876 15.05 25.1876ZM20.7 17.4876C20.3875 17.3376 18.8625 16.5876 18.5875 16.4751C18.3 16.3751 18.1 16.3251 17.8875 16.6251C17.675 16.9376 17.0875 17.6376 16.9125 17.8376C16.7375 18.0501 16.55 18.0751 16.2375 17.9126C15.925 17.7626 14.925 17.4251 13.75 16.3751C12.825 15.5501 12.2125 14.5376 12.025 14.2251C11.85 13.9126 12 13.7501 12.1625 13.5876C12.3 13.4501 12.475 13.2251 12.625 13.0501C12.775 12.8751 12.8375 12.7376 12.9375 12.5376C13.0375 12.3251 12.9875 12.1501 12.9125 12.0001C12.8375 11.8501 12.2125 10.3251 11.9625 9.70007C11.7125 9.10007 11.45 9.17507 11.2625 9.16257H10.6625C10.45 9.16257 10.125 9.23757 9.8375 9.55007C9.5625 9.86257 8.7625 10.6126 8.7625 12.1376C8.7625 13.6626 9.875 15.1376 10.025 15.3376C10.175 15.5501 12.2125 18.6751 15.3125 20.0126C16.05 20.3376 16.625 20.5251 17.075 20.6626C17.8125 20.9001 18.4875 20.8626 19.025 20.7876C19.625 20.7001 20.8625 20.0376 21.1125 19.3126C21.375 18.5876 21.375 17.9751 21.2875 17.8376C21.2 17.7001 21.0125 17.6376 20.7 17.4876Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    )}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bargainmoto/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-white mr-4"
                    onMouseOver={() => hoverOver("linkedIn")}
                    onMouseLeave={() => hoverOver()}
                  >
                    {hoverIcon === "linkedIn" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1481_845)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 15C5.00018 13.0756 5.55564 11.1921 6.59974 9.57548C7.64383 7.9589 9.1322 6.67793 10.8863 5.88627C12.6403 5.0946 14.5856 4.82588 16.4885 5.11234C18.3915 5.3988 20.1715 6.22828 21.6147 7.50124C23.058 8.7742 24.1033 10.4366 24.6252 12.2889C25.1471 14.1412 25.1235 16.1048 24.5571 17.944C23.9908 19.7832 22.9057 21.4199 21.4322 22.6577C19.9587 23.8956 18.1593 24.6819 16.25 24.9225V17.5H18.75C19.0815 17.5 19.3995 17.3683 19.6339 17.1339C19.8683 16.8995 20 16.5815 20 16.25C20 15.9185 19.8683 15.6005 19.6339 15.3661C19.3995 15.1317 19.0815 15 18.75 15H16.25V12.5C16.25 12.1685 16.3817 11.8505 16.6161 11.6161C16.8505 11.3817 17.1685 11.25 17.5 11.25H18.125C18.4565 11.25 18.7745 11.1183 19.0089 10.8839C19.2433 10.6495 19.375 10.3315 19.375 10C19.375 9.66848 19.2433 9.35054 19.0089 9.11612C18.7745 8.8817 18.4565 8.75 18.125 8.75H17.5C16.5054 8.75 15.5516 9.14509 14.8483 9.84835C14.1451 10.5516 13.75 11.5054 13.75 12.5V15H11.25C10.9185 15 10.6005 15.1317 10.3661 15.3661C10.1317 15.6005 10 15.9185 10 16.25C10 16.5815 10.1317 16.8995 10.3661 17.1339C10.6005 17.3683 10.9185 17.5 11.25 17.5H13.75V24.9225C11.3334 24.6178 9.11102 23.4416 7.5 21.6147C5.88898 19.7878 5.00004 17.4358 5 15ZM15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1481_845">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1481_845)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 15C5.00018 13.0756 5.55564 11.1921 6.59974 9.57548C7.64383 7.9589 9.1322 6.67793 10.8863 5.88627C12.6403 5.0946 14.5856 4.82588 16.4885 5.11234C18.3915 5.3988 20.1715 6.22828 21.6147 7.50124C23.058 8.7742 24.1033 10.4366 24.6252 12.2889C25.1471 14.1412 25.1235 16.1048 24.5571 17.944C23.9908 19.7832 22.9057 21.4199 21.4322 22.6577C19.9587 23.8956 18.1593 24.6819 16.25 24.9225V17.5H18.75C19.0815 17.5 19.3995 17.3683 19.6339 17.1339C19.8683 16.8995 20 16.5815 20 16.25C20 15.9185 19.8683 15.6005 19.6339 15.3661C19.3995 15.1317 19.0815 15 18.75 15H16.25V12.5C16.25 12.1685 16.3817 11.8505 16.6161 11.6161C16.8505 11.3817 17.1685 11.25 17.5 11.25H18.125C18.4565 11.25 18.7745 11.1183 19.0089 10.8839C19.2433 10.6495 19.375 10.3315 19.375 10C19.375 9.66848 19.2433 9.35054 19.0089 9.11612C18.7745 8.8817 18.4565 8.75 18.125 8.75H17.5C16.5054 8.75 15.5516 9.14509 14.8483 9.84835C14.1451 10.5516 13.75 11.5054 13.75 12.5V15H11.25C10.9185 15 10.6005 15.1317 10.3661 15.3661C10.1317 15.6005 10 15.9185 10 16.25C10 16.5815 10.1317 16.8995 10.3661 17.1339C10.6005 17.3683 10.9185 17.5 11.25 17.5H13.75V24.9225C11.3334 24.6178 9.11102 23.4416 7.5 21.6147C5.88898 19.7878 5.00004 17.4358 5 15ZM15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1481_845">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </a>
                  <a
                    href="https://www.instagram.com/bargain_moto"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-white mr-4"
                    onMouseOver={() => hoverOver("instagram")}
                    onMouseLeave={() => hoverOver()}
                  >
                    {hoverIcon === "instagram" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.625 13.5082 20.0324 12.0774 18.9775 11.0225C17.9226 9.96763 16.4918 9.375 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.7469 15.9936 18.3508 16.9456 17.6482 17.6482C16.9456 18.3508 15.9936 18.7469 15 18.75ZM20.1562 3.28125H9.84375C8.10327 3.28125 6.43407 3.97265 5.20336 5.20336C3.97265 6.43407 3.28125 8.10327 3.28125 9.84375V20.1562C3.28125 21.8967 3.97265 23.5659 5.20336 24.7966C6.43407 26.0273 8.10327 26.7188 9.84375 26.7188H20.1562C21.8967 26.7188 23.5659 26.0273 24.7966 24.7966C26.0273 23.5659 26.7188 21.8967 26.7188 20.1562V9.84375C26.7188 8.10327 26.0273 6.43407 24.7966 5.20336C23.5659 3.97265 21.8967 3.28125 20.1562 3.28125ZM24.8438 20.1562C24.8438 20.7718 24.7225 21.3814 24.4869 21.9501C24.2514 22.5188 23.9061 23.0355 23.4708 23.4708C23.0355 23.9061 22.5188 24.2514 21.9501 24.4869C21.3814 24.7225 20.7718 24.8438 20.1562 24.8438H9.84375C9.22818 24.8438 8.61864 24.7225 8.04992 24.4869C7.48121 24.2514 6.96446 23.9061 6.52919 23.4708C6.09391 23.0355 5.74863 22.5188 5.51306 21.9501C5.2775 21.3814 5.15625 20.7718 5.15625 20.1562V9.84375C5.15625 8.60055 5.65011 7.40826 6.52919 6.52919C7.40826 5.65011 8.60055 5.15625 9.84375 5.15625H20.1562C20.7718 5.15625 21.3814 5.2775 21.9501 5.51306C22.5188 5.74863 23.0355 6.09391 23.4708 6.52919C23.9061 6.96446 24.2514 7.48121 24.4869 8.04992C24.7225 8.61864 24.8438 9.22818 24.8438 9.84375V20.1562ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.625 13.5082 20.0324 12.0774 18.9775 11.0225C17.9226 9.96763 16.4918 9.375 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.7469 15.9936 18.3508 16.9456 17.6482 17.6482C16.9456 18.3508 15.9936 18.7469 15 18.75ZM20.1562 3.28125H9.84375C8.10327 3.28125 6.43407 3.97265 5.20336 5.20336C3.97265 6.43407 3.28125 8.10327 3.28125 9.84375V20.1562C3.28125 21.8967 3.97265 23.5659 5.20336 24.7966C6.43407 26.0273 8.10327 26.7188 9.84375 26.7188H20.1562C21.8967 26.7188 23.5659 26.0273 24.7966 24.7966C26.0273 23.5659 26.7188 21.8967 26.7188 20.1562V9.84375C26.7188 8.10327 26.0273 6.43407 24.7966 5.20336C23.5659 3.97265 21.8967 3.28125 20.1562 3.28125ZM24.8438 20.1562C24.8438 20.7718 24.7225 21.3814 24.4869 21.9501C24.2514 22.5188 23.9061 23.0355 23.4708 23.4708C23.0355 23.9061 22.5188 24.2514 21.9501 24.4869C21.3814 24.7225 20.7718 24.8438 20.1562 24.8438H9.84375C9.22818 24.8438 8.61864 24.7225 8.04992 24.4869C7.48121 24.2514 6.96446 23.9061 6.52919 23.4708C6.09391 23.0355 5.74863 22.5188 5.51306 21.9501C5.2775 21.3814 5.15625 20.7718 5.15625 20.1562V9.84375C5.15625 8.60055 5.65011 7.40826 6.52919 6.52919C7.40826 5.65011 8.60055 5.15625 9.84375 5.15625H20.1562C20.7718 5.15625 21.3814 5.2775 21.9501 5.51306C22.5188 5.74863 23.0355 6.09391 23.4708 6.52919C23.9061 6.96446 24.2514 7.48121 24.4869 8.04992C24.7225 8.61864 24.8438 9.22818 24.8438 9.84375V20.1562ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </a>
                  <a
                    href="https://www.instagram.com/bargain_moto"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-white mr-4"
                    onMouseOver={() => hoverOver("instagram")}
                    onMouseLeave={() => hoverOver()}
                  >
                    {hoverIcon === "instagram" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 4C8.93508 4 4 8.93402 4 15C4 21.066 8.93508 26 15 26C21.0649 26 26 21.066 26 15C26 8.93402 21.0649 4 15 4ZM15 25.2673C9.33913 25.2673 4.73402 20.6612 4.73402 15C4.73402 9.33878 9.33913 4.73269 15 4.73269C20.6609 4.73269 25.266 9.33878 25.266 15C25.266 20.6612 20.6609 25.2673 15 25.2673Z"
                          fill="white"
                          stroke="white"
                        />
                        <path
                          d="M20.4355 11.2354C20.5199 11.0749 20.5895 10.9066 20.6434 10.7327C20.6683 10.652 20.6688 10.5655 20.6448 10.4845C20.6208 10.4035 20.5735 10.3319 20.5091 10.2792C20.4446 10.2264 20.3661 10.1949 20.2839 10.1889C20.2017 10.1829 20.1196 10.2027 20.0486 10.2455C19.6583 10.4835 19.2358 10.6609 18.795 10.7718C18.2597 10.2758 17.5647 10.0009 16.8437 10C16.452 10.0003 16.0644 10.0818 15.7042 10.2396C15.3439 10.3974 15.0184 10.6283 14.7472 10.9184C14.4759 11.2085 14.2645 11.5518 14.1256 11.9278C13.9867 12.3038 13.9232 12.7048 13.9389 13.1066C12.2261 12.8852 10.662 11.9953 9.57111 10.6216C9.52931 10.5696 9.4759 10.5287 9.4154 10.5023C9.35491 10.476 9.28912 10.4651 9.22363 10.4705C9.15814 10.4758 9.09488 10.4974 9.03922 10.5332C8.98356 10.5691 8.93716 10.6182 8.90394 10.6764C8.65415 11.1165 8.51838 11.615 8.50958 12.1244C8.50078 12.6337 8.61924 13.1369 8.85367 13.5859C8.79618 13.5958 8.74094 13.6165 8.69069 13.6469C8.62911 13.6872 8.57841 13.7428 8.54327 13.8085C8.50813 13.8742 8.48968 13.948 8.48962 14.023C8.48962 14.9104 8.87424 15.7252 9.49419 16.2788L9.46753 16.3062C9.42073 16.3605 9.38853 16.4265 9.3741 16.4975C9.35968 16.5685 9.36353 16.6422 9.38528 16.7112C9.51455 17.1252 9.7304 17.5053 10.0177 17.8247C10.305 18.1441 10.6569 18.3952 11.0486 18.5604C10.2441 18.9634 9.34366 19.1205 8.45459 19.0132C8.3632 19.0036 8.2713 19.0254 8.19329 19.0752C8.11529 19.125 8.05558 19.2 8.02352 19.2884C7.99273 19.3774 7.99216 19.4745 8.02188 19.5639C8.0516 19.6534 8.10988 19.7299 8.18726 19.781C9.39595 20.5774 10.8021 21.0005 12.2383 21C16.945 21 19.7584 17.0748 19.7584 13.2801L19.7576 13.1519C20.2138 12.7863 20.61 12.3481 20.9313 11.8539C20.9799 11.7792 21.0038 11.6904 20.9995 11.6007C20.9952 11.5109 20.9628 11.425 20.9072 11.3556C20.8515 11.2862 20.7756 11.237 20.6907 11.2154C20.6057 11.1938 20.5162 11.2008 20.4355 11.2354ZM19.1065 12.6077C19.0512 12.6485 19.0068 12.7029 18.9772 12.7658C18.9477 12.8288 18.934 12.8984 18.9374 12.9682C18.9419 13.0714 18.9442 13.1761 18.9442 13.2794C18.9442 16.6635 16.4363 20.1641 12.239 20.1641C11.4904 20.1645 10.7471 20.0355 10.0403 19.7826C10.8869 19.616 11.6822 19.2433 12.3594 18.6957C12.4253 18.6423 12.4735 18.5694 12.4975 18.4868C12.5215 18.4042 12.5201 18.316 12.4934 18.2343C12.4668 18.1526 12.4161 18.0813 12.3485 18.0302C12.2809 17.9792 12.1996 17.9508 12.1156 17.949C11.7873 17.9425 11.4649 17.8569 11.1747 17.6991C10.8844 17.5413 10.6344 17.3156 10.4447 17.0404C10.6374 17.0271 10.8262 16.9942 11.0098 16.9434C11.0986 16.919 11.1768 16.8644 11.2315 16.7885C11.2862 16.7127 11.3143 16.62 11.3111 16.5256C11.3079 16.4313 11.2737 16.3408 11.214 16.269C11.1543 16.1972 11.0726 16.1483 10.9824 16.1302C10.6115 16.0528 10.2681 15.8732 9.98891 15.6109C9.70974 15.3485 9.5053 15.0131 9.39746 14.6407C9.60005 14.6931 9.80797 14.7236 10.0159 14.7306C10.1949 14.7298 10.3609 14.6172 10.4165 14.4405C10.4721 14.2638 10.4066 14.0691 10.255 13.9659C9.89667 13.7208 9.62075 13.368 9.46495 12.9559C9.30914 12.5438 9.28105 12.0923 9.38451 11.6631C10.7075 13.0568 12.4938 13.8866 14.3868 13.987C14.5208 13.9878 14.6381 13.9385 14.7196 13.8376C14.8011 13.7368 14.8323 13.6031 14.8034 13.4748C14.6992 13.0143 14.7458 12.5313 14.9359 12.1007C15.1261 11.6701 15.4491 11.3158 15.8552 11.0927C16.2612 10.8696 16.7275 10.7901 17.182 10.8665C17.6364 10.9429 18.0537 11.1709 18.3692 11.5154C18.4165 11.5671 18.4758 11.6057 18.5417 11.6275C18.6075 11.6492 18.6776 11.6534 18.7455 11.6397C18.8711 11.6139 18.9953 11.5842 19.1179 11.5498C19.0626 11.5922 19.0051 11.6317 18.9458 11.6678C18.8668 11.7175 18.8066 11.7933 18.7752 11.8828C18.7439 11.9722 18.7431 12.07 18.7731 12.16C18.803 12.2499 18.862 12.3267 18.9402 12.3777C19.0184 12.4287 19.1111 12.4508 19.2032 12.4404L19.3418 12.4224C19.2655 12.4869 19.187 12.5487 19.1065 12.6077Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 4C8.93508 4 4 8.93402 4 15C4 21.066 8.93508 26 15 26C21.0649 26 26 21.066 26 15C26 8.93402 21.0649 4 15 4ZM15 25.2673C9.33913 25.2673 4.73402 20.6612 4.73402 15C4.73402 9.33878 9.33913 4.73269 15 4.73269C20.6609 4.73269 25.266 9.33878 25.266 15C25.266 20.6612 20.6609 25.2673 15 25.2673Z"
                          fill="white"
                          stroke="white"
                        />
                        <path
                          d="M20.4355 11.2354C20.5199 11.0749 20.5895 10.9066 20.6434 10.7327C20.6683 10.652 20.6688 10.5655 20.6448 10.4845C20.6208 10.4035 20.5735 10.3319 20.5091 10.2792C20.4446 10.2264 20.3661 10.1949 20.2839 10.1889C20.2017 10.1829 20.1196 10.2027 20.0486 10.2455C19.6583 10.4835 19.2358 10.6609 18.795 10.7718C18.2597 10.2758 17.5647 10.0009 16.8437 10C16.452 10.0003 16.0644 10.0818 15.7042 10.2396C15.3439 10.3974 15.0184 10.6283 14.7472 10.9184C14.4759 11.2085 14.2645 11.5518 14.1256 11.9278C13.9867 12.3038 13.9232 12.7048 13.9389 13.1066C12.2261 12.8852 10.662 11.9953 9.57111 10.6216C9.52931 10.5696 9.4759 10.5287 9.4154 10.5023C9.35491 10.476 9.28912 10.4651 9.22363 10.4705C9.15814 10.4758 9.09488 10.4974 9.03922 10.5332C8.98356 10.5691 8.93716 10.6182 8.90394 10.6764C8.65415 11.1165 8.51838 11.615 8.50958 12.1244C8.50078 12.6337 8.61924 13.1369 8.85367 13.5859C8.79618 13.5958 8.74094 13.6165 8.69069 13.6469C8.62911 13.6872 8.57841 13.7428 8.54327 13.8085C8.50813 13.8742 8.48968 13.948 8.48962 14.023C8.48962 14.9104 8.87424 15.7252 9.49419 16.2788L9.46753 16.3062C9.42073 16.3605 9.38853 16.4265 9.3741 16.4975C9.35968 16.5685 9.36353 16.6422 9.38528 16.7112C9.51455 17.1252 9.7304 17.5053 10.0177 17.8247C10.305 18.1441 10.6569 18.3952 11.0486 18.5604C10.2441 18.9634 9.34366 19.1205 8.45459 19.0132C8.3632 19.0036 8.2713 19.0254 8.19329 19.0752C8.11529 19.125 8.05558 19.2 8.02352 19.2884C7.99273 19.3774 7.99216 19.4745 8.02188 19.5639C8.0516 19.6534 8.10988 19.7299 8.18726 19.781C9.39595 20.5774 10.8021 21.0005 12.2383 21C16.945 21 19.7584 17.0748 19.7584 13.2801L19.7576 13.1519C20.2138 12.7863 20.61 12.3481 20.9313 11.8539C20.9799 11.7792 21.0038 11.6904 20.9995 11.6007C20.9952 11.5109 20.9628 11.425 20.9072 11.3556C20.8515 11.2862 20.7756 11.237 20.6907 11.2154C20.6057 11.1938 20.5162 11.2008 20.4355 11.2354ZM19.1065 12.6077C19.0512 12.6485 19.0068 12.7029 18.9772 12.7658C18.9477 12.8288 18.934 12.8984 18.9374 12.9682C18.9419 13.0714 18.9442 13.1761 18.9442 13.2794C18.9442 16.6635 16.4363 20.1641 12.239 20.1641C11.4904 20.1645 10.7471 20.0355 10.0403 19.7826C10.8869 19.616 11.6822 19.2433 12.3594 18.6957C12.4253 18.6423 12.4735 18.5694 12.4975 18.4868C12.5215 18.4042 12.5201 18.316 12.4934 18.2343C12.4668 18.1526 12.4161 18.0813 12.3485 18.0302C12.2809 17.9792 12.1996 17.9508 12.1156 17.949C11.7873 17.9425 11.4649 17.8569 11.1747 17.6991C10.8844 17.5413 10.6344 17.3156 10.4447 17.0404C10.6374 17.0271 10.8262 16.9942 11.0098 16.9434C11.0986 16.919 11.1768 16.8644 11.2315 16.7885C11.2862 16.7127 11.3143 16.62 11.3111 16.5256C11.3079 16.4313 11.2737 16.3408 11.214 16.269C11.1543 16.1972 11.0726 16.1483 10.9824 16.1302C10.6115 16.0528 10.2681 15.8732 9.98891 15.6109C9.70974 15.3485 9.5053 15.0131 9.39746 14.6407C9.60005 14.6931 9.80797 14.7236 10.0159 14.7306C10.1949 14.7298 10.3609 14.6172 10.4165 14.4405C10.4721 14.2638 10.4066 14.0691 10.255 13.9659C9.89667 13.7208 9.62075 13.368 9.46495 12.9559C9.30914 12.5438 9.28105 12.0923 9.38451 11.6631C10.7075 13.0568 12.4938 13.8866 14.3868 13.987C14.5208 13.9878 14.6381 13.9385 14.7196 13.8376C14.8011 13.7368 14.8323 13.6031 14.8034 13.4748C14.6992 13.0143 14.7458 12.5313 14.9359 12.1007C15.1261 11.6701 15.4491 11.3158 15.8552 11.0927C16.2612 10.8696 16.7275 10.7901 17.182 10.8665C17.6364 10.9429 18.0537 11.1709 18.3692 11.5154C18.4165 11.5671 18.4758 11.6057 18.5417 11.6275C18.6075 11.6492 18.6776 11.6534 18.7455 11.6397C18.8711 11.6139 18.9953 11.5842 19.1179 11.5498C19.0626 11.5922 19.0051 11.6317 18.9458 11.6678C18.8668 11.7175 18.8066 11.7933 18.7752 11.8828C18.7439 11.9722 18.7431 12.07 18.7731 12.16C18.803 12.2499 18.862 12.3267 18.9402 12.3777C19.0184 12.4287 19.1111 12.4508 19.2032 12.4404L19.3418 12.4224C19.2655 12.4869 19.187 12.5487 19.1065 12.6077Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 p-0 py-0 text-xl  text-[18px] font-VarelaRegular text-[#FFFFFF]">
                Receive weekly writing prompts when you subscribe to our
                newsletter
              </h2>
              <ul className="text-[#CACACA]">
                <li>
                  <form name="subscribe" method="post">
                    {loading ? null : errorAlert ? (
                      <ErrorAlert />
                    ) : successAlert ? (
                      <SuccessAlert />
                    ) : null}
                    <input
                      type="text"
                      id="large-input"
                      placeholder="Email Address"
                      name="subscriptionemail"
                      required

                      className="block w-[300px] outline-none h-14 p-4 placeholder-white text-white rounded-full border border-whit  mb-4  bg-[#FFFAF5] font-SemiBold  sm:text-md   bg-opacity-20 border-opacity-100  "
                      //   focus:ring-blue-500 focus:border-blue-500


                     
                      onChange={handleChange}
                      value={email}
                    />

                    
                      <button
                        type="button"
                        onClick={subscribeNewsLetter}
                        className="font-VarelaRegular text-[#FFFFFF] bg-[#52B4AE] block w-[300px] h-14 p-4 hover:bg-[#3a8783]  rounded-full text-xl px-5 py-3 "
                      >
                        {loading ? (
                            <ClipLoader color={"#ffffff"} loading={loading} size={25} />
                          ) : (
                            "Subscribe"
                          )}
                      </button>
                  
                  </form>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex px-[20px] pb-[20px] sm:flex sm:items-center sm:justify-between justify-between">
            <div className="flex lg:w-2/6 md:w-3/6 sm:w-auto w-auto justify-around">
              <div className="text-sm sm:text-center text-[#D0D0D0] pr-2">
                <a href="/privacypolicy" className="hover:underline">
                  Copyright Papertown 2022
                </a>
              </div>
              <div className="text-sm sm:text-center text-[#D0D0D0] pr-2">
                <a href="/termsofuse" className="hover:underline">
                  Terms of use
                </a>
              </div>

              <div className="text-sm sm:text-center text-[#D0D0D0]">
                <a href="/privacypolicy" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};


export default Footer;
