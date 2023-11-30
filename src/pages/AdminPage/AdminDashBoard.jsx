import DBLeftSection from "./DBLeftSection/DBLeftSection";
import DBRightSection from "./DBRightSection/DBRightSection";


const AdminDashBoard = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex bg-gradient-to-b from-[#e7d2de] to-[#f7f4d4]'>
        <DBLeftSection />
        <DBRightSection />  
    </div>

  )
}

export default AdminDashBoard