import React from 'react';


class Ghoul extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(){
        this.props.onClick();
    }


    render(){
        return(
            <div id="ghoul-container">
                <h2 className="sub-title">Tokyo Ghoul</h2>
                <button className="char-button" onClick={this.handleOnClick}>View Character</button>
            </div>
        )
    }
}
export default Ghoul;