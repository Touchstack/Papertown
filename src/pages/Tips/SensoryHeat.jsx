import DateLogo from "../../assets/Images/DateLogo.png";
import Line from "../../assets/Images/line.png";
import WritingSamples from "./WritingSamples";

function SensoryHeat() {
  return (
    <div className="lg:mt-40 mt-20 md:ml-28 lg:ml-48 ml-5">
      <div>
        <h6 className="text-[#000000] lg:text-5xl md:text-5xl text-4xl font-Bold">
          Sensory Heat Mapping
        </h6>
        <div className="flex gap-3 mt-5">
          <img src={DateLogo} alt="" />
          <p>
            23rd January, 2023 <span className="ml-10">.</span>
            <span className="ml-4"> 2 min read</span>
          </p>
        </div>
      </div>
      <div>
        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
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
        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
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

        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
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
        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
      </div>
      <div className="mt-8">
        <h6 className="mb-5 text-3xl font-Bold">Subtitle</h6>
        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
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
        <p className="lg:w-[900px] md:w-[600px] w-[360px] mt-8">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software.
        </p>
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
