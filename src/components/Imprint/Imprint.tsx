import React from 'react';

const Imprint: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Imprint</h2>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">Information according to § 5 TMG</h3>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-600">Primary Contact and Domain Owner:</h4>
                    <p className="text-gray-700">Gideon Kamuhanda</p>
                    <p className="text-gray-700">Busokwa Zone, Karambi Ward North Division</p>
                    <p className="text-gray-700">Fort Portal Tourism City</p>
                    <p className="text-gray-700">Western, 807 Uganda</p>
                    <p className="text-gray-700">Email: <a href="mailto:brilliantbrainssch16@gmail.com" className="text-blue-500 hover:underline">brilliantbrainssch16@gmail.com</a></p>
                </div>

                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-600">Technical Contact:</h4>
                    <p className="text-gray-700">Benedikt Reich</p>
                    <p className="text-gray-700">Email: <a href="mailto:benedikt.reich05@gmail.com" className="text-blue-500 hover:underline">benedikt.reich05@gmail.com</a></p>
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">Disclaimer</h3>
                <p className="mt-4 text-gray-700">
                    This website is intended solely for informational purposes to support the school and its projects in Uganda.
                    The site contains a link to GoFundMe, through which donations to the school are facilitated. The actual
                    donation process is handled entirely by the GoFundMe platform; we have no influence over the process and assume
                    no responsibility for the content or operations on GoFundMe.
                </p>
            </div>
        </section>
    );
};

export default Imprint;
