import CountUp from 'react-countup';

const Results = ({ data }) => {

    return (
        <div className="text-white h-[70vh] lg:h-[65vh] overflow-y-auto bg-gradient-to-b from-[#1a2928] to-[#253534] p-5 border border-[#ffffff62] rounded-2xl px-4 md:px-10 lg:px-20 w-full max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">Risk Score: <CountUp end={data.analysis.riskScore ?? 0} duration={1.5} /> %</h2>

            {data.analysis.summary && (
                <div>
                    <h3 className="text-xl font-semibold mb-1">Summary</h3>
                    <p className="text-sm leading-relaxed text-gray-300">{data.analysis.summary}</p>
                </div>
            )}

            {data.analysis.riskyClauses.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold mb-1">Risky Clauses</h3>
                    <ul className="list-disc list-inside text-sm space-y-2 text-red-300">
                        {data.analysis.riskyClauses.map((item, index) => (
                            <li key={index}>
                                <span className="font-medium text-white">{item.clause}:</span> {item.explanation}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data.analysis.recommendations.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold mb-1">Recommendations</h3>
                    <ul className="list-disc list-inside text-sm space-y-2 text-green-300">
                        {data.analysis.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export default Results;