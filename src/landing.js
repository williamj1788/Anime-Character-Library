import React from 'react';

const style = {
    backgroundImage: "url(../pictures/Top-Backgournd.jpg)",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    width: "100%",
    height: "835px"
}
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
            <div style={style}>
                <h2 style={headStyle}>Anime Character Library</h2>
                <h3 style={subHeadStyle}>View Characters from Popular Animes like</h3>
                <h5 style={linkStyle}>Tokyo Ghoul</h5>
                <h5 style={linkStyle}>My Hero Academia</h5>
                <h5 style={linkStyle}>One Punch Man</h5>
            </div>
        )
    }
}
export default Landing;