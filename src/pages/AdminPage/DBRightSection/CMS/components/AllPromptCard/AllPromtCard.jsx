const AllPromtCard = () => {
  const gradeColors = ['#52B4AE', '#B44DB8', '#FBCA23'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {Array.from({ length: 12 }).map((_, index) => {
      
        const colorIndex = index % gradeColors.length;

        return (
          <div key={index} className="sm:w-[6/12] md:w-[11/12] h-[11/12] rounded-[16px] border-[1px] border-[#E8E8E8] bg-[#FFF] p-5">
            <div className="flex gap-2 text-[6.99px]">
              {/* Grade div */}
              <div style={{ backgroundColor: gradeColors[colorIndex] }} className="w-[87px] h-[36px] text-[#fff] text-[10px] md:text-[13px] rounded-[26px] flex items-center justify-center">
                Grade 6-12
              </div>
              {/* Grade div */}

              <div className="w-[71px] h-[36px text-[10px] md:text-[13px] border-[0.538px] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
                Memoir
              </div>
            </div>

            <h1 className="text-[#000000] text-[26px] md:text-[36px] font-[700] leading-[2.5rem] pt-5">
              Processing elements of sound
            </h1>

            <p className="text-[#000000] text-[16px] pt-2">
              Writers will identify their favorite sensory memories and transfer them to a visual heart map.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllPromtCard;
