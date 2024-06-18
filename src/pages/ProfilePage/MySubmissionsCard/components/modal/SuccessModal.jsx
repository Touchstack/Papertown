import { FaXmark } from "react-icons/fa6";
import  Celebrate from '@/assets/Images/Celebrate.png'

const SuccessModal = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center">
       <div className="md:p-0 p-10 flex items-center justify-center">
       <div className="md:w-6/12 flex flex-col bg-white  rounded-[25px] z-40">
        <div className="flex justify-end p-5">
          <FaXmark
            className="text-black text-2xl cursor-pointer"
            onClick={() => onClose(false)}
          />
        </div>
        <div className="flex flex-col p-5 items-center justify-center">
           <img src={Celebrate} alt="" className="w-3/12" />
           <h2 className="font-Bold text-[24px] text-center max-w-[268px]">Great! You’ve submitted your writing.</h2>
           <p className="py-6 text-center">
            Your writing sample will be reviewed. Look out for an email notification for updates on your review.
           </p>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default SuccessModal