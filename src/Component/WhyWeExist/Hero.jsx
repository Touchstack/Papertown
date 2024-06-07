import icon1 from "../../assets/Images/mingcute.svg";
import icon2 from "../../assets/Images/mingcute2.svg";
import icon3 from "../../assets/Images/mingcute3.svg";
import home from  "../../assets/Images/Home.svg";
import world from  "../../assets/Images/world.svg";
import NotePencil from "../../assets/Images/NotePencil.svg";
import Lightbulb from "../../assets/Images/Lightbulb.svg";
import PencilLine from "../../assets/Images/PencilLine.svg"

const Hero = () => {
  return (
    <div className="py-16 px-8 text-[#000] bg-[#FFF] font-Medium">
      <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-center ">
        Why we exist and delight in what we do
      </h3>

      <section>
        <div className="flex flex-col pb-10 pt-10 md:p-10 items-start">
           <img src={icon1} alt="" className="pb-3"/>
           <h1 className="font-Bold pb-3 text-[20px]">TO NURTURE THE LOVE OF WRITING IN YOUNG PEOPLE</h1>
           <p className="text-13px">Papertown Imaginarium was created primarily for the child who loves to write - to give him/her
              everything he/she needs to keep doing what he/she enjoys doing:
           </p>

           <div className="flex items-center py-3 space-x-3">
             <img src={home} alt="" />
             <p className="text-13px">A place that welcomes, encourages and celebrates their writing</p>
           </div>

           <div className="flex items-center py-3 space-x-3">
             <img src={world} alt="" />
             <p className="text-13px">A place that welcomes, encourages and celebrates their writing</p>
           </div>

           <div className="flex items-center py-3 space-x-3">
             <img src={NotePencil} alt="" />
             <p className="text-13px">A place that welcomes, encourages and celebrates their writing</p>
           </div>

           <div className="flex items-center py-3 space-x-3">
             <img src={Lightbulb} alt="" />
             <p className="text-13px">A place that welcomes, encourages and celebrates their writing</p>
           </div>

           <div className="flex items-center py-3 space-x-3">
             <img src={PencilLine} alt="" />
             <p className="text-13px">A place that welcomes, encourages and celebrates their writing</p>
           </div>
        </div>
      </section>

      <section>
      <div className="flex flex-col md:p-10 pb-10  items-start">
           <img src={icon2} alt="" className="pb-3"/>
           <h1 className="font-Bold pb-3 text-[20px]">TO SUPPORT WRITING EDUCATION</h1>
           <div className="space-y-4">
            <p>
            Beyond working with individual young writers directly through our website and writing programs,we also work to support and improve the general state of writing education.
            Our work to support writing education involves working with schools to supplement curriculumbased
            academic writing which generally focuses on correct usage of words in tandem with
            grammar, spelling and punctuation.
            </p>

           <p>
            We believe that pupils and students can learn all that the academic writing curriculum is designed
            to teach them is they are able to engage with writing beyond rigid, technical structures.
           </p>

           <p>
            And so we work with schools and writing instructors to deliver programs (like School Press Clubs
            and Literacy Week Projects) that help pupils and students engage with writing as an insightful,
            powerful and fun tool for self-expression, channelling creativity and exploring issue (personal and
            public, big and small, real and imagined).
           </p>

           <p>
             By working with schools in this way we are able to help a larger pool of young people benefit from
             the gains of writing [link to ‘why writing’]
           </p>
          </div>
        </div>
      </section>

      <section>
      <div className="flex flex-col md:p-10  items-start">
           <img src={icon3} alt="" className="pb-3"/>
           <h1 className="font-Bold text-[20px] pb-3">TO DRIVE THE CREATION OF LITERARY CONTENT FOR YOUNG PEOPLE WRITTEN BY YOUNG PEOPLE</h1>
           <div className="space-y-4">
            <p>
             We’re trying something new at Papertown Imaginarium… allowing children and young people
             write their own stories.
            </p>

           <p>
            If you have ever interacted with children, you’d know how fascinating, wild, unfiltered and
            unburdened their imaginations are. There are no limitations, boundaries or impossibilities in their
            minds. Everything is possible and nothing is impossible.
            Knowing this about children and young people, we asked ourselves, would children make better
            writers of children’ stories? Would children better enjoy content written by people who see the
            world and things as magically as they themselves do? These are the questions we’re exploring
            through our Great Literary Experiment… to see what happens when children and young people
            are given the freedom and space to share their minds with an audience that gets them. And to
            give children the pleasure of consuming literary content created by their fellow dreamers.
           </p>

           <p>
            Beyond entertaining young readers, our Great Literary Experiment aims to inspire young people.
            Having grown ups in the world to look up to is great, but what about having people who are as
            young as you applying themselves in exciting ways and turning the same kind of wacky
            imagination that you have into things of value? Wouldn’t that be even more inspiring?
            At Papertown Imaginarium we believe that young people are not too young to explore all that they
            can be and do through writing, to explore all the places their writing can take them. We believe
            that the best time to start, especially when it comes to engaging and exploring one’s imagination
            and creativity, is as children… when EVERYTHING is possible; when their imaginations are the
            most magical!
           </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
