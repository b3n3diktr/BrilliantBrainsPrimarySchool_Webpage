import React from 'react';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import Background from "../../pictures/Computer_1.jpeg"

const Volunteering: React.FC = () => {
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
                    <div className="relative z-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold">Volunteering</h1>
                        <p className="mt-4 max-w-xl mx-auto text-lg">
                            Join us in making a difference! Learn about our volunteer requirements, tasks, and how you
                            can help.
                        </p>
                    </div>
                </header>

                {/* Introduction */}
                <section className="py-12 px-8 bg-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction to the Project</h2>
                        <p className="text-gray-600">
                            Upon arrival, volunteers will be oriented on their responsibilities and the operations of
                            the project. A daily activity schedule will be created, and the directors
                            will be available to support volunteers in any way possible. The brilliant minds of
                            Brilliant Brains are excited to meet you and share their love and joy!
                        </p>
                    </div>
                </section>

                {/* Volunteer Requirements */}
                <section className="py-12 px-8 bg-gray-100 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer Requirements</h3>
                        <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                            <li>At least 18 years and above.</li>
                            <li>Open to all genders, expertise, and languages.</li>
                            <li>Must be able to communicate in English to some degree.</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            <strong>Possible Working Hours:</strong> Monday to Friday from 9:00 AM - 3:00 PM. Volunteers
                            are welcome to stay longer if they wish.
                        </p>
                    </div>
                </section>

                {/* Volunteer Tasks */}
                <section className="py-12 px-8 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer Tasks</h3>
                        <p className="text-gray-600 mb-8">
                            Our project is rich in various activities for volunteers and open to new innovations. Some
                            of the activities include:
                        </p>
                        <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                            <li>Assist teachers in teaching schemes, marking assessments, and lesson planning.</li>
                            <li>Establish, promote, and teach foreign languages and engage in local language exchange.
                            </li>
                            <li>Play with children and manage personal hygiene and general sanitation.</li>
                            <li>Promote menstrual hygiene for girls.</li>
                            <li>Help in establishing and training a school band.</li>
                            <li>Assist in creating and running a Music, Dance, and Drama Club.</li>
                            <li>Promote the project internationally by networking and sharing experiences online.</li>
                            <li>Provide individualized support for slow learners to help them catch up.</li>
                            <li>Engage in community support, providing essential needs to vulnerable families.</li>
                            <li>Participate in fundraising for the completion of the children's home, classrooms, and
                                other facilities.
                            </li>
                            <li>Establish a debate club to enhance intellectual competence among students.</li>
                            <li>Update the school's website and social media accounts to keep them active and
                                informative.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-12 px-8 bg-gray-100 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                        <p className="text-gray-600">
                            <strong>Uganda Contact Person:</strong> Kamuhanda Gideon - Director
                        </p>
                        <p className="text-gray-600">Telephone: +256 788158032</p>
                        <p className="text-gray-600">E-Mail: brilliantbrainssch16@gmail.com</p>
                        <p className="text-gray-600 mt-6">
                            <strong>Physical Address:</strong> The school is located in Busokwa Zone, Karambi Ward,
                            North Division,
                            Fort-Portal Tourism City, Western Uganda, East Africa.
                        </p>
                        <p className="text-gray-600 mt-6">
                            <strong>Registration:</strong> This organization is registered under REG. No.2298 and
                            licensed by the Ministry
                            of Education and Sports in Uganda under license NO. ME/P/9070.
                        </p>
                        <p className="text-gray-600 mt-6">
                            <strong>Post Office Box:</strong> P. O. Box 807, Fort-Portal Tourism City, Uganda, East
                            Africa.
                        </p>
                    </div>
                </section>

                {/* Social Media & Videos */}
                <section className="py-12 px-8 bg-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Us</h3>

                        {/* Social Media Icons */}
                        <div className="mt-4 flex justify-center space-x-6">
                            <a href="https://www.tiktok.com/@brilliantbrains24" target="_blank"
                               rel="noopener noreferrer"
                               className="text-gray-800 hover:text-gray-500">
                                <FaTiktok size={32}/>
                            </a>
                            <a href="https://www.instagram.com/brilliantbrains_school/" target="_blank"
                               rel="noopener noreferrer"
                               className="text-gray-800 hover:text-gray-500">
                                <FaInstagram size={32}/>
                            </a>
                            <a href="https://web.facebook.com/profile.ph?id=100023067344744" target="_blank"
                               rel="noopener noreferrer"
                               className="text-gray-800 hover:text-gray-500">
                                <FaFacebook size={32}/>
                            </a>
                        </div>

                        {/* Embedded Volunteer Videos */}
                        <h4 className="text-xl font-semibold text-gray-800 mt-8">Watch Our Volunteers in Action:</h4>
                        <div className="flex flex-col items-center space-y-4 mt-4">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/rEdp_IEx74g"
                                title="Volunteer Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full max-w-md"
                            ></iframe>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/qfJ9J03bAWc"
                                title="Volunteer Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full max-w-md"
                            ></iframe>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/OdFDRWmAutg"
                                title="Volunteer Video 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full max-w-md"
                            ></iframe>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/idp_del_zuE"
                                title="Volunteer Video 4"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full max-w-md"
                            ></iframe>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/_fgUhWm1BM4"
                                title="Volunteer Video 5"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full max-w-md"
                            ></iframe>
                        </div>
                    </div>
                </section>
        </div>
);
};

export default Volunteering;
