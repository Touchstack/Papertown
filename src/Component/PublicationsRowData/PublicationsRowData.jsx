import PropTypes from 'prop-types';
import { publication } from '../../../ConstantData';
import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


// Single Publication Card Component
const PublicationCard = ({ date, topic, image, id }) => {
     const navigate = useNavigate();
     
     const handleClick = () => {
        navigate(`/publication/${id}`, { state: { item: publication[id] } });
        console.log("clicked")
      };
      
    return (
        <div className='group cursor-pointer' onClick={handleClick}>
        <div className='max-w-sm rounded-[15px] border px-[20px] pt-[25px] bg-[#F5F5F5] relative overflow-hidden'>
          <div className='max-w-sm rounded-[15px_15px_0px_0px] border '>
            <img src={image} alt='' className='w-full h-auto' />
            <div className='absolute inset-0 md:group-hover:before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-b from-[#47474700] to-[#000000] before:bg-opacity-50 before:hidden hover:md:before:block'></div>
            <button className='absolute bottom-[10px] p-1 right-[55%] items-center justify-center font-bold rounded-[40px] bg-[#FFF] w-[100px] h-[30px] text-[11px] gap-1 hidden md:group-hover:flex'>
              See magazine <HiArrowUpRight />
            </button>
          </div>
        </div>
        
        <div className='flex flex-col ml-5'>
          <h4 className='md:text-xl text-[12px] font-bold mt-[10px] text-left'>{topic}</h4>
          <p className='text-[#393939] text-[10px] md:text-[16px] mt-1 text-left'>Published {date}</p> 
        </div>
      </div>
    )
   
};
  

  // Prop types for ArticleCard
PublicationCard.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    image: PropTypes.string
  };



  // Individual Publication List Component 
const PublicationList = ({ publication }) => (
    <div className="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-[10px] lg:gap-[10px]">
      {publication.map((publication) => (
        <PublicationCard key={publication.id} {...publication} />
      ))}
    </div>
  );

// Prop types for PublicationList
PublicationList.propTypes = {
    publication: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string
    })).isRequired,
  };
  
const PublicationsRowData = () => {
  return (
    <PublicationList publication={publication} /> 
  )
}

export default PublicationsRowData
