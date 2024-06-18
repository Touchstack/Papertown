import DateLogo from "../../assets/Images/DateLogo.png";
import Line from "../../assets/Images/line.png";
import WritingSamples from "./WritingSamples";

function SensoryHeat() {
  return (
    <div className="lg:mt-20 mt-20 flex items-center flex-col">
      <div className="md:px-40 px-10">
      <div className="flex flex-col">
        <h6 className="text-[#000000] lg:text-5xl md:text-5xl text-4xl font-Bold">
          Creative Writing in Brief
        </h6>
        {/* <div className="flex gap-3 mt-5">
          <img src={DateLogo} alt="" />
          <p>
            23rd January, 2023 <span className="ml-10">.</span>
            <span className="ml-4"> 2 min read</span>
          </p>
        </div> */}
      </div>
      <div className="flex flex-col  justify-center">
        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>

        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
        <p className="mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
      </div>
    </div>
      <div className="lg:mt-20 lg:mb-20 mt-10 mb-10">
        <img src={Line} alt="" />
      </div>
      <div>
        <WritingSamples />
      </div>
    </div>
  );
}

export default SensoryHeat;
