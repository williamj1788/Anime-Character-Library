import React from 'react';
import Navbar from "./Navbar";
import Landing from "./landing";
import Ghoul from "./Ghoul";


export class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div id="main">
                    <Landing />
                    <Ghoul />
                </div>
            </div>
        ) 
    }
}
export default App;