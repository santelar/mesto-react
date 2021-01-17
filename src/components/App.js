import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  //Хуки состояния - для открытия попапов//
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //Хук для выбора карточки - для большой картинки//
  const [selectedCard, setSelectedCard] = useState(null);

  //Функция для состояния попап//
  function handleCardClick(props) {
    setSelectedCard(props);
  }

  //Открытие попапов//
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  //Закрытие попапов//
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <div className="App">
      <Header />

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      /> 
      
      <Footer />

      <PopupWithForm 
        title="Редактировать профиль"
        name="user"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          required
          autoComplete="off"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          className="popup__input popup__input_name popup__input_name-profile"
          id="name"
          name="name"
        />
        <span
          id="name-error"
          className="error">
        </span>
        <input
          type="text"
          required autoComplete="off"
          minLength="2" maxLength="200"
          placeholder="Род деятельности"
          className="popup__input popup__input_description popup__input_description-profile"
          id="job"
          name="info"
        />
        <span
          id="job-error"
          className="error">
        </span>
        <button
          type="submit"
          className="popup__save">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm 
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          required
          autoComplete="off"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="popup__input popup__input_name popup__input_name-card"
          id="picName"
          name="name"
        />
        <span
          id="picName-error"
          className="error">
        </span>
        <input
          type="url"
          required
          autoComplete="off"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_description popup__input_url-card"
          id="picLink"
          name="link"
        />
        <span
          id="picLink-error"
          className="error">
        </span>
        <button
          type="submit"
          className="popup__save">
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm 
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          required
          autoComplete="off"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_name popup__input_name-avatar"
          id="picLink"
          name="link"
        />
        <span
          id="picLink-error"
          className="error">
        </span>
        <button
          type="submit"
          className="popup__save">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?" 
        name="confirm"
        onClose={closeAllPopups}
      >
        <button
          type="submit"
          className="popup__save">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />  
    </div>
  );
}

export default App;