import React from 'react';
import trash from '../images/trash.svg';

function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <img src={card.link} className="card__image" alt="Фотография" onClick={handleCardClick} />
      <button type="button" className="button button__delete"><img src={trash} 
        className="card__trash" alt="Удалить" /></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="button button__like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;