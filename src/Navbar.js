import React from 'react';

class Navbar extends React.Component{

    render(){
        return(
            <div style={{position: "fixed",width: "100%",zIndex: "10"}}>
                <nav id="navbar">
                    <div id="Logo">
                        <img src="../pictures/Icon.jpg" style={{height: 42,width: 42}}></img>
                        <h1 id="nav-title">QuezSite</h1>
                    </div>
                    <div id="links">
                        <a href="#"><h3 className="nav-link">Tokyo Ghoul</h3></a>
                        <a href="#"><h3 className="nav-link">My Hero Academia</h3></a>
                        <a href="#"><h3 className="nav-link">One Punch Man</h3></a>
                    </div>
                </nav>
            </div>
        )
    }    
}
export default Navbar;