import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { CiSliderHorizontal } from "react-icons/ci";

const FilterButton = () => {
    const [showAllBar, setShowAllBar] = useState(true)
    const [showEssayBar, setShowEssayBar] = useState(false)
    const [showPoem, setShowPoem] = useState(false)
    const [showStory, setShowStory] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <button
            className="flex gap-5 rounded-[8px]  justify-center items-center py-2 px-6 text-lg border-[1px] border-[#000f] font-Bold"
           >
              <CiSliderHorizontal />
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
         Beginner
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={showPoem}
          onCheckedChange={setShowPoem}
        >
          Senior Intermediate
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuCheckboxItem
          checked={showStory}
          onCheckedChange={setShowStory}
        >
          Junior Advanced
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showStory}
          onCheckedChange={setShowStory}
        >
          Senior Advanced
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FilterButton