const MarqueeText = () => {
  return (
    <div className="overflow-hidden flex-col text-justify md:mt-10 mt-[140px] lg:inline md:inline">
      <div className="marquee1 font-Bold text-7xl text-zinc-100 leading-72px tracking-widest ">
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <span>
          Discover the <span className="text-emerald-400"> power and joy</span> of writing .
        </span>
        <p className="marquee2">
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
          <span>
          Discover the <span className="text-yellow-500"> power and joy</span> of writing.
          </span>
        </p>
      </div>
    </div>
  );
};

const MarqueeApp = () => {
  return (
    <div className="overflow-hidden">
      <MarqueeText />
    </div>
  );
};

export default MarqueeApp;
