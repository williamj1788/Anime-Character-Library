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
                <div className="info-container">
                    <div className="row">
                        <p className="info-age title">Age:</p>
                        <p className="info-age">Age</p>
                    </div>
                    <div className="row">
                        <p className="info-age title">Power:</p>
                        <p className="info-age">Power</p>
                    </div>
                    <p className="info-history">History</p>
                    <p className="info-history-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Aenean id nisi sed est dictum pretium. 
                    Ut justo urna, hendrerit suscipit imperdiet vitae, tincidunt laoreet 
                    enim. Aenean sit amet lorem in elit hendrerit suscipit vel quis purus.
                    Nullam eget sem malesuada, maximus arcu quis, faucibus orci. Mauris 
                    ultrices magna libero, id imperdiet ipsum viverra nec. Donec finibus
                    massa diam, id ornare nulla accumsan sit amet. Sed in interdum eros.
                    Fusce id elit at mauris placerat luctus in vel leo. Proin bibendum
                    nunc mi, facilisis ullamcorper elit porta non. Sed convallis, nunc
                    non aliquam tristique, ante elit varius sapien, in sagittis eros.</p>
                </div>
                <div style={{height: "1px"}}></div>
            </div>
        )
    }
}
export default GhoulChar;