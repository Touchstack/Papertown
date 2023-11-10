import React from 'react'
import Carousel from './Carousel';
import UIfix from './UIfix';

/*const FileInput = () => {
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        console.log('Selected file:', selectedFile.name);
      }
    } 
     ;*/
const SubmitComponent = () => {
  return (
    <div>
          <div>
  <main className="min-h-screen flex items-center justify-center bg-[#52B4AE1A]">
    <form className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
      <h1 className="text-4xl font-Bold text-center pb-6 sm:pb-12">
        Submit your work here
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <label className="block text-sm pb-2" htmlFor="Firstname">
            First name
          </label>
          <input
            className="border-gray-500 rounded-md p-2 w-full sm:w-500px"
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
            className="border-gray-500 rounded-md p-2 w-full sm:w-500px"
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
            className="border-gray-500 rounded-md p-2 w-full sm:w-500px"
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
            className="border-gray-500 rounded-md p-2 w-full sm:w-500px"
            type="text"
            name="number"
            placeholder="Please input your contact number"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm pb-2 mt-5" htmlFor="email">
            Email address
          </label>
          <input
            className="border-gray-500 rounded-md p-2 w-full"
            type="text"
            name="email"
            placeholder="name@domain.com"
          />
        </div><br/>
        <div>
          <label className="block text-sm pb-2">School</label>
          <input
            className="border-gray-500 rounded-md p-2 w-full"
            type="text"
            name="email"
            placeholder="eg. Mirabel Complex"
          />
        </div><br/>
        <div>
          <label className="block text-sm pb-2 sm:inline-flex">
            Upload a pdf or Word document of your writeup
          </label><br/>
          <input
            className="border-dashed border-gray-500 w-full bg-white rounded-lg border p-2 sm:w-1/2"
            accept=".pdf, .doc, .docx"
            type="file"
          />
        </div>
      
      <button
        type="submit"
        className="bg-[#099B96] font-SemiBold text-white py-3 mt-6 rounded-full w-1/2"
      >
        Submit my writeup
      </button>
    </form>
  </main>

  <div className="mt-4 py-8 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
    <div className="font-Bold text-center w-[558px] text-black text-[42px]">
      Don't take our word for it. Hear what our past and current writers have to say
    </div>
    <div className="text-center sm:text-left">
      <p className="text-sm font-Regular">
        Writers will identify their favorite sensory memories and transfer them to a visual heart map.
      </p>
      <div className="flex flex-col items-center">
        <img src="src/assets/unsplash_4LunKr1gTd8.png" alt="Profile Picture" className="w-[39px] h-[39px] rounded-full border border-amber-400 inline-block" />
        <span className="text-sm">Enoch Charway</span>
      </div>
    </div>
  </div>
  
</div><UIfix/></div>
  )
}
export default SubmitComponent;