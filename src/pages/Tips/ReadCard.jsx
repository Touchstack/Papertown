import PropTypes from "prop-types";
import target from "../../assets/Images/mingcute.png";
import { articles } from "../../../ConstantData";

// Single Article Card Component
const ArticleCard = ({
  category,
  date,
  title,
  author,
  contentPreview,
  image,
}) => (
  <div className="group max-w-sm rounded-[30px] border overflow-hidden lg:px-[28px] px-10 lg:py-[36px] py-5 transition ease-in-out duration-300">
    <div
      className={`flex justify-center items-center font-bold md:text-[15px] text-[10px] md:w-[70px] w-[50px] md:h-[40px] h-[30px] rounded-[30px] border-[1px] border-black transition ease-in-out duration-300 ${
        contentPreview ? "group-hover:hidden" : ""
      }`}
    >
      {category}
    </div>

    <div
      className={`flex flex-row items-center gap-2  pt-5 lg:gap-3 transition ease-in-out duration-300 ${
        contentPreview ? "group-hover:hidden" : ""
      }`}
    >
      <img
        src={target}
        alt=""
        className="transition ease-in-out duration-300 w-[20px] md:w-[30px] lg:w-[30px] h-[30px]"
      />
      <p className="md:text-[15px] text-[20px]">{date}</p>
    </div>

    <div className="pt-4">
      <h3 className="font-bold md:text-4xl transform ease-out duration-300 text-3xl">
        {title}
      </h3>
    </div>

    <div
      className={`hidden pt-[10px] transition ease-out duration-500 ${
        contentPreview ? "group-hover:block" : "hidden"
      }`}
    >
      <p className="w-auto">{contentPreview}</p> {/*add a width*/}
    </div>

    <div
      className={`animate flex flex-row pt-6 gap-3 items-center transition ease-in-out duration-300 ${
        contentPreview ? "group-hover:hidden" : ""
      }`}
    >
      <div className="md:w-[40px] md:h-[40px] w-[30px] h-[30px] bg-orange-300 rounded-full flex justify-center items-center overflow-hidden transition ease-in-out duration-300">
        <img
          src={image}
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <p className="md:text-[16px] text-[20px] font-bold font-Varela text-[#000]">
        {author}
      </p>
    </div>
  </div>
);

// Prop types for ArticleCard
ArticleCard.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
  image: PropTypes.string,
};

// Individual Articles List Component
const ArticlesList = ({ articles }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[10px]">
    {articles.map((article) => (
      <ArticleCard key={article.id} {...article} />
    ))}
  </div>
);

// Prop types for ArticlesList
ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      contentPreview: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

// ReadPage Component
const ReadCard = () => {
  return (
    <main className="flex flex-col mt-10 lg:px-20">
      <ArticlesList articles={articles} />

      <div className="flex justify-center items-center m-[50px]">
        <button
          type="button"
          className="inline-flex items-center justify-center py-[10px] px-[10px] rounded-[30px] border border-solid  border-[#52B4AE]  w-[100px] h-[50px] bg-white text-[#52B4AE]"
        >
          Load more
        </button>
      </div>
    </main>
  );
};

export default ReadCard;
