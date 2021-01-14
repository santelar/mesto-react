import React from 'react';
import buttonPlus from '../../images/add-button__plus.svg';

function PopupWithForm(props) {





  return (
    <div className={`popup popup__${props.name}`}>
      <div className="popup__container">
        <button type="button" className="button"><img src={buttonPlus} alt="Закрыть"
          className={`popup__close popup__close_${props.name}`} /></button>
        <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
        <form className={`popup__form popup__form_${props.name}`} name={props.name} method="POST">
          {props.children}
          <button type="submit" className="popup__save">{props.answer}</button>
        </form>
      </div>
    </div>
  );


}


export default PopupWithForm;