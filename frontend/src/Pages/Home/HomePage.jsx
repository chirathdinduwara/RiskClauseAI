import Header from "../../Components/Home/Header";
import Results from "../../Components/Home/Results";
import UserInputs from "../../Components/Home/UserInputs";
import HelpSection from "../../Components/Home/HelpSection";
import Greeting from "../../Components/Home/Greeting";
import { useState } from "react";

const HomePage = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
    <div className="h-[100vh] flex flex-col font-regular">
        <Header />
        <div className="flex flex-col gap-10 justify-center flex-1 px-4 md:px-10 lg:px-20 py-6 w-full max-w-screen-xl mx-auto">
            <Results />
            {!submitted && <Greeting />}
            {!submitted && <HelpSection />}
            <UserInputs onSubmit={() => setSubmitted(true)} />
        </div>
    </div>
);

};

export default HomePage;
