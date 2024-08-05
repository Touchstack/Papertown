import { useState } from "react"
import vector from "../../assets/Images/subVector.png";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


const FilterButton = () => {
    const [showAllBar, setShowAllBar] = useState(true)
    const [showEssayBar, setShowEssayBar] = useState(false)
    const [showPoem, setShowPoem] = useState(false)
    const [showStory, setShowStory] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center md:rounded-[8px] rounded-[30px] border w-[100px] h-[50px] ml-5 bg-white"
          >
            <img src={vector} alt="" className="mr-2" />
            Filter
          </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-white">
        <DropdownMenuCheckboxItem
          checked={showAllBar}
          onCheckedChange={setShowAllBar}
        >
          All
        </DropdownMenuCheckboxItem>
       
        <DropdownMenuCheckboxItem
          checked={showEssayBar}
          onCheckedChange={setShowEssayBar}
        >
         Essay
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={showPoem}
          onCheckedChange={setShowPoem}
        >
          Poem
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={showStory}
          onCheckedChange={setShowStory}
        >
          Story
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterButton