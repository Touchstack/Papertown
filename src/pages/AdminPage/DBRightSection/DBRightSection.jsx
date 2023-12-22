import Dashboard from "./DashBoard/DashBoard";
import NewMember from "./Team/NewMember";

// import Team from "./Team/Team";
import { Routes, Route } from "react-router-dom";
// import Profile from "./Team/Profile/Profile";
// import NewMember from "";

const DBRightSection = () => {
  return (
    <div className="py-12 flex-1 m-2">
      {/*header*/}
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<NewMember />} />

          {/*
            <Route path="/Writers" element={} />
            <Route path="/Clubs" element={} />
            <Route path="/Submission" element={} />
           
            <Route path="/CSM" element={} /> 
            */}
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
