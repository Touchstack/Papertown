import BoyImg from '@/assets/Images/promptBoy.png'
import GirlImg from '@/assets/Images/GirlChild.png'
import GirlImg2 from '@/assets/Images/SlantedGirl.png'
import PromptCard from '../PromptCard/PromptCard'
import { articles } from '../../../../ConstantData'



const PromptsDetailsV2 = () => {
  return (
    <div className='md:p-20 p-10'>
        <h1 className="font-Bold md:text-[72px] text-[42px]  mb-10">Poem Inspiration</h1>

        <div className='space-y-10'>
          <div className="flex md:flex-row flex-col items-center justify-center p-6 md:p-10 bg-[#FFD8FF] w-[6/12]  rounded-[40px]">
            <div className="w-12/12 md:w-8/12">
               <p className=''>
                 What inspires you to write? Where do you get ideas for the things you write? Some
                 stories/poems etc. come to us in our dreams, while we’re sleeping. Some just seem to
                 drop into our minds, hearts and heads. And sometimes, conversations (with ourselves,
                 with others, and even conversations we overhear between other people) spark an
                 interesting idea for a piece of writing.
                </p> 

                <p className="mt-6">For this prompt, we are going to draw inspiration from a piece of poem</p>
            </div>

            <img src={BoyImg} alt="" />
          </div>

          <div className="flex md:flex-row flex-col gap-10 items-center justify-center p-10 bg-[#FCF7E5] w-[6/12]  rounded-[40px]">
            <img src={GirlImg} className='md:h-[260px] h-[230px]' alt="" />
            <div className="12/12">
              <p className="mt-6 text-[36px] font-Bold">The Prompt</p>
               <p className=''>
                    Pick a poem, any poem - it could be one that you love, one that made you smile or sad,
                    or any random poem that you picked simply for this exercise - and use it as an inspiration
                    for a poem, story, or essay.
                </p> 
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-10 items-center p-10 md:p-20 bg-[#BBFFFB] w-[6/12]  rounded-[40px]">
            <div className="md:w-10/12 flex flex-col relative space-y-4">
              <p className="mt-6 text-[36px] font-Bold">Prompt Note</p>
                 <p>
                   Take a line from the poem, any line, and use it as a line in your own poem - it could be the
                    first line of your poem, or it could appear anywhere in your poem. You can also use the
                    entire poem, a line, or verse as a central plot/idea for a story, or as an idea being
                    explored in a formal essay. If you have had a personal experience that is similar to the
                    narrative portrayed in the poem, then feel free to share that personal experience in a
                    personal essay.
                 </p>
               <p className=''>
                 However you want to explore this prompt, remember that the idea is to be inspired by the
                 poem you’ve picked and create your own original writing. DO NOT copy the poem.
               </p> 
               <p>
                 When submitting your writing, include/attach the poem that inspired your writing. We
                 want to see how you interpreted it as a source of your inspiration.
               </p>

               <img src={GirlImg2} className='md:hidden flex' alt="" />
            </div>

            <div className='absolute md:flex hidden right-1'>
              <img src={GirlImg2} alt="" />
            </div>
          </div>
        </div>

        <div className='flex items-center mt-10 justify-center'>
            <div className='md:w-2/12 w-8/12 hover:cursor-pointer flex items-center h-[50px] rounded-[30px] justify-center bg-[#52B4AE]'>
                <p className='text-white'>
                  Submit writing
                </p>
            </div>
        </div>


        <div className='p-10 space-y-14'>
             <div>
                <h1 className='text-[36px] font-Bold'>Writing category</h1>
                <div className='mt-3 flex gap-3 flex-row'>
                    <div className="flex flex-row items-center justify-center leading-8 text-[13px] border-[1px] border-[#8484844D] bg-[#7272721A] rounded-3xl  p-3 h-[36px]">
                    Story
                    </div>

                    <div className="flex flex-row items-center justify-center leading-8 text-[13px] border-[1px] border-[#8484844D] bg-[#7272721A] rounded-3xl  p-3 h-[36px]">
                    Poem
                    </div>

                    <div className="flex flex-row items-center justify-center leading-8 text-[13px] border-[1px] border-[#8484844D] bg-[#7272721A] rounded-3xl  p-3 h-[36px]">
                    Essay
                    </div>
                </div>
             </div>

            <div>
             <h1 className='text-[36px] font-Bold'>Writing Level</h1>
                <div className='mt-3 flex gap-3 flex-row'>
                    <div className="flex flex-row items-center justify-center leading-8 text-[13px] border-[1px] border-[#8484844D] bg-[#7272721A] rounded-3xl  p-3 h-[36px]">
                      Beginner
                    </div>

                    <div className="flex flex-row items-center justify-center leading-8 text-[13px] border-[1px] border-[#8484844D] bg-[#7272721A] rounded-3xl  p-3 h-[36px]">
                     Junior Intermediate
                    </div>
                </div>
            </div>
        </div>


        <div>
           <h1 className='text-[36px] mb-10 font-Bold'>Other writings</h1>
           <PromptCard data={articles} />
        </div>
    </div>
  )
}

export default PromptsDetailsV2