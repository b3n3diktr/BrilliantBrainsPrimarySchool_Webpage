import React from 'react';
import Boys_Patron_Michael from "../../../pictures/Staff_old/Boys_Patron_Michael.png";
import CoDirector_Esther from "../../../pictures/Staff_old/Co-Director_Esther.png";
import Cook_Robert from "../../../pictures/Staff_old/Cook_Robert.png";
import Cooking_Chef_Grandma from "../../../pictures/Staff_old/Cooking_Chef_Grandma.png";
import Director_Gideon from "../../../pictures/Staff_old/Director_Gideon.png";
import Driver_Albert from "../../../pictures/Staff_old/Driver_Albert.png";
import Headteacher_Daniel from "../../../pictures/Staff_old/Headteacher_Daniel.png";
import School_Doctor_Susan from "../../../pictures/Staff_old/School_Doctor_Susan.png";
import Teacher_Gloria from "../../../pictures/Staff_old/Teacher_Gloria.png";
import Tr_Ben from "../../../pictures/Staff_old/Tr._Ben.png";
import Tr_Francis from "../../../pictures/Staff_old/Tr._Francis.png";
import Tr_Janet from "../../../pictures/Staff_old/Tr._Janet.png";
import Tr_Patience from "../../../pictures/Staff_old/Tr._Patience.png";
import Tr_Stellah from "../../../pictures/Staff_old/Tr._Stellah.png";
import Volunteer_Caesalie from "../../../pictures/Staff/Volunteer_Caesalie.png";
import Volunteer_Helen from "../../../pictures/Staff/Volunteer_Helen.png";

const Staff: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mx-auto max-w-7xl p-10">
                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Director_Gideon} alt="Director Gideon" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Director Gideon</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={CoDirector_Esther} alt="Co-Director Esther" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Co-Director Esther</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Headteacher_Daniel} alt="Headteacher Daniel" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Headteacher Daniel</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Tr_Ben} alt="Tr. Ben" className="rounded-lg shadow-mt" />
                    <div className="p-4"><h3 className="text-lg font-semibold text-gray-800">Tr. Ben</h3></div>
                    <div className="text-gray-600 italic">
                        <p>“I chose Brilliant Brains because I found it is a good project where I can achieve my dreams!”</p>
                    </div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Tr_Janet} alt="Tr. Janet" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Tr. Janet</a></div>
                    <div className="text-gray-600 italic">
                        <p>“I chose Brilliant Brains because I support the project and I wanted to impact knowledge to the vulnerable children of Brilliant Brains.”</p>
                    </div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Tr_Stellah} alt="Tr. Stellah" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Tr. Stellah</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Tr_Patience} alt="Tr. Patience" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Tr. Patience</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Teacher_Gloria} alt="Teacher Gloria" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Teacher Gloria</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Tr_Francis} alt="Tr. Francis" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Tr. Francis</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Volunteer_Caesalie} alt="Volunteer Cäsalie" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Volunteer Cäsalie</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Volunteer_Helen} alt="Volunteer Helen" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Volunteer Helen</a></div>
                    <div className="text-gray-600 italic">
                        <p>“I wanted to experience the differences of the educational systems while being able to share my love and knowledge with the brilliant brains and in return getting to learn from them.”</p>
                    </div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Driver_Albert} alt="Driver Albert" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Driver Albert</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Boys_Patron_Michael} alt="Boys Patron Michael" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Boys Patron Michael</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Cooking_Chef_Grandma} alt="Cooking Chef Grandma" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Cooking Chef Grandma</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={Cook_Robert} alt="Cook Robert" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>Cook Robert</a></div>
                </div>

                <div className="border shadow p-4 text-center rounded-xl flex flex-col items-center">
                    <img src={School_Doctor_Susan} alt="School Doctor Susan" className="rounded-lg shadow-mt" />
                    <div className="p-4"><a>School Doctor Susan</a></div>
                </div>
            </div>
        </div>
    );
}

export default Staff;
