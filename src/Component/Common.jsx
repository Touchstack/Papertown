import PropTypes from "prop-types";
import backGround from "../assets/Images/AdminBg.png"
const Common = ({ children }) => {
  return (
    <div className="relative w-full  h-[100vh]">
      <img
        src={backGround}
        // layout="fill"
        objectFit=""
        width={2000}
        height={2000}
        quality={100}
        alt="Background"
        priority
        className="  w-full  hidden md:flex "
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center py-5 px-4 ">
        {children}
      </div>
    </div>
  );
};

Common.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Common;
