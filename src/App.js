import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";

/* Everything is a component just like Angular or Vue */
class App extends React.Component{
    render() {
        return (
            <div className="app">
                <Navbar/>
                <div className="context">
                    <Home/>
                </div>
            </div>
        );
    }


}

export default App;
