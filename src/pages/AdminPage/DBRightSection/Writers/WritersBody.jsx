import Profile from "../../../../assets/Images/Profile.png"
//import WritersSlider from "./WritersSlider";

const WritersBody = () => {
  
  const handleClick = () => {
    // Navigate to another page
    window.location.href = 'writers/Profile';
  }

  return (
      <div>
        <div className="justify center">
          <div className="w-full h-screen flex items-center justify-center mt-10 ">
            <table className="table-auto lg:w-11/12 md:w-8/12 w-6/12 ">
              <thead>
                {/*Column Headings*/}
                <tr className="border-b">
                  <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                    Name
                  </th>
                  <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                    Email
                  </th>
                  <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                    Contact
                  </th>
                  <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                    Age
                  </th>
                  <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                   Grade
                  </th>
                </tr>
              </thead>

              {/*Headings end*/}
              <tbody>
                <tr className="bg-[#F9F9FB] border-gray-300 rounded-md" onClick={handleClick}>
                  <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr className="">
                  <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                  
                </tr>
                {/*NewRow*/}
                <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr>
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr>
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
                <tr>
                <td className="font-Medium lg:px-14 px-8 py-5">
                    <img src={Profile} alt="" className="w-[51px] h-[51px] inline-block align-middle mr-2"/> Fortune Adeleke
                    </td>
                  <td className="font-Medium px-14 py-5">
                    fortune.adeleke@gmail.com
                  </td>
                  <td className="font-Medium px-14 py-5">0200 234 567</td>
                  <td className="font-Medium px-14 py-5">9</td>
                  <td className="font-Medium px-14 py-5">Grade 6</td>
                </tr>
                {/*NewRow*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };


export default WritersBody