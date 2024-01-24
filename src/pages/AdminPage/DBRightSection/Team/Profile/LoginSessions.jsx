function LoginSessions() {
  return (
    <div>
      <div className="lg:ml-20 ml-5 lg:mt-20 mt-10 ">
        <h6 className="text-[#000000] text-2xl font-Bold">Login Sessions</h6>
        <p>Places where user is logged into Papertown</p>
        <div className="hidden lg:inline-block lg:flex mt-5">
          <table className="">
            <thead>
              <tr>
                <th className="font-Medium text-[#9A9A9A] text-start px-20 py-2 whitespace-nowrap">
                  Location
                </th>
                <th className="font-Medium text-[#9A9A9A] text-start px-20 py-2  whitespace-nowrap">
                  Device
                </th>
                <th className="font-Medium text-[#9A9A9A] text-start px-20 py-2  whitespace-nowrap">
                  IP Address
                </th>
                <th className="font-Medium text-[#9A9A9A] text-start px-20 py-2 whitespace-nowrap">
                  Time
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <hr className="text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
        <div className="text-left">
          {/* LG start  */}
          <table className="hidden lg:inline-block table-auto mt-10 w-full -mx-10">
            <tbody>
              <div>
                {/* tb1 start  */}
                <tr>
                  <td className="border-b  whitespace-nowrap lg:px-20 px-2 lg:py-2">
                    Koforidua
                  </td>
                  <td className="border-b  whitespace-nowrap lg:px-20 px-2 lg:py-2">
                    Safari - Mac OS
                  </td>
                  <td className="border-b  whitespace-nowrap lg:px-20 px-2 lg:py-2">
                    154.160.21.106
                  </td>
                  <td className="border-b  whitespace-nowrap lg:px-16 px-2 lg:py-2">
                    May 13, 2021 12:23 AM
                  </td>
                </tr>

                {/* tb1 end  */}
              </div>

              <div>
                {/* tb1 start  */}
                <tr>
                  <td className="border-b lg:px-20  py-2">Accra</td>
                  <td className="border-b lg:px-24  py-2">Safari - Mac OS</td>
                  <td className="border-b lg:px-20  py-2">154.160.21.106</td>
                  <td className="border-b lg:px-20  py-2">
                    May 13, 2021 12:23 AM
                  </td>
                </tr>
                {/* tb1 end  */}
              </div>
              <div>
                {/* tb1 start  */}
                <tr>
                  <td className="border-b lg:px-20  py-2">Lagos</td>
                  <td className="border-b lg:px-20  py-2">Safari - Mac OS</td>
                  <td className="border-b lg:px-20  py-2">154.160.21.106</td>
                  <td className="border-b lg:px-20  py-2">
                    May 13, 2021 12:23 AM
                  </td>
                </tr>
                {/* tb1 end  */}
              </div>
              <div>
                {/* tb1 start  */}
                <tr>
                  <td className="border-b lg:px-20  py-2">Benin City</td>
                  <td className="border-b lg:px-20  py-2">Safari - Mac OS</td>
                  <td className="border-b lg:px-20  py-2">154.160.21.106</td>
                  <td className="border-b lg:px-20  py-2">
                    May 13, 2021 12:23 AM
                  </td>
                </tr>
                {/* tb1 end  */}
              </div>
              <div>
                {/* tb1 start  */}
                <tr>
                  <td className="border-b lg:px-20  py-2">Lome</td>
                  <td className="border-b lg:px-20  py-2">Safari - Mac OS</td>
                  <td className="border-b lg:px-20  py-2">154.160.21.106</td>
                  <td className="border-b lg:px-20  py-2">
                    May 13, 2021 12:23 AM
                  </td>
                </tr>
                {/* tb1 end  */}
              </div>
            </tbody>
          </table>
          {/* LG end */}
          {/* SM start  */}
          <div className="flex gap-20 mt-5 ml-3 lg:hidden inline-block">
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Location
              </span>
              <p className="text-lg">Koforidua</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Device
              </span>
              <p className="text-lg">Safari - Mac OS</p>
            </div>
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                IP address
              </span>
              <p>154.160.21.106</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Time
              </span>
              <p>May 13, 2021 12:23 AM</p>
            </div>
          </div>
          <hr className="lg:hidden inline-block text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
          {/* SM end  */}

          {/* SM start  */}
          <div className="flex gap-20 mt-5 ml-3 lg:hidden inline-block">
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Location
              </span>
              <p className="text-lg">Accra</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Device
              </span>
              <p className="text-lg">Safari - Mac OS</p>
            </div>
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                IP address
              </span>
              <p>154.160.21.106</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Time
              </span>
              <p>May 13, 2021 12:23 AM</p>
            </div>
          </div>
          <hr className="lg:hidden inline-block text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
          {/* SM end  */}
          {/* SM start  */}
          <div className="flex gap-20 mt-5 ml-3 lg:hidden inline-block">
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Location
              </span>
              <p className="text-lg">Lagos</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Device
              </span>
              <p className="text-lg">Safari - Mac OS</p>
            </div>
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                IP address
              </span>
              <p>154.160.21.106</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Time
              </span>
              <p>May 13, 2021 12:23 AM</p>
            </div>
          </div>
          <hr className="lg:hidden inline-block text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
          {/* SM end  */}
          {/* SM start  */}
          <div className="flex gap-20 mt-5 ml-3 lg:hidden inline-block">
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Location
              </span>
              <p className="text-lg">Benin City</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Device
              </span>
              <p className="text-lg">Safari - Mac OS</p>
            </div>
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                IP address
              </span>
              <p>154.160.21.106</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Time
              </span>
              <p>May 13, 2021 12:23 AM</p>
            </div>
          </div>
          <hr className="lg:hidden inline-block text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
          {/* SM end  */}

          {/* SM start  */}
          <div className="flex gap-20 mt-5 ml-3 lg:hidden inline-block">
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Location
              </span>
              <p className="text-lg">Lome</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Device
              </span>
              <p className="text-lg">Safari - Mac OS</p>
            </div>
            <div>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                IP address
              </span>
              <p>154.160.21.106</p>
              <span className="mb-5 font-Bold text-[#8B8B8B] text-sm">
                Time
              </span>
              <p>May 13, 2021 12:23 AM</p>
            </div>
          </div>
          <hr className="lg:hidden inline-block text-[#D9D9D9] lg:w-[900px] lg:mt-0 mt-5  w-[300px]" />
          {/* SM end  */}
        </div>
      </div>
    </div>
  );
}

export default LoginSessions;
