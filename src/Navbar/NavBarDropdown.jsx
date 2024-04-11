export const NavBarDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 absolute text-left mt-5 bg-white-transparent shadow-custom backdrop-blur-custom  divide-y divide-gray-100 rounded-[20px] lg:w-[200px] md:w-60 sm:w-80 w-90 drop-shadow-lg"
    >
      <ul
        className="p-2  text-gray-900 font-VarelaRegular"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <a
            href="/lessons&notes"
            className="block px-2 text-[20px]  py-3 hover:bg-gray-100 rounded-xl"
          >
            Lessons & Notes
          </a>
        </li>

        <li>
          <a
            href="/prompt"
            className="block px-2 py-3 text-[20px] hover:bg-gray-100 rounded-xl"
          >
            Prompts
          </a>
        </li>
      </ul>
    </div>
  );
};
