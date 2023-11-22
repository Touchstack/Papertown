const MarqueeText = () => {
  return (
    <div className="flex flex-col text-justify">
      <div className="marquee1 font-Bold text-7xl text-zinc-100 leading-72px tracking-widest ">
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span> 
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <span>
           WRITE <span className="text-emerald-400"> SUBMIT</span> READ .  
        </span>
        <p className="marquee2">
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .  
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .  
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .  
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .  
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .  
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .
          </span>
          <span>
             WRITE <span className="text-yellow-500"> SUBMIT</span> READ .
          </span>
          </p>
        </div>
      </div>
  );
};

const MarqueeApp = () => {
  return (
    <div className="">
      <MarqueeText />
    </div>
  );
};

export default MarqueeApp;
