import Circle from '../../Component/Circle'
import GeneralNav from '../../Navbar/GeneralNav'
import DetailsContent from './DetailsContent'
import Footer from '../FooterPage/Footer'

const EventsDetails = () => {
  return (
    <div className='min-h-screen'>
      <Circle />
      {/* Navbar section */}
<GeneralNav bgColor="transparent" bgShadow="shadow" btnColor="black" />
{/* Page content  */}
<DetailsContent/>
{/* Footer */}
<div className="bg-[#B44DB8] mt-20 py-15 w-screen">
<Footer />
</div>
    </div>
  )
}

export default EventsDetails