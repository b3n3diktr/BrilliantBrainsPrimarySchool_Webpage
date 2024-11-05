import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>

                {/* Section 1: Controller of Data Processing */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">1. Controller of Data Processing</h3>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-600">Primary Contact for Content and Domain</h4>
                    <p className="text-gray-700">Gideon Kamuhanda</p>
                    <p className="text-gray-700">Busokwa Zone, Karambi Ward North Division</p>
                    <p className="text-gray-700">Fort Portal Tourism City</p>
                    <p className="text-gray-700">Western, 807 Uganda</p>
                    <p className="text-gray-700">Email: <a href="mailto:brilliantbrainssch16@gmail.com" className="text-blue-500 hover:underline">brilliantbrainssch16@gmail.com</a></p>
                </div>

                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-600">Technical Contact for Data Protection</h4>
                    <p className="text-gray-700">Benedikt Reich</p>
                    <p className="text-gray-700">Email: <a href="mailto:benedikt.reich05@gmail.com" className="text-blue-500 hover:underline">benedikt.reich05@gmail.com</a></p>
                </div>

                {/* Section 2: Data Collection and Purpose */}
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

                {/* Section 3: Legal Basis of Data Processing */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">3. Legal Basis of Data Processing</h3>
                <p className="mt-4 text-gray-700">
                    Data processing is based on our legitimate interest in maintaining a secure and functional website, as well as responding to user inquiries.
                </p>

                {/* Section 4: Data Sharing with Third Parties */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">4. Data Sharing with Third Parties</h3>
                <p className="mt-4 text-gray-700">
                    Personal data will only be shared with third parties if necessary to fulfill a request or due to legal obligations. For donations, please refer to the GoFundMe Privacy Policy, as the donation process is managed exclusively by GoFundMe.
                </p>

                {/* Section 5: Data Retention */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">5. Data Retention</h3>
                <p className="mt-4 text-gray-700">
                    Personal data provided by users will be retained only as long as necessary to fulfill the purpose of the request, after which it will be deleted unless legal obligations require further retention.
                </p>

                {/* Section 6: User Rights */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">6. User Rights</h3>
                <p className="mt-4 text-gray-700">
                    Users have the right to access, correct, delete, or restrict the processing of their personal data. They may also object to data processing or request data portability.
                </p>

                {/* Section 7: Contact Information for Privacy Inquiries */}
                <h3 className="text-xl font-semibold text-gray-700 mt-8">7. Contact Information for Privacy Inquiries</h3>
                <p className="mt-4 text-gray-700">
                    For any privacy inquiries or data protection concerns, please contact:
                </p>
                <p className="text-gray-700">Benedikt Reich (Technical Contact)</p>
                <p className="text-gray-700">Email: <a href="mailto:benedikt.reich05@gmail.com" className="text-blue-500 hover:underline">benedikt.reich05@gmail.com</a></p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
