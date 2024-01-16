import Dashboard from "./DashBoard/DashBoard";
import Team from "./Team/Team"
import CsmPage from "./CMS/CmsPage";
import { Routes, Route } from "react-router-dom";
import Writers from "../DBRightSection/Writers/Writers";
import Clubs from "./Clubs/Clubs";
import NewMember from "./Team/NewMember";
import Submissions from "./Submissions/Submissions";
import NewSubmission from "./Submissions/Components/NewSubmission";
import NewWriter from "./Writers/NewWriter";


const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cms" element={<CsmPage />} />        
          <Route path="/writers" element={<Writers />} />
          <Route path="/writers/NewWriter" element={<NewWriter/>} />
          <Route path="/team/NewMember" element={<NewMember />} />
          <Route path="/submissions/NewSubmission" element={<NewSubmission/>} />
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
