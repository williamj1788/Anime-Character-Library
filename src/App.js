import React from 'react';
import Navbar from "./Navbar";
import Landing from "./landing";
import Ghoul from "./Ghoul";
import Hero from "./Hero";
import Punch from "./Punch";


export class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div id="main">
                    <Landing />
                    <Ghoul />
                    <Hero />
                    <Punch />
                </div>
            </div>
        ) 
    }
}
export default App;