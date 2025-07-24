import { useState } from 'react';
import { GrLinkUp } from "react-icons/gr";

const UserInputs = ({ onSubmit }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Submitted:", userInput);

        // You can also do API calls or validation here
        if (userInput.trim() !== "") {
            onSubmit(); 
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col min-w-[75vw] bg-gradient-to-b to-[#253534] from-0% p-5'
        >
            <input
                className="w-full h-[50px] border-0 border-b border-b-[#ffffff27] bg-transparent text-white px-2 focus:outline-none"
                type="text"
                placeholder='Enter Text Here...'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />

            <button
                type="submit"
                className='bg-[#01D6C8] w-[40px] h-[40px] flex items-center justify-center mt-4 rounded-full cursor-pointer'
            >
                <GrLinkUp />
            </button>
        </form>
    );
};

export default UserInputs;
