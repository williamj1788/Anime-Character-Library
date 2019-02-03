import React from 'react';
import Card from './Card';
import Info from './info';

class GhoulChar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            self: {
                age: "",
                power: "",
                history: "",
            }
        }
        this.changeSelf = this.changeSelf.bind(this);
    }
    changeSelf(newSelf){
        this.setState({
            self: newSelf,
        })
    }
    render(){
        return(
            <div id="Ghoul-container">
                <div className="char-container">
                    <Card name="Kaneki" img="Kaneki.jpg" age={18} power="Ghoul" onHover={this.changeSelf} />
                    <Card name="Touka" img="touka.jpg" age={17} power="Ghoul" onHover={this.changeSelf} />
                    <Card name="Rize" img="rize.jpg" age={18} power="Ghoul" onHover={this.changeSelf} />
                    <Card name="Amon" img="kotaro.jpg" age={26} power="Human" onHover={this.changeSelf} />
                    <Card name="Juuzou" img="juuzou.png" age={14} power="Human" onHover={this.changeSelf} />
                    <Card name="Akihiro" img="akihiro.jpg" age={50} power="Ghoul" onHover={this.changeSelf} />
                    <Card name="Hideyoshi" img="hideyoshi.jpg" age={17} power="Human" onHover={this.changeSelf} />
                </div>
                <Info person={this.state.self} />
                <div style={{height: "1px"}}></div>
            </div>
        )
    }
}
export default GhoulChar;