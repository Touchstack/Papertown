import { FaCross } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/nav');
  };

  return (
    <div className="bg-[#9650fb] h-screen w-screen fixed top-0 left-0">
      <div className="flex items-center justify-center h-full">
        <div onClick={handleClick}>
          <FaCross />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
