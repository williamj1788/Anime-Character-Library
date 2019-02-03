import React from 'react';
import Kaneki from './Kaneki';

class GhoulChar extends React.Component{

    render(){
        return(
            <div id="Ghoul-container">
                <div className="char-container">
                    <Kaneki />
                    <Kaneki />
                    <Kaneki />
                    <Kaneki />
                    <Kaneki />
                    <Kaneki />
                    <Kaneki />
                </div>
                
            </div>
        )
    }
}
export default GhoulChar;