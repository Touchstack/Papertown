import React from "react"
const DetailsForm = () => {
  return (
    <div> 
        <form className="w-full  rounded-lg p-6">
    <h1 className="text-4xl font-Bold text-center pb-6 sm:pb-12 mt-5 sm:text-left">
     Register to attend
    </h1>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-8">
      <div>
        <label className="block text-sm pb-2" htmlFor="Firstname">
          First name
        </label>
        <input
          className="border-gray-500 bg-neutral-200 rounded-md p-2 w-[200px] h-[50px] sm:w-100px"
          type="text"
          name="Firstname"
          placeholder="Mary"
        />
      </div>
      <div>
        <label className="block text-sm pb-2" htmlFor="Lastname">
          Last name
        </label>
        <input
          className="border-gray-500 bg-neutral-200 rounded-md focus:outline-black p-2 w-[200px] h-[50px] sm:w-100px"
          type="text"
          name="Lastname"
          placeholder="Njoku"
        />
      </div>
      <div>
        <label className="block text-sm pb-2" htmlFor="age">
          Age
        </label>
        <input
          className="border-gray-500 bg-neutral-200  rounded-md p-2 w-[200px] h-[50px] sm:w-100px"
          type="text"
          name="age"
          placeholder="Please input your age here"
        />
      </div>
      <div>
        <label className="block text-sm pb-2" htmlFor="number">
          Contact Number
        </label>
        <input
          className="border-gray-500 bg-neutral-200 rounded-md p-2 w-[200px] h-[50px] sm:w-100px"
          type="text"
          name="number"
          placeholder="Please input your contact number"
        />
      </div>
    </div>
    <div className="grid">
      <label className="block text-sm pb-2 mt-5" htmlFor="email">
        Email address
      </label>
       <input
          className="border-gray-500 bg-neutral-200 rounded-md p-2 w-[200px] h-[50px] sm:w-100px"
          type="text"
        name="email"
        placeholder="name@domain.com"
      />
    </div>
    <button
      type="submit"
      className="bg-[#099B96] font-Bold w-[250px] h-[45px] px-[30px] py-2.5 gap-2.5 justify-center text-center inline-flex text-white mt-10 mb-10 rounded-full"
    >
      Register
    </button>
  </form>
</div>
  )
}

export default DetailsForm