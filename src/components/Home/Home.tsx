import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <div>
                    <section className="bg-white py-16 px-8 text-center"><h2
                        className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Brilliant Brains Nursery and
                        Primary School!</h2><p className="text-gray-600 max-w-3xl mx-auto">At Brilliant Brains, we
                        believe that every child is a unique spark waiting to shine. Our school is dedicated to
                        nurturing young minds through a holistic, child-centered approach to education. We provide a
                        safe, inclusive, and stimulating environment where curiosity is celebrated and learning is
                        limitless.</p></section>
                    <section className="bg-gray-50 py-16 px-8">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div><h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3><p
                                className="text-gray-600">We envision a world where every vulnerable child is
                                holistically educated and empowered, with access to quality education and life skills.
                                This will enable them to escape poverty and integrate into society successfully.</p>
                            </div>
                            <div><h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3><p
                                className="text-gray-600">We work with families, communities, and partners to educate
                                responsible lifelong learners by supporting each child’s moral, intellectual, social,
                                emotional, and physical development.</p></div>
                        </div>
                    </section>
                    <section className="bg-white py-16 px-8"><h3
                        className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Values</h3>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                            <div className="bg-gray-100 p-6 rounded-lg shadow"><h4
                                className="font-semibold text-gray-800 mb-2">Personalized Learning</h4><p>We commit to
                                knowing every student as an individual to support personalized learning experiences.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow"><h4
                                className="font-semibold text-gray-800 mb-2">Accountability and Flexibility</h4><p>We
                                value every person, place, and resource to ensure effective and efficient growth within
                                the school community.</p></div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow"><h4
                                className="font-semibold text-gray-800 mb-2">Integration</h4><p>We value relationships
                                between programs and people to foster a successful and unified learning environment.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow"><h4
                                className="font-semibold text-gray-800 mb-2">Diversity</h4><p>We celebrate diversity and
                                seek to understand each person’s uniqueness, enriching our community and learning
                                journey.</p></div>
                        </div>
                    </section>
                    <section className="bg-gray-100 py-16 px-8 flex items-center justify-center">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center"><span
                                className="text-gray-500">Image of Brilliant Brains School</span></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Home;