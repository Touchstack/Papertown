function ProfileCardLeft({ setActiveCard, activeCard }) {
  const deleteUserAndRefresh = () => {
    localStorage.removeItem("user");
    window.location.href = '/'; 
  };

  const getClassNames = (card) => {
    const baseClasses = "block px-4 py-2 mb-1 ml-[-1.5rem] mr-[-1.3rem] dark:hover:bg-gray-600 hover:font-Bold hover:border-l-2 hover:rounded-s-lg";
    const hoverClasses = "hover:bg-[#52B4AE1A] hover:border-[#52B4AE]";
    const activeClasses = "bg-[#52B4AE1A] border-[#52B4AE] border-l-2 rounded-s-lg font-Bold";

    return `${baseClasses} ${activeCard === card ? activeClasses : hoverClasses}`;
  };

  return (
    <div className="bg-white shadow-xl lg:w-[166px] px-5 py-4">
      <ul className="py-3 text-sm hover:cursor-pointer">
        <li 
          className={getClassNames('profile')}
          onClick={() => setActiveCard('profile')}
        >
          My Profile
        </li>
        <li 
          className={getClassNames('submissions')}
          onClick={() => setActiveCard('submissions')}
        >
          Submissions
        </li>
        <li 
          className={getClassNames('clubs')}
          onClick={() => setActiveCard('clubs')}
        >
          Clubs
        </li>
        <li 
          className={getClassNames('logout')}
          onClick={deleteUserAndRefresh}
        > 
          Logout
        </li>
      </ul>
    </div>
  );
}

export default ProfileCardLeft;
