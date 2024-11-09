import React from 'react';
import Boys_Patron_Michael from "../../../pictures/Staff/Boys_Patron_Michael.png";
import CoDirector_Esther from "../../../pictures/Staff/Co-Director_Esther.png";
import Cook_Robert from "../../../pictures/Staff/Cook_Robert.png";
import Cooking_Chef_Grandma from "../../../pictures/Staff/Cooking_Chef_Grandma.png";
import Director_Gideon from "../../../pictures/Staff/Director_Gideon.png";
import Driver_Albert from "../../../pictures/Staff/Driver_Albert.png";
import Headteacher_Daniel from "../../../pictures/Staff/Headteacher_Daniel.png";
import School_Doctor_Susan from "../../../pictures/Staff/School_Doctor_Susan.png";
import Teacher_Gloria from "../../../pictures/Staff/Teacher_Gloria.png";
import Tr_Ben from "../../../pictures/Staff/Tr._Ben.png";
import Tr_Francis from "../../../pictures/Staff/Tr._Francis.png";
import Tr_Janet from "../../../pictures/Staff/Tr._Janet.png";
import Tr_Patience from "../../../pictures/Staff/Tr._Patience.png";
import Tr_Stellah from "../../../pictures/Staff/Tr._Stellah.png";

const Staff: React.FC = () => {
    return (
        <div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mx-auto max-w-7xl p-10 ">
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Boys_Patron_Michael} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Boys Patron Michael </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={CoDirector_Esther} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Co-Director Esther </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Cook_Robert} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Cook Robert </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Cooking_Chef_Grandma} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Cooking Chef Grandma </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Director_Gideon} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Director Gideon </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Driver_Albert} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Driver Albert </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Headteacher_Daniel} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Headteacher Daniel </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={School_Doctor_Susan} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> School Doctor Susan </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Teacher_Gloria} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Teacher Gloria </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Tr_Ben} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Tr. Ben </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Tr_Francis} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Tr. Francis </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Tr_Janet} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Tr. Janet </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Tr_Patience} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Tr. Patience </a>
                    </div>
                </div>
                <div className="border-2 shadow p-4 text-center rounded-lg flex flex-col  items-center">
                    <img src={Tr_Stellah} alt="Placeholder" className="mt-8"/>
                    <div className="p-4">
                        <a> Tr. Stellah </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Staff;