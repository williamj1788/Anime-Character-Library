import React from 'react';

const style = {
    backgroundImage: "url(../pictures/Tokyo_Background.jpg)",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    width: "100%",
    height: "635px"
}

class Ghoul extends React.Component{
    render(){
        return(
            <div style={style}>
                <h2 className="sub-title">Tokyo Ghoul</h2>
                <button className=""></button>
            </div>
        )
    }
}
export default Ghoul;