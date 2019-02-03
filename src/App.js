import React from 'react';
import Navbar from "./Navbar";
import GhoulChar from "./GhoulChar";
import Home from "./Home";
export class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayHome: true,
            displayGhoul: false,
        }
        this.toggleDisplayHome = this.toggleDisplayHome.bind(this);
        this.toggleDisplayGhoul = this.toggleDisplayGhoul.bind(this);
    }
    toggleDisplayHome(){
        this.setState({
            displayHome: true,
            displayGhoul: false,
        })
    }
    toggleDisplayGhoul(){
        this.setState({
            displayHome: false,
            displayGhoul: true,
        })
    }
    
    render(){
        return(
            <div>
                <Navbar />
                <div id="main">
                    {this.state.displayHome && <Home toggleDisplay={[this.toggleDisplayGhoul]} />}
                    {this.state.displayGhoul && <GhoulChar />}
                </div>
            </div>
        ) 
    }
}
export default App;