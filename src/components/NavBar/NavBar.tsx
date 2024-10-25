import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return(
      <div>
          <nav className={"sticky top-0 w-full z-50"}>
              <ul className={"flex justify-end items-center w-full list-none"}>
                  <li className={"mr-auto p-4"}><Link to='/'>(Logo)</Link></li>
                  <div className={"flex flex-wrap space-x-4 mr-12"}>
                      <li className="hover:bg-gray-200 p-2 rounded">
                          <Link to='/programs'>Programs</Link>
                      </li>
                      <span className={"border-l border-gray-300 border-"}></span>
                      <li className="hover:bg-gray-200 p-2 rounded">
                          <Link to='/Sponsor'>Sponsor</Link>
                      </li>
                      <span className={"border-l border-gray-300 border-"}></span>
                      <li className="hover:bg-gray-200 p-2 rounded">
                          <Link to='/about'>About</Link>
                      </li>
                      <span className={"border-l border-gray-300 border-"}></span>
                      <li className="hover:bg-gray-200 p-2 rounded">
                          <Link to='/contact'>Contact</Link>
                      </li>
                  </div>
              </ul>
          </nav>
      </div>
    );
}

export default NavBar;