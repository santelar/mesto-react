import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import trash from '../images/trash.svg';

function Card({ 
  card,
  onCardClick,
  onCardLike,
  onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  //Класс кнопки удаления карточки в зависимости от того наша или нет//
  const cardDeleteButtonClassName = (
  `card__trash ${isOwn ? 'card__trash_visible' : 'card__trash_hidden'}`
  );

  //Класс кнопки лайка в зависимости от нажата/нет //
  const cardLikeButtonClassName = (
    `button__like ${isLiked ? 'button__like_activ' : ''}`
    );

  return (
    <div className="card">
      <img src={card.link} className="card__image" alt="Фотография" onClick={handleCardClick} />
      <button type="button" className="button button__delete" onClick={handleDeleteClick}>
        <img src={trash} className={cardDeleteButtonClassName} alt="Удалить" />
      </button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;