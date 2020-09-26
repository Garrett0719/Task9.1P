import React from 'react';
import '../css/MainImage.css';

function MainImage(props) {
    return(
        <div className="MainImage">
        <img src={require('../image/deakin.jpg')} alt="image" id="image"/>
        <div className='box'>
        <div className='HideText'>
            <p>Welcome to ICrowdTask Application</p>
        </div>
        </div>
        </div>
    )
}
export default MainImage