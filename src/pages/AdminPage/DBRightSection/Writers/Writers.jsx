import WritersHeader from "./WritersHeader"
import WritersBody from "./WritersBody"
import WritersSlider from "./WritersSlider"

const Writers = () => {
  return (
    <div className="mt-2 bg-[#FFFFFF] rounded-[25px]">
    <WritersHeader />
    <div>
      
   <WritersBody/>
   <WritersSlider/> 
    </div>
  </div>
  )
}

export default Writers