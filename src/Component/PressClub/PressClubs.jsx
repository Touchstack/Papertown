const PressClubs = () => {
  return (
    <section className="bg-[#FFF]">
      <div className="py-14 lg:py-16 mx-auto text-center max-w-screen-xl px-4">
        <div className="text-center">
          <header className="mx-auto">
            <span className="text-[#000] font-Bold py-4 lg:text-5xl md:text-5xl sm:text-4xl text-4xl break-normal md:break-all m-auto">
              Press Clubs
            </span>
          </header>
          <p className="mx-auto leading-7 text-lg tracking-wider text-13 leading-26 md:pl-25 p-4 py-2 mt-7 font-Medium text-[#393939] pt-2 lg:px-60 md:px-40 sm:px-28">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software.
          </p>
          <button className="bg-[#52B4AE] font-Bold text-[#FFF] px-9 p-3 text-xl mt-8 rounded-full">
            Request press club
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressClubs;
