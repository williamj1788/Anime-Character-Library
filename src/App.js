import React from 'react';
import Navbar from "./Navbar";
import Landing from "./landing";


export class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div id="main">
                    <Landing />
                </div>
            </div>
        ) 
    }
}
export default App;