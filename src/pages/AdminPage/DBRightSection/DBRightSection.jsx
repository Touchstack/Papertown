import Dashboard from "./DashBoard/DashBoard";
import Team from "./Team/Team";
import CsmPage from "./CMS/CmsPage";
import { Routes, Route } from "react-router-dom";
import Writers from "../DBRightSection/Writers/Writers";
import Clubs from "./Clubs/Clubs";
import NewMember from "./Team/NewMember";
import Submissions from "./Submissions/Submissions";
import AddRole from "./Team/Roles/AddRole";
import PermissionsRole from "./Team/Roles/PermissionsRole";


const DBRightSection = () => {
  return (
    <div className="py-10 sm:px-3 md:px-5 lg:px-8 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cms" element={<CsmPage />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/team/new-member" element={<NewMember />} />
          <Route path="/team/add-role" element={<AddRole />} />
          <Route path="/team/role-permissions" element={<PermissionsRole />} />

          <Route path="/clubs" element={<Clubs />} />
          <Route path="/submissions" element={<Submissions />} /> 
            

          {/* 
                      
            <Route path="/cms" element={} /> 
          */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
