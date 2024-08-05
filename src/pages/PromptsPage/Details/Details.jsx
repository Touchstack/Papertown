import PromptsDetailsV2 from './PromptsDetailsV2'
import GeneralNav from '@/Navbar/GeneralNav'

import Footer from '../../FooterPage/Footer'

const Details = () => {
  return (
    <div>
       <GeneralNav
            bgColor="transparent"
            bgShadow="shadow"
            btnColor="black"
          />
      <PromptsDetailsV2/>

        <div className="bg-[#B44DB8]">
        <Footer/>
        </div>
    </div>
  )
}

export default Details