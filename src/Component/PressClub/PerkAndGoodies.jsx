import { howWeCanHelp } from "../../../ConstantData";

const PerkAndGoodies = () => {
  return (
    <div>
      <div className="py-16 px-14 bg-[#ffd8ff4d] font-Medium text-center">
        <h3 className="font-Bold text-[#000] lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-center ">
          Here’s How We Help
        </h3>
        <p className="text-[#393939] mx-auto leading-7 text-lg tracking-wider text-13 leading-26 md:pl-25 p-4 py-2 mt-5 font-Medium pt-2 lg:px-60 md:px-40 sm:px-28">
          While having a Press Club at your school can be fun and exciting for the pupils and students,
          setting up and having it running smoothly and efficiently can be quite tasking. This is where we
          come in - to help ease the entire process, so that your school and its pupils/students can make
          the most of all that having a great Press Club offers.
        </p>
        <div className="py-4">
          <div className=" flex items-center space-y-7 justify-center my-3">
            
              <div  className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 grid-cols-1  lg:mt-5 md:mt-4 sm:mt-1 mt-1 gap-y-12 gap-x-20">
            {howWeCanHelp.map((data, index) => (
              <div key={index} className="">
                <div className="mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_345_3362)">
                      <path
                        d="M21 3.5C21.6562 3.5 22.3037 3.535 22.9425 3.60675C23.1709 3.63203 23.3922 3.70205 23.5935 3.81283C23.7949 3.9236 23.9725 4.07295 24.1161 4.25236C24.2598 4.43176 24.3667 4.6377 24.4308 4.85842C24.4948 5.07914 24.5148 5.31032 24.4895 5.53875C24.4642 5.76718 24.3942 5.9884 24.2834 6.18977C24.1726 6.39115 24.0233 6.56873 23.8439 6.71238C23.6645 6.85603 23.4586 6.96294 23.2378 7.027C23.0171 7.09107 22.7859 7.11103 22.5575 7.08575C19.6736 6.76313 16.7607 7.34464 14.2217 8.74987C11.6827 10.1551 9.64312 12.3146 8.38507 14.9296C7.12701 17.5446 6.71265 20.486 7.19931 23.3468C7.68597 26.2076 9.04958 28.8465 11.1015 30.8985C13.1535 32.9504 15.7924 34.314 18.6532 34.8007C21.514 35.2873 24.4554 34.873 27.0704 33.6149C29.6854 32.3569 31.8449 30.3173 33.2501 27.7783C34.6554 25.2393 35.2369 22.3264 34.9142 19.4425C34.889 19.2141 34.9089 18.9829 34.973 18.7622C35.0371 18.5414 35.144 18.3355 35.2876 18.1561C35.5777 17.7938 35.9999 17.5616 36.4613 17.5105C36.9226 17.4594 37.3853 17.5938 37.7476 17.8839C37.927 18.0275 38.0764 18.2051 38.1872 18.4065C38.2979 18.6078 38.368 18.8291 38.3932 19.0575C38.4632 19.6963 38.5 20.3438 38.5 21C38.5 30.6652 30.6652 38.5 21 38.5C11.3348 38.5 3.5 30.6652 3.5 21C3.5 11.3348 11.3348 3.5 21 3.5ZM20.944 13.7847C21.0593 14.234 20.9916 14.7107 20.7557 15.11C20.5197 15.5094 20.1349 15.7987 19.6857 15.9145C18.4518 16.2377 17.3776 16.9989 16.6636 18.056C15.9496 19.1131 15.6446 20.3938 15.8055 21.6592C15.9664 22.9246 16.5822 24.0883 17.538 24.933C18.4939 25.7778 19.7244 26.2459 21 26.25C22.1638 26.2495 23.2945 25.8626 24.2147 25.1499C25.1348 24.4372 25.7922 23.4392 26.0837 22.3125C26.1998 21.863 26.4896 21.478 26.8895 21.2422C27.2894 21.0064 27.7666 20.9391 28.2161 21.0551C28.6656 21.1712 29.0506 21.461 29.2864 21.8609C29.5222 22.2608 29.5895 22.738 29.4735 23.1875C28.9367 25.2454 27.669 27.0374 25.9073 28.2289C24.1456 29.4203 22.0104 29.9296 19.9006 29.6616C17.7908 29.3937 15.8507 28.3668 14.4428 26.7728C13.0348 25.1788 12.2554 23.1267 12.25 21C12.2503 19.0601 12.895 17.1752 14.0828 15.6415C15.2707 14.1078 16.9343 13.0121 18.8125 12.5265C19.0351 12.4691 19.2668 12.4562 19.4944 12.4884C19.7219 12.5206 19.941 12.5973 20.1389 12.7141C20.3368 12.8309 20.5098 12.9856 20.6479 13.1693C20.7861 13.353 20.8867 13.5622 20.944 13.7847ZM32.382 3.72225C32.7014 3.85469 32.9745 4.07879 33.1666 4.36627C33.3588 4.65374 33.4615 4.99171 33.4618 5.3375V8.54H36.6625C37.0086 8.54007 37.3468 8.64275 37.6346 8.83505C37.9223 9.02734 38.1465 9.30063 38.2789 9.62035C38.4114 9.94008 38.446 10.2919 38.3785 10.6313C38.311 10.9707 38.1444 11.2825 37.8997 11.5273L31.71 17.71C31.3819 18.0382 30.9368 18.2227 30.4727 18.2227H26.25L23.051 21.4235C22.7226 21.7519 22.2773 21.9363 21.8129 21.9363C21.3485 21.9363 20.9031 21.7519 20.5747 21.4235C20.2464 21.0951 20.0619 20.6498 20.0619 20.1854C20.0619 19.721 20.2464 19.2756 20.5747 18.9472L23.7755 15.75V11.5255C23.7756 11.0614 23.96 10.6164 24.2882 10.2883L30.4745 4.10025C30.7192 3.85537 31.0311 3.68858 31.3706 3.62098C31.7102 3.55338 32.0621 3.58802 32.382 3.7205V3.72225ZM29.9618 9.562L27.2755 12.25V14.7245H29.75L32.438 12.0382H31.7118C31.2476 12.0382 30.8025 11.8539 30.4743 11.5257C30.1461 11.1975 29.9618 10.7524 29.9618 10.2883V9.562Z"
                        fill="#B44DB8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_345_3362">
                        <rect width="42" height="42" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h3 className="font-Bold text-[#000] lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                   {data?.title}
                </h3>
                <p className="font-Medium text-[#393939] leading-7 text-sm tracking-wider text-13 leading-26 text-start mt-2 max-w-[350px]">
                  {data?.msg}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerkAndGoodies;
