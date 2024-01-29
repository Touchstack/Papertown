function LoginSessions() {
  return (
    <div>
      <div className="lg:ml-20 ml-5 lg:mt-20 mt-10 ">
        <h6 className="text-[#000000] text-2xl font-Bold">Login Sessions</h6>
        <p>Places where user is logged into Papertown</p>

        <div className="text-left">
          {/* LG start  */}
          <table className="hidden lg:inline-block min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500 text-[#8B8B8B]">
              <tr>
                <th scope="col" className="px-20 py-6">
                  Location
                </th>
                <th scope="col" className="px-20 py-6">
                  Device
                </th>
                <th scope="col" className="px-20 py-6">
                  IP Address
                </th>
                <th scope="col" className="px-20 py-6">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-20 py-6 font-medium">
                  Koforidua
                </td>
                <td className="whitespace-nowrap px-20 py-6">
                  Safari - Mac OS
                </td>
                <td className="whitespace-nowrap px-20 py-6">154.160.21.106</td>
                <td className="whitespace-nowrap px-20 py-6">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-20 py-6 font-medium">
                  Accra
                </td>
                <td className="whitespace-nowrap px-20 py-6">
                  Safari - Mac OS
                </td>
                <td className="whitespace-nowrap px-20 py-6">154.160.21.106</td>
                <td className="whitespace-nowrap px-20 py-6">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-20 py-6 font-medium">
                  Lagos
                </td>
                <td className="whitespace-nowrap px-20 py-6">
                  Safari - Mac OS
                </td>
                <td className="whitespace-nowrap px-20 py-6">154.160.21.106</td>
                <td className="whitespace-nowrap px-20 py-6">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-20 py-6 font-medium">
                  Benin City
                </td>
                <td className="whitespace-nowrap px-20 py-6">
                  Safari - Mac OS
                </td>
                <td className="whitespace-nowrap px-20 py-6">154.160.21.106</td>
                <td className="whitespace-nowrap px-20 py-6">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-20 py-6 font-medium">
                  Lome
                </td>
                <td className="whitespace-nowrap px-20 py-6">
                  Safari - Mac OS
                </td>
                <td className="whitespace-nowrap px-20 py-6">154.160.21.106</td>
                <td className="whitespace-nowrap px-20 py-6">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
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
