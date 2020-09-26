import React from 'react';
import '../css/Requesters.css';
import Card from './Card';
import RequestersList from '../RequestersList';

const Cardlist = () =>
{  
    return <div className="Cardlist">
    {RequestersList.map((requester) => 
      <Card 
    key = {requester.id}
    avatar = {requester.avatar}
    name = {requester.name}
    description = {requester.description}
  />
)}
     
    </div>
}

export default Cardlist