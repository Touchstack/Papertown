import Dashboard from "./DashBoard/DashBoard";
import Team from "../Team/Team";
import Clubs from "../Clubs/Clubs";
import { Routes, Route } from "react-router-dom";

const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Clubs" element={<Clubs />} />
          {/*
            <Route path="/Writers" element={} />
            
            <Route path="/Submission" element={} />
           
            <Route path="/CSM" element={} /> 
            */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
