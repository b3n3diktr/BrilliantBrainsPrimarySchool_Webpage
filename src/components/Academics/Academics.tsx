import React from 'react';
import Football from "../../pictures/Football.jpeg"
import Football2 from "../../pictures/Football2.jpeg"
import Computer1 from "../../pictures/Computer_1.jpeg"
import Computer2 from "../../pictures/Computer_2.jpeg"

const Academics: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="bg-gray-300 h-[300px] flex items-center justify-center text-center relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Football2})`,
                        filter: "blur(2px)",
                    }}></div>

                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Academics</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg">
                        Explore our academic programs and extra-curricular activities designed to develop holistic
                        education.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <section className="p-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    {/* Core Subjects */}
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Core Subjects</h2>
                    <p className="text-gray-600 mb-4">
                        Subjects such as Math, English, Science and Social Studies are obligatory for everyone beginning in P1.
                        All of these are of great importance to establish basic knowledge skills in our brilliant brains.
                    </p>
                </div>
            </section>

            <section className="p-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Clubs and Activities</h2>

                    {/* Language Club */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Language Club</h3>
                        <p className="text-gray-600 mb-4">
                            Thanks to the volunteering program we are able to offer different clubs from time to time.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Depending on the country where our volunteers are coming from we try to let them teach some basic
                            communication skills in their language. That way communication all over the world is made easier.
                            Additionally learning a new language allows you to connect more deeply with a different culture so
                            cultural gaps can be closed. Learning a new language enhances brain function, improves memory,
                            boosts problem-solving skills and sharpens multitasking abilities.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Furthermore, the little successes in learning the language of the volunteers brings the students joy.
                            As well as it allows them to be connected on a deeper level. So far we have been able to teach them some Spanish and German.
                        </p>
                    </div>

                    {/* Computer Class */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Computer Class</h3>
                        <p className="text-gray-600 mb-4">
                            In times of digitalization it is of extreme importance to be able to understand technology
                            and use it.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Since a laptop still seems like magic to these students we try to approach them step by
                            step.
                            Starting with basic skills like writing their names or letters using the keyboard. It is a
                            still a big
                            dream of Brilliant Brains to have a class full of computers so every two students are able
                            to utilize
                            them by themselves. Currently we are working with three laptops supplied by our volunteers
                            which
                            leads to shorter times of usage for the children. Regardless it is important that students
                            learn to
                            use computers because it prepares them for the future whether they pursue careers in
                            technology,
                            business or any other field.
                        </p>
                        <p className="text-gray-600">
                            Our current goal is to teach the students to write a CV so that they can pursue the dreams
                            they have
                            and aren’t stopped by the problems the poverty of our country throws in their direction.
                        </p>
                        <div className="flex space-x-4">
                            <img src={Computer1} alt="Computer1" className="rounded-lg shadow-md object-cover w-1/2 h-64" loading="lazy"/>
                            <img src={Computer2} alt="Computer2" className="rounded-lg shadow-md object-cover w-1/2 h-64" loading="lazy"/>
                        </div>

                    </div>

                    {/* Adolescence Club */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Adolescence Club</h3>
                        <p className="text-gray-600 mb-4">
                            Adolescence Club is a new concept for Brilliant Brains which has only been introduced this year in 2024.
                        </p>
                        <p className="text-gray-600 mb-4">
                            It focuses on the information that should be taught by the school system but since there’s a lack of time
                            it is neglected. The main idea of this club was to teach girls about menstrual hygiene but then we kept
                            coming up with more and more ideas about changes of puberty and adolescence that should be addressed.
                            Therefore our volunteers now try to convey these information’s in form of big sisters in a safe learning
                            environment where privacy is a must.
                        </p>
                        <p className="text-gray-600">
                            The club now focuses on physical and mental changes in boys as well as girls and wants to spread awareness
                            about upcoming changes along with gender-based stigmatizations and try to reveal them. The dialogue between
                            students and teachers is the most important aspect of this class so questions can find their answers.
                        </p>
                    </div>

                    {/* Physical Education */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Physical Education</h3>
                        <p className="text-gray-600 mb-4">
                            While playing football and running around is nothing new to our students, we still haven’t
                            been able to implement
                            it on a regular basis into our everyday life at school. By promoting daily movement in form
                            of dance, games, exercise
                            and stretching with our volunteers, the students learn about the importance of movement.
                        </p>
                        <p className="text-gray-600">
                            It is one of our priorities to help them develop strong muscles and cardiovascular health
                            together with knowledge about
                            their own body and its capabilities. We want them capable of knowing how to move their body
                            not only to be fit but to have
                            it as a coping mechanism. Through sports children learn to work in teams, communicate
                            effectively and develop empathy and
                            respect for others. Just like that their school lifestyle can become a lot easier since
                            there’s aspects of the day to look forward to and clear the brain.
                        </p>
                        <img src={Football} alt="Football" className="rounded-lg shadow-mt"
                             loading="lazy"/>
                    </div>

                    {/* Book Club */}
                    <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Club</h3>
                        <p className="text-gray-600 mb-4">
                            A book club for our children is important because it encourages a love of reading, fosters critical thinking and enhances comprehension skills.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Reading helps them grow in many ways. Especially since we encourage English speaking on the school premises, hearing stories
                            aloud from someone helps improve the pronunciation and vocabulary. It also boosts imagination and creativity by allowing our
                            children to explore different worlds, cultures, and perspectives.
                        </p>
                        <p className="text-gray-600">
                            Through stories, they can experience emotions and situations, helping them understand others and develop empathy. Reading to
                            our brilliant brains also strengthens concentration and focus. When children listen, they practice paying attention for longer
                            periods, which can help in our school lifestyle and other activities. Plus, reading and hearing stories is a fun way to learn
                            new things about the world. Overall, it helps our students become more confident, knowledgeable, and curious, setting a foundation for lifelong learning.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
