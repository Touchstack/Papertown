import GirlChild from "../../assets/Images/GirlChild.png";

const WhyWriting = () => {
  return (
    <div id="why-writing" className='w-full p-20  bg-[#FFC5FF]'>
       <div className='flex flex-col md:flex-row items-center justify-center'>
         {/* Left section */}
          <div className="flex flex-col space-y-6 max-w-[722px]">
            <h1 className="font-Bold text-[42px]">Why Writing?</h1>

            <p>
             While it may seem that Papertown Imaginarium is on a mission to turn every child into professional writers, we do not aim or presume to be able to do this. Our focus on writing is born out of our understanding of the impact that writing can have, and the skills that can be gained through writing, which can be transferred to several aspects of human endeavour, beyond just creating written content for pleasure.
            </p>

            <p>
             The process of fiction writing generally involves coming up with an idea, selecting the right words and ordering them in the right sequence that brings that idea, your imagination, to life in the mind of another. And then there’s non-fiction writing which also entails a deep thought process - understanding the topic, properly researching the points and presenting your idea in a systemic, coherent way that elicits understanding of the points by other people. Teaching young people to be able to go through these processes is a powerful way of teaching them to communicate, and being able to communicate effectively is integral to all human endeavours.
            </p>

            <p>
             It is this understanding of what goes into creating a well-thought, impactful piece of writing (including the revision process), and our understanding of the gains of being able to successfully go through the entire process that drive us to nurture writing in young people.
            </p>
          </div>

          {/* Right section */}
           <div>
             <img src={GirlChild}  alt="" />
           </div>
       </div>
    </div>
  )
}

export default WhyWriting