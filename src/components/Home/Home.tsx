import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <div className="relative bg-gray-300 h-[500px] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl font-bold text-white">
                        Help a child in Uganda <span className="text-green-400">REACH</span> for a better future.
                    </h1>
                    <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
                        Sponsor A Student
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;