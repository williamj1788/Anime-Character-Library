import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            self: {
                age: this.props.age,
                power: this.props.power,  
            }
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(){
        this.props.onHover(this.state.self);
    }
    render(){
        return(
            <div className="card" onMouseEnter={this.handleMouseEnter}>
                <div className="card-header">
                    <h5>{this.props.name}</h5>
                </div>
                <div className="card-body">
                    <img src={this.props.img} width="100%" height="100%"></img>
                </div>
            </div>
        )
    }
}
export default Card;