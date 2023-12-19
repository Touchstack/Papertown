import Circle from '../../Component/SubmitPage/SubmitBg'
import GeneralNav from '../../Navbar/GeneralNav'
import DetailsContent from './DetailsContent'
import Footer from '../FooterPage/Footer'
 
const EventsDetails = () => {
  return (
    
    <div className=''>
      
      {/* Navbar section */}
    <GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
    {/* Page content  */}
    <DetailsContent/>
    {/* Footer */}
    <div className="bg-[#B44DB8] mt-20 w-screen">
    <Footer />
    </div>
    </div>
  )
}
 
export default EventsDetails