import React from 'react';

const headStyle ={
    fontSize: "80px",
    paddingTop: "30px",
    textAlign: "center",
    color: "#04EEF9",
    fontWeight: "bold"
}
const subHeadStyle = {
    fontSize: "40px",
    paddingTop: "30px",
    paddingBottom: "40px",
    textAlign: "center",
    color: "#04EEF9",
    fontWeight: "bold"
}
const linkStyle = {
    fontSize: "40px",
    paddingTop: "10px",
    textAlign: "center",
    color: "#04EEF9"
}

class Landing extends React.Component{
    render(){
        return(
            <div id="landing-container">
                <h2 style={headStyle}>Anime Character Library</h2>
                <h3 style={subHeadStyle}>View Characters From Popular Animes Like</h3>
                <h5 style={linkStyle}>Tokyo Ghoul</h5>
                <h5 style={linkStyle}>My Hero Academia</h5>
                <h5 style={linkStyle}>One Punch Man</h5>
            </div>
        )
    }
}
export default Landing;