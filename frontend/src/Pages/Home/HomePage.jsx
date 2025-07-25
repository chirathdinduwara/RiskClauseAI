import Header from "../../Components/Home/Header";
import Results from "../../Components/Home/Results";
import UserInputs from "../../Components/Home/UserInputs";
import HelpSection from "../../Components/Home/HelpSection";
import Greeting from "../../Components/Home/Greeting";
import Footer from "../../Components/Home/Footer";
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const HomePage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false); // loading state

    const handleSubmit = async (userInput) => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3003/api/getRiskAnalysis", {
                userText: userInput,
            });

            setAnalysisResult(response.data);
            
            setSubmitted(true);
        } catch (error) {
            toast.error("Server Overloaded! Try Again. 🥺")

        } finally {
            setLoading(false); // stop loading in all cases
        }
    };

    return (
        <div className="h-[100vh] flex flex-col font-regular">
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <div className="flex flex-col gap-3 justify-center flex-1 px-4 md:px-10 lg:px-20 w-full max-w-screen-xl mx-auto">
                {loading && (
                    <div className="flex justify-center items-center h-40">
                        <DotLottieReact
                            src="https://lottie.host/0d02f366-2233-44d9-b393-a2d97a110405/p0ei078Eup.lottie"
                            loop
                            autoplay
                        />

                    </div>
                )}
                {!loading && submitted && <Results data={analysisResult} />}
                {!loading && !submitted && <Greeting />}
                {!loading && !submitted && <HelpSection />}
                <UserInputs onSubmit={handleSubmit} />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
