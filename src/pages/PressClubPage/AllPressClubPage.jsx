import GeneralNav from "@/Navbar/GeneralNav"
import { pressClubs } from "../../../ConstantData";
import Footer from "../FooterPage/Footer";
import Paginate from "./components/Paginate";



const AllPressClubPage = () => {

    const handleNavigation = () => {
        window.location.href = '/pressclub/details';
      };

  return (
    <div>
      <GeneralNav 
        bgColor="transparent" 
        bgShadow="shadow" 
        btnColor="black" 
    />

    <div className="md:p-20 p-10 ">
        <h1 className="font-Bold text-3xl md:text-6xl pb-6">Press Clubs</h1>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 font-Bold sm:grid-cols-1 grid-cols-1">
     {pressClubs.map((data, index) => (
          <div key={index} onClick={handleNavigation} >
            <img src={data?.mainIMG} />
            <p className="text-[#000] lg:text-xl text-lg my-4">
               {data?.title}
            </p>
            <div className="mb-8 text-sm font-SemiBold text-white md:text-sm lg:text-lg">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={data?.childIMG} alt="" />
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={data?.childIMG} alt="" />
                <img style={{ height: "auto" }} className="h-[50px] w-[50px] rounded-full" src={data?.childIMG} alt="" />
                <span className="inline-flex text-[#393939] text-lg m-3 pl-7">
                  + {data?.numMembers} members
                </span>
              </div>
            </div>
        </div>
      ))}
    </div>
    </div>

    <Paginate/>

    <div className="bg-[#B44DB8]">
        <Footer />
    </div>
 </div>
  )
}

export default AllPressClubPage