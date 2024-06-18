import { useState } from "react";
import Submissions from "./components/Submissions"
import SelectWritingSample from "./components/SelectWritingPrompt"

const MySubmissionsCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="bg-white shadow-xl mb-[15%] rounded-xl lg:w-[973px]  lg:p-10 p-5 md:p-10  w-[90vw]"> 
      {isSubmitting ? (
        <SelectWritingSample setIsSubmitting={setIsSubmitting} /> 
      ) : (
        <Submissions setIsSubmitting={setIsSubmitting} />
      )}
    </div>
  )
}

export default MySubmissionsCard