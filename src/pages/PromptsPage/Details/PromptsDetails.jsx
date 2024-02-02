import GeneralNav from "../../../Navbar/GeneralNav"


 
const PromptsDetails = () => {
  return (
    <div className="">
        
      <div className="bg-[#FCF7E5] ">
      <GeneralNav
            bgColor="transparent"
            bgShadow="shadow"
            btnColor="black"
          />
          
        <div className="md:flex md:flex-row md:mt-20 mt-[50px] md:items-center md:justify-left ">
          {/* Text section */}
          <div className="lg:px-[80px] px-[50px]">
            {/* Add "mr-8" for right margin */}
            <button className="leading-8 text-[#4F4F4F]  font-Bold text-[14px] border-[1px] border-[#4F4F4F] rounded-3xl px-5 py-2 mb-5">
             Prompt
            </button>
            <div>
              <h5 className="lg:w-3/5 md:w-10/12 lg:text-[72px] font-Bold md:text-5xl lg:mb-1 mb-4 text-5xl ">
                The pandemic effects on student learning
              </h5>
              <p className="text-[16px] lg:mt-5 mt-3 lg:mb-5 mb-[20px]">
              Read the prompt scenario and submit your writing at the end
              </p>
              
            </div>
          </div>
          </div>
          </div>
          <div className="flex items-center justify-center mt-4 ">
          <div className="lg:px-[80px] px-[50px]">
            {/* SCENARIO 1 */}
            <h2 className="font-Bold text-4xl lg:mt-8 mt-5">Scenario 1</h2>
          <p className="font-VarelaRegular lg:mt-6 md:mt-5 mt-3">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
             </p>
             <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
             </p>
             <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
             desktop publishing software. It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
             </p>
             {/* References */}
             <div>
             <h2 className="font-Bold text-4xl lg:mb-4 mb-3  lg:mt-6 mt-3">References</h2>
            <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">
            1.  It has survived not only five centuries, but also the leap into electronic 
            <p> typesetting,  remaining essentially unchanged.</p></p>
             <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">
                2.  It has survived not only five centuries, but also the leap into electronic 
               <p> typesetting, remaining essentially unchanged.</p></p>
             <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">
               3.  It has survived not only five centuries, but also the leap into electronic 
               <p> typesetting, remaining essentially unchanged.</p></p>
                <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2">
             4.  It has survived not only five centuries, but also the leap into electronic 
           <p>typesetting,  remaining essentially unchanged.</p> </p>
             <p className="font-VarelaRegular lg:mt-4 md:mt-3 mt-2 mb-2">
                5.  It has survived not only five centuries, but also the leap into electronic 
                <p>typesetting, remaining essentially unchanged.</p></p>
                </div>
          </div>
           
          </div>
          <div>
          </div>
          </div>
  )
  }


export default PromptsDetails