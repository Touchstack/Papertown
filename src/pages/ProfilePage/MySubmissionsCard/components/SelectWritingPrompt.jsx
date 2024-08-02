import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import SubmitWritingSample from "./SubmitWritingSample";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectWritingPrompt = ({ setIsSubmitting }) => {
  const [onNext, setOnNext] = useState(false);

  function onSubmit(data) {
    console.log(data);
    setOnNext(true);
  }

  const handleGoback = () => {
    setIsSubmitting(false);
  };

  return (
    <div>
      {!onNext ? (
        <div className="bg-white shadow-xl lg:p-10 p-5 md:p-10 rounded-xl lg:w-[973px]  w-[90vw]">
          <div className="md:w-3/6  w-full flex flex-col gap-y-[48px]">
            <div className="flex flex-col space-x-3">
              <div
                onClick={handleGoback}
                className="flex items-center hover:cursor-pointer"
              >
                <IoIosArrowBack size={30} />
                <h1 className="md:text-[36px] text-[20px] font-Bold">
                  Submit your writing
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <p className="font-VarelaRegular text-[14px]">
                Select the category you’re submitting for
              </p>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h1 className="font-Bold text-[20px]">Submission guidelines</h1>
              <div className="mt-3">
                <p>
                  Review our Submission Guidelines{" "}
                  <span className="text-[#52B4AE] hover:underline">
                    <a href="/submit">here</a>
                  </span>
                </p>
              </div>
            </div>
            <Button
              onClick={onSubmit}
              className="bg-[#DF327B] text-[#FFFFFF] w-full h-[50px] font-Bold rounded-[50px]"
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <SubmitWritingSample onBackClick={setOnNext} />
      )}
    </div>
  );
};

export default SelectWritingPrompt;
