import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import "./index.css";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar/>
            <div className="bg-gray-500">
                <a className="font-bold font-serif"> Hello World! </a>
            </div>
        </Router>
    );
};

export default App;
