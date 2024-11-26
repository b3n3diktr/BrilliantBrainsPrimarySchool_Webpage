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

            {/* The Brilliant Brains Founder's Charge */}
            <section className="py-16 px-8">
                <div className="max-w-4xl mx-auto text-left">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Director Gideon’s Vision: The Journey Behind Brilliant Brains</h3>
                    <p className="text-gray-600 mt-4">
                        The journey that led me to establish Brilliant Brains Nursery and Primary School for vulnerable children is deeply personal and profoundly influenced by my own experiences and the call for patriotism as enshrined in the Republic of Uganda Constitution.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Growing up as an orphan, I faced numerous challenges that threatened to derail my education and future. However, I was fortunate to receive support from generous individuals and philanthropists who believed in my potential when I had little reason to believe in myself. Their kindness not only helped me finish my primary, secondary, and university education but also instilled in me a powerful desire to give back to the community just like how I was nurtured.
                    </p>
                    <p className="text-gray-600 mt-4">
                        In the primary level of education, I was supported by Kilembe Mines Limited, a copper mining company. With that support, I passed the National Primary Leaving Exams with first grade! Then I went to one of the prestigious boarding schools in Fort Portal called Nyakasura School, where I spent only one year because my father, who survived on a meagre salary from Kilembe Mines, could no longer afford to pay my school fees. I dropped out of school for one year and became a market boy vending pancakes, carrying luggage, and slaughtering fresh fish for sale. It was my mother who worked hard to secure for me a job at Kilembe Secondary School, where I worked as a casual labourer in exchange for school fees. I dug in the school gardens and slashed the school compound for three years until I completed my Ordinary Level of Education with a first grade in 1992. Neighbours were very supportive—they bought me scholastic materials and paid the fee for my final National Ordinary Level Examinations.
                    </p>
                    <p className="text-gray-600 mt-4">
                        I was then picked up by another well-wisher who took me to another prestigious High School for my Advanced Level of Education. The school is called St. Leo's College Kyegobe, a boys-only school. I passed well and secured a government merit scholarship and was enrolled in one of the best universities in Uganda called Makerere University for a Bachelor's Degree course in Arts. Although I cherished studying law and becoming a lawyer to defend the rights of vulnerable people, I couldn't make it because that course required private sponsorship.
                    </p>
                    <p className="text-gray-600 mt-4">
                        After my Bachelor's degree, I secured funding from my employer and was able to proceed to Uganda Management Institute in Kampala, where I successfully pursued a Post Graduate Diploma in Human Resource Management. Going forward, I am optimistic that one day I will secure a scholarship to pursue my Master's abroad!
                    </p>
                    <p className="text-gray-600 mt-4">
                        Meanwhile, I worked part-time in several secondary schools around Kampala City while pursuing my degree course. In 1998, I completed my course and tried to enter the Uganda People's Defence Forces (UPDF) to contribute towards the protection of Ugandans and their property and integrity but was late for registration, thus couldn't make it.
                    </p>
                    <p className="text-gray-600 mt-4">
                        I was recalled by one of the religious Reverends from the Church of Uganda to come to Fort Portal, where he kept me in his home as I started lecturing in several Advanced Level schools around Fort Portal City, trying to earn a living but also looking after my siblings, mother, and distant relatives since my father had long died before my graduation.
                    </p>
                    <p className="text-gray-600 mt-4">
                        With the patriotic spirit, I was able to give back to my community in Kyenjojo by lobbying and working hard on the construction of 46 shallow wells and springs in Mwaro Village. This was done through an NGO called FORUD, in which I was working as a Deputy Programs Coordinator. Furthermore, 13 of my siblings were given education, and my elderly relatives were taken care of until they peacefully passed on. These were my grandmother, uncle, eldest sister, among others.
                    </p>
                    <p className="text-gray-600 mt-4">
                        In 2001, I got formal employment as a Human Resources Officer. In this profession, I have been able to grow through the ranks of Senior HR to Head of HR or Principal HR. I used my savings and first salary to buy land where the Brilliant Brains Children's Centre is constructed and consequently kept enlarging our territory by buying adjacent land on which Brilliant Brains Nursery and Primary School is constructed. In 2008, I got married to my beautiful wife Esther, a professional health worker, who perfectly made a good fit into my vision. Together we continued working on our vision. Esther now supports me as a Co-Director. In 2016, we constructed Brilliant Brains School and enrolled 86 vulnerable children. The number increased to 200, then 500 children. That number was too big, and we reduced it to 430 this year since we don't have any funding.
                    </p>
                    <p className="text-gray-600 mt-4">
                        As a student, I had earlier made a promise to myself that I would create opportunities for vulnerable people, especially women and children, and ensure they have access to quality holistic education, improved standards of living, and the chance to build a brighter future. This promise became the foundation of Brilliant Brains School.
                    </p>
                    <p className="text-gray-600 mt-4">
                        At Brilliant Brains, Brilliant Children's Home, and at Paul and Martha Medical Centre, we aim at breaking the cycle of poverty and vulnerability by empowering people through education, better health care, social services, and teaching them the value of giving back. This approach will create a chain of philanthropy which is most important as a strategy of empowerment, development, and promotion of equity. At Brilliant Brains School, we believe that "Education is our Inheritance," while at Paul and Martha Medical Centre, we believe in "Service beyond Self."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default History;
