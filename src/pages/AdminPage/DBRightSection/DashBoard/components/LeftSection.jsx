
const LeftSection = () => {

    const data = [
        {
            title: "Total Writes",
            fig: "1,456"
         },
         {
            title: "Submissions",
            fig: "456"
         },
         {
            title: "Clubs",
            fig: "50"
         },
    ]

  return (
    <div className="flex flex-col flex-1">
       <div className="flex">
        {data.map((info) => (
            <div key={info.title} className="bg-white rounded-lg shadow px-5 py-3 w-[215px] ml-5">
            <h2 className="text-[13px] text-[#BCBCBC] font-bold mb-2">{info.title}</h2>
            <p className="font-[700] text-[24px]">{info.fig}</p>
            </div>
        ))}
       </div>
    </div>
  )
}

export default LeftSection
