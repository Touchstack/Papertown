import Dashboard from "./DashBoard/DashBoard";
import Team from "../Team/Team";
import { Routes, Route } from "react-router-dom";

import Writers from "../DBRightSection/Writers/Writers";


// import NewMember from "../Team/NewMember";


const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/writers" element={<Writers />} />
          {/*
            <Route path="/writers" element={} />
            <Route path="/clubs" element={} />
            <Route path="/submission" element={} />           
            <Route path="/cms" element={} /> 
            */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
