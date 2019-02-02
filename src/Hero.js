import React from 'react';

class Hero extends React.Component{
    render(){
        return(
            <div id="hero-container">
                    <h2 className="sub-title">My Hero Academia</h2>
                    <button className="char-button">View Character</button>
            </div>
        )
    }
}
export default Hero;