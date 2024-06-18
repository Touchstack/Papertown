import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import SubmitWritingSample from "./SubmitWritingSample";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SelectWritingPrompt = ({setIsSubmitting}) => {
  const [onNext, setOnNext] = useState(false)

    const form = useForm({
        defaultValues:{
            prompt: 'Memoir'
        } 
    })
   
    function onSubmit(data) {
       console.log(data);
       setOnNext(true)
      }

      const handleGoback = () => {
        setIsSubmitting(false)  
      }
  

  return (
    <div>
      {!onNext ? (
        <>
          <div className="flex flex-col space-x-3">
         <div onClick={handleGoback} className="flex items-center hover:cursor-pointer">
          <IoIosArrowBack size={30} />
            <h1 className="md:text-[36px] text-[26px] font-Bold">
             Submit your writing sample
            </h1>
          </div>
       </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-4/6 w-6/6 space-y-6 p-4">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select the prompt you’re submitting for</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={'bg-[#F4F5F7]'}>
                        <SelectValue placeholder="Select the prompt" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className={'bg-[#F4F5F7]'}>
                      <SelectItem value="Memoir">Memoir</SelectItem>
                      <SelectItem value="Fiction">Fiction</SelectItem>
                      <SelectItem value="Poem">Poem</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div >
                    <FormDescription className="mt-10">
                      <h1 className="font-Bold text-[20px]">Submission guidelines</h1>
                      <div className="mt-3">
                          <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software.
                          </p>
                          <ol className="list-decimal pl-4">
                            <li>
                              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </li>
                            <li>
                              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                            </li>
                            <li>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            </li>
                          </ol>
                      </div>
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#DF327B] text-[#FFFFFF] w-full h-[50px] font-Bold rounded-[50px]">Next</Button>
          </form>
        </Form>
        </>
      ) : (
        <SubmitWritingSample onBackClick={setOnNext} />
      )}
    </div>
  )
}

export default SelectWritingPrompt