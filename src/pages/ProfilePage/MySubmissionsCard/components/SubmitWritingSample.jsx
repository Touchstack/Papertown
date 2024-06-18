import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import SuccessModal from "./modal/SuccessModal";


const SubmitWritingSample = ({onBackClick}) => {
   const [showModal, setShowModal] = useState(false)
    
   const form = useForm({
        defaultValues:{
            title: '',
            response: '',
            file: '',
        } 
    })
   
    function onSubmit(data) {
       console.log(data);
       setShowModal(true);
      }

  const handleClick = () => {
     onBackClick(false)
  }

  return (
    <div>
      <div className="flex flex-col space-x-3">
        <div onClick={handleClick} className="flex items-center hover:cursor-pointer">
         <IoIosArrowBack size={30} />
          <h1 className="md:text-[36px] text-[26px] font-Bold">
             Submit your writing sample
          </h1>
        </div>
      </div>
       
     <div className="p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Enter the title of your submission</FormLabel>
                <FormControl>
                    <Input placeholder="Title goes here" className={'md:w-3/6 h-[50px] bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="response"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Type your response</FormLabel>
                <FormControl>
                    <Textarea placeholder="Start typing" className={'md:w-3/6 h-[100px] bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />

           <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Upload a pdf of your response </FormLabel>
                <FormControl>
                  <Input type="file" accept=".pdf" className={'md:w-2/6'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className={"bg-[#DF327B] text-VarelaRegular rounded-[50px] h-[54px] font-Bold text-white w-3/6"}>Submit</Button>
        </form>
        </Form>
    </div>
    
    {showModal && 
      <SuccessModal onClose={setShowModal} />
    }
  </div>
  )
}

export default SubmitWritingSample