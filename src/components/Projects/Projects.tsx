import React from 'react';
import Background from "../../pictures/Computer_2.jpeg"

const Projects: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <header className="relative bg-gray-300 h-[300px] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`,
                        filter: "blur(2px)",
                    }}></div>

                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Discover our strategic projects designed to improve the lives of the community in Busokwa.
                    </p>
                </div>
            </header>

            {/* Projects Section */}
            <section className="py-16 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Strategic Projects</h2>
                    <p className="text-gray-600 mb-12">
                        Seven strategic projects have been identified and are now being implemented to improve the
                        standards of living for the people of Busokwa.
                    </p>
                    <ul className="space-y-8 text-left text-gray-600 list-none">
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">1. School Building Project</h3>
                            <p>
                                "Brilliant Brains Nursery and Primary School" was established with 10 classrooms to
                                provide quality education in a conducive learning environment.
                            </p>
                        </li>
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">2. Child Scholarship Program</h3>
                            <p>
                                Orphans receive free education, uniforms, sportswear, school transport, breakfast, and
                                lunch. We also link them to international communities for sponsorship opportunities.
                            </p>
                        </li>
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">3. Construction of an Orphanage</h3>
                            <p>
                                Phase 1 of the orphanage has been completed with roofing. Phase 2 is at the roofing level.
                                Our target is to accommodate more OVCs (Orphans and Vulnerable Children).
                            </p>
                        </li>
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">4. Construction of a Medical Centre</h3>
                            <p>
                                Paul &amp; Martha Medical and Maternity Centre was an ongoing project but was paused due to a
                                lack of resources and volunteers. We also plan to establish a Children’s Clinic at Brilliant
                                Brains School to treat students who cannot go to the town hospital.
                            </p>
                        </li>
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">5. Extension of Hydro Electricity</h3>
                            <p>
                                Electricity poles have been set up at the project site, and electricity is now connected to
                                the school. Every classroom now has its own lightbulb, which is a major achievement.
                            </p>
                        </li>
                        <li className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">6. Water Purification System</h3>
                            <p>
                                A water purification system has been procured, along with two water tanks of 10,000 liters
                                each, serving 400 children with fresh, clean water. This project was made possible through
                                a generous contribution from German VIA volunteers.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Projects;
