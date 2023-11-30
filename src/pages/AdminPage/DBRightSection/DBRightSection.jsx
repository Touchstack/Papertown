import Dashboard from './DashBoard/DashBoard'
import { Routes, Route } from 'react-router-dom'



const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 pr-5 flex-1 h-full'>
       {/*header*/}
      <div className='flex flex-col flex-1 overflow-y-scroll scrollbar-none'> 
         <Routes>
           <Route path="/dashboard" element={<Dashboard />} />
           {/*
            <Route path="/Writers" element={} />
            <Route path="/Clubs" element={} />
            <Route path="/Submission" element={} />
            <Route path="/Team" element={} />
            <Route path="/CSM" element={} /> 
            */}
         </Routes>
      </div>
    </div>
  )
}

export default DBRightSection
