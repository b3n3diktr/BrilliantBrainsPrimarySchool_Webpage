// File: src/components/Home.tsx

import React from 'react';
import Brilliant_Brains from "../../pictures/Brilliant_Brains.jpg";

const Home: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Welcome Section */}
            <section className="bg-white py-16 px-8 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Welcome to Brilliant Brains Nursery and Primary School!
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    At Brilliant Brains, we believe that every child is a unique spark waiting to shine.
                    Our school is dedicated to nurturing young minds through a holistic, child-centered approach
                    to education. We provide a safe, inclusive, and stimulating environment where curiosity is
                    celebrated and learning is limitless.
                </p>
            </section>

            {/* Full-Width Image Section */}
            <section className="flex item-center justify-center w-full">
                <img
                    src={Brilliant_Brains}
                    alt="Brilliant Brains School"
                    className="w-1/2 h-1/2 object-cover"
                />
            </section>

            {/* Vision and Mission Section */}
            <section className="bg-gray-50 py-16 px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            We envision a world where every vulnerable child is holistically educated and empowered,
                            with access to quality education and life skills. This will enable them to escape poverty
                            and integrate into society successfully.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            We work with families, communities, and partners to educate responsible lifelong learners
                            by supporting each child’s moral, intellectual, social, emotional, and physical development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white py-16 px-8">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Values</h3>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                    {[
                        { title: "Personalized Learning", description: "We commit to knowing every student as an individual to support personalized learning experiences." },
                        { title: "Accountability and Flexibility", description: "We value every person, place, and resource to ensure effective and efficient growth within the school community." },
                        { title: "Integration", description: "We value relationships between programs and people to foster a successful and unified learning environment." },
                        { title: "Diversity", description: "We celebrate diversity and seek to understand each person’s uniqueness, enriching our community and learning journey." },
                    ].map((value, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                            <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
