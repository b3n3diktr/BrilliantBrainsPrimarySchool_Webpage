import React from 'react';

const History: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <header className="relative bg-gray-300 h-[300px] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Our History</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Learn about the journey of Brilliant Brains Nursery and Primary School.
                    </p>
                </div>
            </header>

            {/* Founding Story */}
            <section className="py-16 px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
                    <p className="text-gray-600">
                        The construction of the school started in November 2015 and opened in February 2016. Locally
                        available materials were used to create a conducive learning environment at a cheaper cost,
                        thus bringing quality and affordable education closer to the local community.
                    </p>
                    <blockquote className="italic text-gray-600 mt-4">
                        "Only 1 in 5 primary aged children in rural areas of Busokwa attend and successfully complete
                        Primary school Level of Education" - Community Needs Assessment Report 2008.
                    </blockquote>
                    <p className="text-gray-600 mt-4">
                        Five new semi-permanent buildings which house 11 classrooms and a staff room were built. One
                        water supply tank and a block of four toilets were constructed.
                    </p>
                    <p className="text-gray-600 mt-4">
                        The school started with 80 children in 2016, and the number has since then increased to 400 children,
                        of whom 60 are total orphans receiving free education, transport, break tea, books, and uniforms. The
                        number is expected to increase in the following years due to the great contribution of international
                        volunteers to our community and the project.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Food is served free at Brilliant for all the children. This encourages children to always attend classes
                        and reduces chronic absenteeism. It furthermore motivates school dropouts to come back to school.
                    </p>
                </div>
            </section>

            {/* Problems of Our District */}
            <section className="py-16 px-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Problems of Our District</h3>
                    <p className="text-gray-600 mb-6">
                        A participatory Needs Assessment was carried out by the local leaders and the community in January 2008
                        to identify the needs of Busokwa Community. The community identified six key challenges affecting the
                        overall development of the area. These are:
                    </p>
                    <ul className="space-y-4 text-left text-gray-600 list-disc list-inside max-w-2xl mx-auto">
                        <li>
                            <strong>Education:</strong> Poor quality and inaccessible education opportunities, especially for the girl
                            child and orphans.
                        </li>
                        <li>
                            <strong>Health:</strong> High HIV/AIDS prevalence, especially among youth, along with issues like early
                            pregnancies and malnutrition. Lack of health awareness leads mothers to seek care from untrained
                            Traditional Birth Attendants, resulting in high child and maternal mortality/morbidity rates.
                        </li>
                        <li>
                            <strong>Water:</strong> Inadequate protected water sources force people to fetch water from unprotected
                            sources like wells. There is one community borehole, where people must pay for each jerry can of water.
                        </li>
                        <li>
                            <strong>Electricity Supply:</strong> The community lacks electricity or solar power, hampering development
                            and increasing deforestation as firewood remains the main source of cooking fuel.
                        </li>
                        <li>
                            <strong>Poor Methods of Farming:</strong> Farming is conducted on a subsistence level on small land holdings
                            using poor methods, resulting in improper land utilization.
                        </li>
                        <li>
                            <strong>Roads and Infrastructure:</strong> Community roads are in poor condition, impacting farming, trade,
                            education, and healthcare access, especially during rainy seasons when roads become impassable.
                        </li>
                    </ul>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Following the Needs Assessment, it was observed that orphans, girls, the disabled, children, women,
                        and the elderly are the most affected. In response, the community formed a community-based organization
                        called "Joint Effort for Orphans Transformation" (JE-FORT ORG-UGANDA).
                    </p>
                </div>
            </section>
        </div>
    );
};

export default History;
