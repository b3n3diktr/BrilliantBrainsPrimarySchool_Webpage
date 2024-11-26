import React from 'react';
import {useNavigate} from "react-router-dom";

const Sponsorship: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <header className="relative bg-gray-300 h-[300px] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Child Sponsorship Program</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Help change a child's life through education and meaningful connections.
                    </p>
                </div>
            </header>

            {/* Donate Button */}
            <section className="py-12 px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Make a Difference Today</h3>
                    <p className="text-gray-600 mb-6">
                        Your contribution can transform the life of a child in need. Join us in making a lasting impact.
                    </p>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        onClick={() => {
                            window.open("https://www.gofundme.com/f/construction-of-the-new-school-building", "_blank");
                        }}
                    >
                        Donate Now
                    </button>
                    <p className="text-gray-500 text-sm mt-4">
                        Donations are processed via GoFundMe. For more information, please see our <a
                        href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                </div>
            </section>


            {/* Introduction */}
            <section className="py-12 px-8 bg-gray-100 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Program Overview</h2>
                    <p className="text-gray-600">
                        The Brilliant Brains Child Sponsorship Program links vulnerable children with international
                        sponsors,
                        offering them an opportunity to access education and a brighter future.
                    </p>
                </div>
            </section>

            {/* Sponsorship Process */}
            <section className="py-12 px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sponsorship Process</h3>
                    <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                        <li>
                            <strong>Team Selection Method:</strong> Our team selects the most vulnerable child from a
                            comprehensive list.
                        </li>
                        <li>
                            <strong>Open Selection Method:</strong> Sponsors can interact with children and choose the
                            one they feel they can support.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Payment Structure */}
            <section className="py-12 px-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Structure</h3>
                    <p className="text-gray-600 mb-8">
                        Sponsors can contribute through various payment options:
                    </p>
                    <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                        <li>Annual Payment: A single payment for the entire year.</li>
                        <li>Semester Payment: Contributions made per semester.</li>
                        <li>Payment Methods: Western Union, EFT, and PayPal (currently piloting).</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                        All transactions are acknowledged with an official school receipt to maintain transparency.
                    </p>
                </div>
            </section>

            {/* Reporting and Communication */}
            <section className="py-12 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reporting and Communication</h3>
                    <p className="text-gray-600 mb-8">
                        Sponsors receive updates about their sponsored child regularly:
                    </p>
                    <ul className="text-left text-gray-600 space-y-4 list-disc list-inside">
                        <li>Detailed performance reports every semester.</li>
                        <li>
                            Direct communication through:
                            <ul className="list-disc list-inside ml-6 space-y-2">
                                <li>Video Calls</li>
                                <li>Letter Writing</li>
                                <li>Photo Sharing</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-12 px-8 bg-gray-100 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <p className="text-gray-600">
                        <strong>Contact Person:</strong> Kamuhanda Gideon - Director
                    </p>
                    <p className="text-gray-600">Telephone: +256 788158032</p>
                    <p className="text-gray-600">Email: brilliantbrainssch16@gmail.com</p>
                    <p className="text-gray-600 mt-6">
                        <strong>Address:</strong> Busokwa Zone, Karambi Ward, North Division, Fort-Portal Tourism City,
                        Uganda.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Sponsorship;
