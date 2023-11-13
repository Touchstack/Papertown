import { useState } from 'react';
import PropTypes from 'prop-types';
import search from "../../assets/Images/ri_search-line.png";
import vector from "../../assets/Images/subVector.png"
import target from "../../assets/Images/mingcute.png"
import cricleBg from "../../assets/Images/Background.png"

// Example data array
const articles = [
  {
    id: 1,
    category: 'Fiction',
    date: '23rd January, 2023',
    title: 'Repetitive sounds of the echo',
    author: 'Enoch Charway',
    contentPreview: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.',
    image: cricleBg,
  },
  {
    id: 2,
    category: 'Fiction',
    date: '23rd January, 2023',
    title: 'Repetitive sounds of the echo',
    author: 'Enoch Charway',
    contentPreview: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.',
    image: cricleBg,
  },
  {
    id: 3,
    category: 'Fiction',
    date: '23rd January, 2023',
    title: 'Repetitive sounds of the echo',
    author: 'Enoch Charway',
    contentPreview: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.',
    image: cricleBg,
  }, 
  {
    id: 4,
    category: 'Fiction',
    date: '23rd January, 2023',
    title: 'Repetitive sounds of the echo',
    author: 'Enoch Charway',
    contentPreview: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.',
    image: cricleBg,
  },
];



// Single Article Card Component
const ArticleCard = ({ category, date, title, author, contentPreview, image }) => (
  <div className="group max-w-sm rounded-[30px] border overflow-hidden px-[28px] py-[36px] transition ease-in-out duration-300">
    <div className={`flex justify-center items-center font-bold md:text-[15px] text-[10px] md:w-[70px] w-[50px] md:h-[40px] h-[30px] rounded-[30px] border-[1px] border-black transition ease-in-out duration-300 ${contentPreview ? 'group-hover:hidden' : ''}`}>
      {category}
    </div>

    <div className={`flex flex-row items-center pt-5 gap-3 transition ease-in-out duration-300 ${contentPreview ? 'group-hover:hidden' : ''}`}>
      <img src={target} alt="" className="transition ease-in-out duration-300 w-[20px] md:w-[30px] h-[30px]" />
      <p className='md:text-[20px] text-[10px]'>{date}</p>
    </div>

    <div className='pt-4'>
      <h3 className='font-bold md:text-4xl transform ease-out duration-300 text-[15px]'>{title}</h3> 
    </div>

    <div className={`hidden pt-[10px] transition ease-out duration-500 ${contentPreview ? 'group-hover:block' : 'hidden'}`}>
      <p className='w-[350px]'>{contentPreview}</p>
    </div>

    <div className={`animate flex flex-row pt-6 gap-3 items-center transition ease-in-out duration-300 ${contentPreview ? 'group-hover:hidden' : ''}`}>
      <div className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] bg-orange-300 rounded-full flex justify-center items-center overflow-hidden transition ease-in-out duration-300'>
        <img src={image} alt='' className='rounded-full w-full h-full object-cover' />
      </div>
      <p className='md:text-[16px] text-[10px] font-bold font-Varela text-[#000]'>{author}</p>
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
  image: PropTypes.string
};

// Individual Articles List Component 
const ArticlesList = ({ articles }) => (
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
    {articles.map((article) => (
      <ArticleCard key={article.id} {...article} />
    ))}
  </div>
);

// Prop types for ArticlesList
ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    contentPreview: PropTypes.string.isRequired,
    image: PropTypes.string
  })).isRequired,
};

// ReadPage Component
const ReadRowData = () => {
   const [text, setText] = useState("");
  
   const handleChange = (e) => {
    // Store the input value to local state
    setText(e.target.value);
  };

  return (
    <main className="flex flex-col md:mt-[160px] mt-[100px] md:ml-[50px] ml-[10px] md:p-20 px-2">
      <div className='md:pb-10 pb-2'>
        <h2 className='text-[#000] md:text-[42px] text-[24px] font-bold'>Other writing samples</h2>
          
        <div className='relative pt-10 pb-10  flex-row '>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
             <img src={search} alt="" width={17} height={17} /> 
          </div>
         
          <input 
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search sparks and prompts"
            name="search"
            className='pl-10 bg-[#F9F9FB] h-[50px] md:w-[450px] w-[240px] rounded-[8px]'
          />
         
         <button
           type="button"
           className="inline-flex items-center justify-center md:rounded-[8px] rounded-[30px] border w-[100px] h-[50px] ml-5 bg-white"
          >
             <img src={vector} alt="" className="mr-2" />
           Filter
          </button>
        </div>
      </div>

      <ArticlesList articles={articles} />

      <div className='flex justify-center items-center m-[50px]'>
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

export default ReadRowData;
