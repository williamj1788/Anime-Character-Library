import React from 'react';
import Landing from "./landing";
import Ghoul from "./Ghoul";
import Hero from "./Hero";
import Punch from "./Punch";

class Home extends React.Component{
 
    render(){
        return(
            <div>
                <Landing />
                <Ghoul onClick={this.props.toggleDisplay[0]} />
                <Hero />
                <Punch />
            </div>
        )
    }
}
export default Home;