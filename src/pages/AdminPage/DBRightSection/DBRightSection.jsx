import Dashboard from "./DashBoard/DashBoard";
import Team from "../Team/Team";
import CsmPage from "./CMS/CmsPage";
import { Routes, Route } from "react-router-dom";
// import NewMember from "../Team/NewMember";


const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/cms" element={<CsmPage />} /> 
          {/*
            <Route path="/writers" element={} />
            <Route path="/clubs" element={} />
            <Route path="/submission" element={} />   
            */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
