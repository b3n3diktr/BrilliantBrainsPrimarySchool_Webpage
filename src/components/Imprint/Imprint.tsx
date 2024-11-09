import React from 'react';

const Imprint: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-12"><h2
                    className="text-3xl font-bold text-gray-800 mb-6">Imprint</h2><h3
                    className="text-xl font-semibold text-gray-700 mt-8">Information according to § 5 TMG</h3>
                    <div className="mt-4"><h4 className="text-lg font-semibold text-gray-600">Primary Contact and Domain
                        Owner:</h4><p className="text-gray-700">Kamuhanda Gideon - Director</p><p
                        className="text-gray-700">Brilliant Brains Nursery and Primary School</p><p
                        className="text-gray-700">Phone Number: <a href="tel:+256788158032"
                                                                   className="text-blue-500 hover:underline">+256
                        788158032</a></p><p className="text-gray-700">Email: <a
                        href="mailto:brilliantbrainssch16@gmail.com"
                        className="text-blue-500 hover:underline">brilliantbrainssch16@gmail.com</a></p><p
                        className="text-gray-700">Facebook: <a
                        href="https://web.facebook.com/profile.php?id=100023067344744" target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">https://web.facebook.com/profile.php?id=100023067344744</a>
                    </p><p className="text-gray-700">Physical Address: Busokwa Zone, Karambi Ward, North Division,
                        Fort-Portal Tourism City, Western Uganda, East Africa</p><p className="text-gray-700">P. O. Box
                        807 Fort-Portal Tourism City, Uganda, East Africa</p><p className="text-gray-700">Organization
                        Registration Number: REG. No.2298</p><p className="text-gray-700">Licensed by the Ministry of
                        Education and Sports in Uganda under License No. ME/P/9070</p><p
                        className="text-gray-700 font-italic mt-4">Motto: At Brilliant Brains Nursery and Primary
                        School, Education is Our Inheritance and the Sky is the Limit!</p></div>
                    <div className="mt-6"><h4 className="text-lg font-semibold text-gray-600">Technical Contact:</h4><p
                        className="text-gray-700">Benedikt Reich</p><p className="text-gray-700">Email: <a
                        href="mailto:benedikt.reich05@gmail.com"
                        className="text-blue-500 hover:underline">benedikt.reich05@gmail.com</a></p></div>
                    <h3 className="text-xl font-semibold text-gray-700 mt-8">Disclaimer</h3><p
                        className="mt-4 text-gray-700">This website is intended solely for informational purposes to
                        support the school and its projects in Uganda. The site contains a link to GoFundMe, through
                        which donations to the school are facilitated. The actual donation process is handled entirely
                        by the GoFundMe platform; we have no influence over the process and assume no responsibility for
                        the content or operations on GoFundMe.</p></div>
            </section>
        </div>
    );
};

export default Imprint;
