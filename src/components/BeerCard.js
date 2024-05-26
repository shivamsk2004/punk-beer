import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
