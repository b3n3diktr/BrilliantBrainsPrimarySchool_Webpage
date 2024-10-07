import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const App: React.FC = () => {
    return (
        <Router>
            <div className="bg-placeholder bg-cover bg-no-repeat bg-center bg-fixed">
                <a> Hello World! </a>
            </div>
        </Router>
    );
};

export default App;
