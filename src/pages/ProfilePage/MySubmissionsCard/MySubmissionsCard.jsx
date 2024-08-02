import { useState } from "react";
import Submissions from "./components/Submissions"
import SelectWritingSample from "./components/SelectWritingPrompt"

const MySubmissionsCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className=" mb-[15%]"> 
      {isSubmitting ? (
        <SelectWritingSample setIsSubmitting={setIsSubmitting} /> 
      ) : (
        <Submissions setIsSubmitting={setIsSubmitting} />
      )}
    </div>
  )
}

export default MySubmissionsCard