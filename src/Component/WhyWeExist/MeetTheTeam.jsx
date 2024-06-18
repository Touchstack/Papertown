import Team1 from "../../assets/Images/team1.svg";

const MeetTheTeam = () => {
  return (
    <div className="w-full p-10 bg-[#FFD8FF] flex flex-col items-center">
       <h3 className="font-Bold pb-10 lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-center ">
         Meet the team behind Papertown <br /> Imaginarium
      </h3>

      <p className="w-10/12 mb-20">
       We are a small group of people with varying and complementary interests and skills, united by our commitment to fostering creative writing among young people everywhere in Africa. We are always interested in meeting and welcoming writing enthusiasts, writers, poets, editors, illustrators, designers, and other creative people who share our interest and would like to  contribute to helping young Africans explore their interest in writing!
       <br /> Please remember that we are a not-for-profit organisation. This means that we get paid in hugs, smiles, letters of appreciation, and occasional stipends.
      </p>

      <div className="flex flex-col md:p-10 space-y-20">
         <div className="flex md:flex-row flex-col space-x-6">
           <img src={Team1} alt="" />
           <div className="flex flex-col">
              <h1 className="font-Bold text-[36px]">Andrew Nana Yaw Berchie</h1>
              <p>
               Andrew Berchie is the tech visionary at Papertown Imaginarium. Before he joined the team, we were stuck on the analogue way of delivering our service - through physical creative writing sessions. While these sessions created great opportunities for us to meet physically, it limited the number of writers we could work with. Now, thanks to Andrew’s vision and support, we are able to work with young writers all over Africa!
              </p>
              <p>
               Andrew is a graduate of Bath University, with a Masters’ in Chemical Engineering. When he is not contributing his expertise at Papertown, he is busy growing his business, Bargain Moto, watching war documentaries, reading business articles, or strategising on how to become President someday!
              </p>
           </div>
         </div>

         <div className="flex md:flex-row flex-col space-x-6">
           <img src={Team1} alt="" />
           <div className="flex flex-col">
              <h1 className="font-Bold text-[36px]">Fortune Chichenma Okparaolu</h1>
              <p>
                Fortune Okparaolu is the general dreamer at Papertown Imaginarium, conceptualising creative ways to get young people to express themselves and explore the world through writing, and ways for young writers to make the most of their writing. She also manages the general operations of Papertown. 
              </p>
              <p>
               Fortune is a graduate of Kwame Nkrumah University of Science and Technology (KNUST), and the Nigerian Law School. She practised as a lawyer in Nigeria for 10 years and later became a PMI Certified Associate Project Manager. She received training in entrepreneurship through the Tony Elumelu Foundation (TEF) Entrepreneurship Forum. She also studied Comprehensive Creative Writing with the UK’s Writers’ Bureau and dreams of one day being a published writer herself!
              </p>
           </div>
         </div>

         <div className="flex md:flex-row flex-col space-x-6">
           <img src={Team1} alt="" />
           <div className="flex flex-col">
              <h1 className="font-Bold text-[36px]">Jamila Adamu Lisu</h1>
              <p>
                Jamila Lisu is a supporting editor at Papertown Imaginarium. She is an avid reader and brings her love for stories and the general world of make-belief to reviewing stories written by our young writers. Her eagle eyes are also very sharp at picking out typographical and grammatical errorsm our writers may have missed, so that the stories we share are technically correct! She also supports our physical writer projects in Nigeria.
              </p>
              <p>
                Jamila is a graduate of Ahmadu Bello University, with a Masters of Law form the University of Manchester. She has been a practising lawyer in Nigeria since 2014, through her own law firm, Firmus Legal. When she is not reviewing and editing submissions at Papertown or lawyering, she loves to engage in spirited conversations and bring people together!
              </p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default MeetTheTeam