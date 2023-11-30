import { Header, LeftSection, RightSection} from "./components"

const DashBoard = () => {
  return (
    <div className="mt-2 bg-[#F6F6F6] h-[977px] rounded-[25px] items-center">
      <Header />
      <div className="flex flex-row">
      <LeftSection />
      <RightSection />
      </div>
    </div>
  )
}

export default DashBoard
