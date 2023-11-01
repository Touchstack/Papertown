export const NavBarDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 absolute text-left mt-3 bg-white divide-y divide-gray-100 rounded-[20px] lg:w-60 md:w-60 sm:w-80 w-80 drop-shadow-lg"
    >
      <ul
        className="p-5 text-xl text-gray-900"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <a href="/aboutus" className="block px-2 py-3 hover:bg-gray-100">
            Tips
          </a>
        </li>

        <li>
          <a
            href="/contactus"
            className="block px-2 py-3 text-xl hover:bg-gray-100"
          >
            Prompts
          </a>
        </li>
      </ul>
    </div>
  );
};
