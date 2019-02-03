import React from 'react';

class GhoulChar extends React.Component{

    render(){
        return(
            <div id="Ghoul-container">
                <div className="char-container">
                    <div className="card">
                        <div className="card-header">
                            <h5>Character</h5>
                        </div>
                        <div className="card-body">
                            <img src="Kaneki.jpg" width="100%" height="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GhoulChar;