import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">1. Controller of Data Processing</h3>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-600">Primary Contact for Content and Domain</h4>
                    <p className="text-gray-700">Kamuhanda Gideon - Director</p>
                    <p className="text-gray-700">Brilliant Brains Nursery and Primary School</p>
                    <p className="text-gray-700">
                        Phone Number: <a href="tel:+256788158032" className="text-blue-500 hover:underline">
                        +256 788158032
                    </a>
                    </p>
                    <p className="text-gray-700">
                        Email: <a href="mailto:brilliantbrainssch16@gmail.com" className="text-blue-500 hover:underline">
                        brilliantbrainssch16@gmail.com
                    </a>
                    </p>
                    <p className="text-gray-700">Physical Address: Busokwa Zone, Karambi Ward, North Division, Fort-Portal Tourism City, Western Uganda, East Africa</p>
                    <p className="text-gray-700">P. O. Box 807 Fort-Portal Tourism City, Uganda, East Africa</p>
                </div>

                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-600">Technical Contact</h4>
                    <p className="text-gray-700">Benedikt Reich</p>
                    <p className="text-gray-700">
                        Email: <a href="mailto:benedikt.reich05@gmail.com" className="text-blue-500 hover:underline">
                        benedikt.reich05@gmail.com
                    </a>
                    </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">2. Data Collection and Purpose</h3>
                <p className="mt-4 text-gray-700">
                    <strong>Server Log Files:</strong> Our server, managed by the technical contact, may automatically collect and store certain information in server log files, such as IP address, browser type, date and time of access, to ensure security and functionality.
                </p>
                <p className="mt-4 text-gray-700">
                    <strong>Contact Inquiries:</strong> If you contact us via email, we may collect and store your name, email address, and any information provided, solely for the purpose of responding to your inquiry.
                </p>
                <p className="mt-4 text-gray-700">
                    <strong>Cookies and Tracking:</strong> This website does not use tracking tools or cookies to monitor visitor behavior. Any links to external sites, such as GoFundMe, are governed by the privacy policies of those sites.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">3. Legal Basis of Data Processing</h3>
                <p className="mt-4 text-gray-700">
                    Data processing is based on our legitimate interest in maintaining a secure and functional website, as well as responding to user inquiries.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">4. Data Sharing with Third Parties</h3>
                <p className="mt-4 text-gray-700">
                    Personal data will only be shared with third parties if necessary to fulfill a request or due to legal obligations.
                </p>
                <p>
                    **Donations via GoFundMe:** Donations are processed exclusively through the external platform GoFundMe. We do not collect or store any data related to the donation process. Please refer to GoFundMe's Privacy Policy for details on how they handle personal data during the donation process.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">5. Data Retention</h3>
                <p className="mt-4 text-gray-700">
                    Personal data provided by users will be retained only as long as necessary to fulfill the purpose of the request, after which it will be deleted unless legal obligations require further retention.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">6. User Rights</h3>
                <p className="mt-4 text-gray-700">
                    Users have the right to access, correct, delete, or restrict the processing of their personal data. They may also object to data processing or request data portability.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mt-8">7. Contact Information for Privacy Inquiries</h3>
                <p className="mt-4 text-gray-700">For any privacy inquiries or data protection concerns, please contact:</p>
                <p className="text-gray-700">Benedikt Reich (Technical Contact)</p>
                <p className="text-gray-700">
                    Email: <a href="mailto:benedikt.reich05@gmail.com" className="text-blue-500 hover:underline">
                    benedikt.reich05@gmail.com
                </a>
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
