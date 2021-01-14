import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';

import buttonPlus from '../images/add-button__plus.svg';
import trash from '../images/trash.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <PopupWithForm title="11111" name="user">
        <input type="text" required autoComplete="off" minLength="2" maxLength="40"
          className="popup__input popup__input_name popup__input_name-profile" id="name" name="name" />
        <span id="name-error" className="error"></span>
        <input type="text" required autoComplete="off" minLength="2" maxLength="200" className="popup__input
          popup__input_description popup__input_description-profile" id="job" name="info" />
        <span id="job-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm title="222222222" name="place">
        <input type="text" required autoComplete="off" minLength="2" maxLength="30" placeholder="Название"
          className="popup__input popup__input_name popup__input_name-card" id="picName" name="name" />
        <span id="picName-error" className="error"></span>
        <input type="url" required autoComplete="off" placeholder="Ссылка на картинку"
          className="popup__input popup__input_description popup__input_url-card" id="picLink" name="link" />
        <span id="picLink-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm title="халва Обновить аватар" name="avatar">
         <input type="url" required autoComplete="off" placeholder="Ссылка на аватар"
           className="popup__input popup__input_name popup__input_name-avatar" id="picLink" name="link" />
         <span id="picLink-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm title="ну вы блин точно Вы уверены?" name="confirm" />

      <Footer />
      
      <div className="popup popup__image">
        <div className="popup__image-button">
          <button type="button" className="button"><img src={buttonPlus} alt="Закрыть"
            className="popup__close popup__close_image" /></button>
          <h2 className="popup__image-name"></h2>
          <img src="" className="popup__image-place" alt="" />
        </div>
      </div>

      <template className="template">
        <div className="card">
          <img src="" className="card__image" alt="" />
          <button type="button" className="button button__delete"><img src={trash} className="card__trash"
            alt="Удалить" /></button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button type="button" className="button button__like"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </div>
      </template>


    </div>
  );
}

export default App;
