import React,{useEffect, useState} from 'react'
import { getPrompt } from '../../../api'

const PromptCard = () => {
    const [PromptData, setPromptData] = useState([])

    const gradeColors = ['#52B4AE', '#B44DB8', '#FBCA23'];

    useEffect(() => {
      getPrompt().then((res) => {
         console.log(res.data);
         setPromptData(res.data)
      })
    }, [])
    
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 ">
    {/* card section start */}
    {PromptData.map((prompt, i) => {

        const colorIndex = i % gradeColors.length;
        
        return (
         <a href="/promptdetails" key={prompt._id}>
            <div className="bg-white border-[1px] border-grad-100 rounded-2xl md:p-6 p-4 md:px-10 px-5">
              <span className="flex md:mt-2 md:ml-2">
                <button style={{ backgroundColor: gradeColors[colorIndex] }} className="md:text-[13px] text-[13px] px-3 mr-3 leading-8 text-white font-bold rounded-3xl md:w-[87px] md:h-[40px]">
                  Grade 6-12
                </button>
                <button className="leading-8 text-[13px] border-[1px] border-[#292929] rounded-3xl w-[71px] h-[36px]">
                 {prompt?.category?.name}
                </button>
              </span>
              <h5 className="text-2xl md:text-3xl lg:text-4xl font-Bold mt-2 md:mb-3">
                {prompt?.title}
              </h5>
              <span className="md:text-[16px] text-[15px]">
              {prompt?.description}
              </span>
            </div>
          </a>
        )
     })}
    {/* card section end */}
  </div>
  )
}

export default PromptCard