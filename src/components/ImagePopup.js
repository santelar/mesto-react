import React from 'react';
import buttonPlus from '../images/add-button__plus.svg';

function ImagePopup({ card, onClose }) {

  return (
    <div className={`popup popup__image" ${card && 'popup_opened'}`}>
      <div className="popup__image-button">
        <button type="button" className="button" onClick={onClose}><img src={buttonPlus} 
          alt="Закрыть" className="popup__close popup__close_image" /></button>
        <h2 className="popup__image-name">{card ? card.name : ""}</h2>
          <img src={card ? card.link : ""} className="popup__image-place" alt={card ? card.name : ""} />
      </div>
    </div>  
  );
}

export default ImagePopup;