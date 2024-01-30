import WritersHeader from "./WritersHeader"
import WritersBody from "./WritersBody"
import WritersSlider from "./WritersSlider"

const Writers = () => {
  return (
    <div className="mt-2 min-h-screen bg-[#FFFFFF] h-full rounded-[25px]">
    <WritersHeader />
    <div>
    <WritersBody/>
    <WritersSlider/>
    </div>
  </div>
  )
}

export default Writers