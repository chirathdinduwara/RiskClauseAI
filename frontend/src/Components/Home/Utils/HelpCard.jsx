const HelpCard = ({ bg, heading, desc }) => {
    return (
        <div className={`flex flex-col justify-center p-4 gap-3 text-white w-full sm:w-[250px] rounded-2xl  ${bg}`}>
            <div className="bg-[#B9E2F0] text-[#2E404B] w-fit px-2 py-1 rounded-full text-sm">
                {heading}
            </div>
            <p className="text-sm">{desc}</p>
        </div>
    );
};

export default HelpCard;
