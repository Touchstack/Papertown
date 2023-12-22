import { useState } from "react";
import MemberPage from "./MemberPage";
import Roles from "./Roles";

function Members() {
  const tabs = ["members", "roles"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  return (
    <div className="font-medium text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px lg:ml-10 ml-2 lg:mt-0 mt-5">
        <li className="me-2">
          <a
            href="#"
            className={`inline-block p-4 text-[#B44DB8] font-Bold text-[20px] border-b-2 border-[#B44DB8] rounded-t-lg ${
              activeTab === "members" ? "active dark:borde" : ""
            }`}
            onClick={() => handleTabClick("members")}
          >
            Members
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className={`inline-block p-4 font-Bold text-[20px] border-b-2 border-transparent rounded-t-lg ${
              activeTab === "roles"
                ? "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                : ""
            }`}
            onClick={() => handleTabClick("roles")}
          >
            Roles
          </a>
        </li>
      </ul>

      {/* Render content based on the active tab */}
      {activeTab === "members" && (
        <div>
          <MemberPage />
        </div>
      )}
      {activeTab === "roles" && (
        <div>
          <Roles />
        </div>
      )}
    </div>
  );
}

export default Members;
