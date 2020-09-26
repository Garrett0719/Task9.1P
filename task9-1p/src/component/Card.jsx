import React from 'react';
import '../css/Requesters.css'

const Card = (props) =>
{
    return <div className='Card'>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
    <p className='description'>{props.description}</p>
    </div>
}

export default Card