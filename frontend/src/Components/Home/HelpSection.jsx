import HelpCard from "./Utils/HelpCard";

const HelpSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-10 sm:gap-10 md:gap-10 lg:gap-10 ">
            <HelpCard bg={' bg-gradient-to-b from-0% to-[#0D1F1E] '} heading={'Content Help'} desc={'JHDSJDJSDJSNJSNJN'}/>
            <HelpCard bg={' bg-gradient-to-b from-0% to-[#1C0F0D] '} heading={'Content Help'} desc={'JHDSJDJSDJSNJSNJN'}/>
            <HelpCard bg={' bg-gradient-to-b from-0% to-[#0E1D08] '} heading={'Content Help'} desc={'JHDSJDJSDJSNJSNJN'}/>
        </div>
    );
};

export default HelpSection;
