import { useState } from 'react';

const Home = () => {
  const [textInput, setTextInput] = useState('');
 
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="px-10 flex flex-row mb-10 gap-[150px]">
      <p className="text-[#000] font-[700]">
        Marque
      </p>

      <div>
        {/* Create an input field here */}
        <input
          type="text"
          value={textInput}
          onChange={handleInputChange}
          className="w-[522px] h-full p-4 rounded-[10px] bg-[#F4F5F7] border-[#F4F5F7]"
          placeholder="Type something..."
        />
      </div>

    </div>
  );
}

export default Home;
