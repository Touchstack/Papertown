export const NewsDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 absolute text-left mt-3 bg-purple-700 bg-opacity-30 divide-y divide-gray-100 rounded-[20px] lg:w-60 md:w-60 sm:w-80 w-80 drop-shadow-lg"
    >
      <ul
        className="p-1 text-xl text-gray-900"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <a
            href="/tips"
            className="block px-2 py-3 hover:bg-gray-100 rounded-xl"
          >
            News
          </a>
        </li>

        <li>
          <a
            href="/tips"
            className="block px-2 py-3 text-xl hover:bg-gray-100 rounded-xl"
          >
            Events
          </a>
        </li>
      </ul>
    </div>
  );
};
