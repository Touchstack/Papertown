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
    <div >
      <div className="flex justify-end items-center gap-2 ">
        {/* Search Bar */}
     { /*  <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
        </form>*/}
        <div className="relative items-center">
          <div
            className="border border-black text-black text-sm font-Medium rounded-lg p-2.5 flex cursor-pointer items-center"
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
        <div className="lg:px-6 px-4">
  <button
    className="bg-[#DF327B] inline-block text-[#FFFFFF] min-w-[150px] font-Bold lg:rounded-full rounded-full lg:w-full w-full py-2 lg:py-2"
    style={{ maxWidth: '100%' }}
    onClick={handleNewCategory}
  >
    + Add New Category 
  </button>
</div>



      </div>
      <SubmissionsCards />
    </div>
  );
}

export default SubmissionsBody;
