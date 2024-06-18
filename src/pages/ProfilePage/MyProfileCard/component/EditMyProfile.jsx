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
import { BsPersonCircle } from "react-icons/bs";

const EditMyProfile = ({ setIsEditing }) => {
  
  const form = useForm({
    defaultValues:{
        first_name: '',
        last_name: '',
        contact_number: '',
        location_of_residence: '',
        bio: '',
        age: '',
        grade: ''
    } 
  })

function onSubmit(data) {
   console.log(data);
  }

  const handleGoback = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div onClick={handleGoback} className="flex items-center hover:cursor-pointer">
          <IoIosArrowBack size={30} />
            <h1 className="text-[36px] font-Bold">
              Edit Profile
            </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
       <BsPersonCircle
          alt=""
          className="lg:w-[113px] lg:h-[113px] w-[100px] h-[100px] "
        />

        <div className="pt-8">
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         <div className="flex gap-4">
          <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className={'text-VarelaRegular'}>First name</FormLabel>
                  <FormControl>
                      <Input placeholder="first name" className={'bg-[#F4F5F7]'} {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className={'text-VarelaRegular'}>Last name</FormLabel>
                  <FormControl>
                      <Input placeholder="last name" className={'bg-[#F4F5F7]'} {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
                )}
              />
          </div>
           <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Contact number</FormLabel>
                <FormControl>
                  <Input placeholder="" className={'bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="location_of_residence"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Location of residence</FormLabel>
                <FormControl>
                  <Input placeholder="" className={'bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
             <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className={'bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Age</FormLabel>
                <FormControl>
                  <Input placeholder="" className={'bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={'text-VarelaRegular'}>Grade</FormLabel>
                <FormControl>
                  <Input placeholder="" className={'bg-[#F4F5F7]'} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className={"bg-[#DF327B] text-VarelaRegular rounded-[50px] h-[54px] font-Bold text-white w-full"}>Submit</Button>
          </form>
         </Form>
        </div>
      </div>
    </div>
  )
}

export default EditMyProfile