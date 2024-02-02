import Child1 from "../../../../../assets/Images/child1.png"
import Slope2 from "../../../../../assets/Images/Slope2.png"
 
const handleClick = () => {
    window.location.href = 'submissions/Narrative';
  }

function SubmissionsCards() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[15px] lg:px-[30px] md:mr-0 mr-2 ml-2 md:mt-12 mt-6 md:mb-4 mb-2">
      {/* card section start */}
      <a>
  <div
    className="bg-fuchsia-700 border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto w-full"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-white" onClick={handleClick}>All</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 lg:gap-[10px] gap-[5px] ">
        <div className="text-white text-[42px] font-Bold mt-4 "> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-fuchsia-300 text-[12px] font-Regular"> Last update 
        <p className="text-white text-lg mb-2"> 12th Feb, 2023 </p>
        </div>
        <div className="text-white text-xl inline-flex items-center  lg:w-full md:w-full">
        <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
        12%
      </div>

        </div>
        
    </div>
    </a>



      {/* card section end */}
      {/* card section start */}
      <a>
  <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto w-full">
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>
      Memoir
    </p>

    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
      <div className="text-black text-[42px] font-Bold mt-4 lg:w-full md:w-full">
        125
      </div>
      <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
            src={Child1}
            alt={`image-${index}`}
          />
        ))}
      </div>

      <div className="text-black text-[12px] font-Regular lg:w-full md:w-full">
        Last update
        <p className="text-black text-lg mb-2">12th Feb, 2023</p>
      </div>
      <div className="text-black text-xl inline-flex items-center  lg:w-full md:w-full">
        <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
        12%
      </div>
    </div>
  </div>
</a>





      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Narrative</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Narrative</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Memoir</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
      {/* card section start */}
      <a>
  <div
    className="bg-white border-[1px] border-grad-100 rounded-2xl md:py-[30px] md:px-[20px] px-[10px] md:w-3/4 lg:w-full mx-auto"
  >
    <p className="lg:rounded-[50px] rounded-[20px] lg:mr-[70%] mr-[35%] text-lg md:border-[1px] items-center mt-2 text-center text-black" onClick={handleClick}>Narrative</p>
    
    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-[10px] ">
        <div className="text-black text-[42px] font-Bold mt-4"> 125 </div>
        <div className="flex items-center justify-end lg:ml-[60px] ml-[20px] mt-4">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="w-[24.50px] h-[24.50px] -mr-[8px] relative z-[1]"
          src={Child1}
          alt={`image-${index}`}
        />
      ))}
    </div>
            
             
        <div className="text-black text-[12px] font-Regular"> Last update <p className="text-black text-lg mb-2"> 12th Feb, 2023 </p></div>
        <div className="text-black text-xl inline-flex items-center">
  <img src={Slope2} alt="Slope" className="lg:ml-[60px]" />
  12%
</div>

        </div>
        
    </div>
    </a>

      {/* card section end */}
    </div>
  );
}

export default SubmissionsCards;
