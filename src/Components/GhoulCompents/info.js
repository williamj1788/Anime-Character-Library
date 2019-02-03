import React from 'react';

export default class Info extends React.Component{
    render(){
        return(
            <div className="info-container">
                <div className="row">
                    <p className="info-age title">Age:</p>
                    <p className="info-age">{this.props.person.age}</p>
                </div>
                <div className="row">
                    <p className="info-age title">Power:</p>
                    <p className="info-age">{this.props.person.power}</p>
                </div>
                <p className="info-history">History</p>
                <p className="info-history-text">{this.props.person.history}</p>
            </div>
        )
    }
}