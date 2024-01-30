import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import SubmissionsCards from "./SubmissionsCards";

function SubmissionsBody() {
  const navigate = useNavigate();
  const [isFilterOpen, setFilterOpen] = useState(false);

  const handleNewCategory = () => {
    navigate("/admin/submissions/NewSubmission");
  };

  const handleFilterClick = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between lg:px-10 px:6 gap-5">
        {/* Search Bar */}
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
        </form>
        <div className="relative ml-[74%]">
          <div
            className="border border-black text-black text-sm font-medium rounded-lg p-2.5 cursor-pointer flex items-center"
            onClick={handleFilterClick}
          >
            <div className="inline-block mr-1">
              <PiSlidersHorizontalThin />
            </div>
            <p className="inline-block">Filter</p>
          </div>
          {isFilterOpen && (
            <select className="absolute top-full left-0 mt-1 bg-white border border-black rounded-lg p-2">
              <option value="dateAdded">Date added</option>
              <option value="mostSubmissions">Most submissions</option>
              <option value="latestUpdates">Latest updates</option>
              <option value="alphabeticalOrder">Alphabetical order</option>
            </select>
          )}
        </div>
        {/* Button */}
        <button
          className="bg-[#DF327B] lg:inline-block hidden text-[#FFFFFF] font-Bold lg:rounded-full rounded-2xl lg:w-[185px] w-[140px] py-2"
          onClick={handleNewCategory}
        >
          + Add New Category
        </button>
      </div>
      <SubmissionsCards />
    </div>
  );
}

export default SubmissionsBody;
