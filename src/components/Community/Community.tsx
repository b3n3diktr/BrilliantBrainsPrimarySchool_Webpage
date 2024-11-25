import React from 'react';

const Community: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <header className="relative bg-gray-300 h-[300px] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Importance of Community Tours</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Discover how our community tours uplift lives and inspire positive change.
                    </p>
                </div>
            </header>

            {/* Introduction */}
            <section className="py-12 px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        At Brilliant Brains School, community tours are a vital part of our mission to uplift
                        standards of living for vulnerable children and their families through education and
                        essential support.
                    </p>
                </div>
            </section>

            {/* Goals of Community Tours */}
            <section className="py-12 px-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why We Conduct Community Tours</h3>
                    <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                        <li>
                            <strong>Inspiration and Motivation:</strong> Sharing our journey and dedication towards
                            uplifting the standards of living for vulnerable people, especially children, through education.
                        </li>
                        <li>
                            <strong>Building Connections:</strong> Community tours foster real connections and
                            understanding between different societal segments, breaking down barriers and fostering empathy.
                        </li>
                        <li>
                            <strong>Providing Immediate Support:</strong> During tours, we distribute essential needs
                            like food, bedding, and clothes alongside long-term educational opportunities.
                        </li>
                        <li>
                            <strong>Identifying Sponsorship Opportunities:</strong> We identify children in need of
                            sponsorship, providing them with access to education and resources.
                        </li>
                        <li>
                            <strong>Addressing School Dropouts:</strong> We motivate children who have dropped out of
                            school to return and continue their education.
                        </li>
                        <li>
                            <strong>Understanding Challenges:</strong> Community tours allow us to experience the
                            struggles faced by vulnerable children, such as long distances they walk to school.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Positive Impact */}
            <section className="py-12 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Positive Impact</h3>
                    <p className="text-gray-600">
                        Community tours at Brilliant Brains are not just about addressing immediate needs—they are
                        about creating a comprehensive approach to improving the lives of vulnerable children.
                        By identifying sponsorship opportunities, providing essential support, and fostering
                        understanding, these tours contribute to building stronger, more compassionate communities.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Through these initiatives, we instill values of giving back and social responsibility,
                        inspiring children and adults alike to create a better future.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-12 px-8 bg-gray-100 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get Involved</h3>
                    <p className="text-gray-600">
                        Join us in our mission to transform lives through education and community support.
                        Contact us to learn more about our community tours or how you can contribute.
                    </p>
                    <p className="text-gray-600 mt-6">
                        <strong>Contact Person:</strong> Kamuhanda Gideon - Director
                    </p>
                    <p className="text-gray-600">Telephone: +256 788158032</p>
                    <p className="text-gray-600">Email: brilliantbrainssch16@gmail.com</p>
                </div>
            </section>
        </div>
    );
};

export default Community;
