import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {

  //Хуки для данных о пользователе//
  const [currentUser, setСurrentUser] = useState('');
  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setСurrentUser(res)
      })
      .catch((error) => console.error(error))
  }, []);

    //Хуки для получения карточек//
    const [cards, setCards] = useState([]);
    useEffect(() => {
      api.getInitialCards()
        .then(res => {
          setCards(res)
        })
        .catch((error) => console.error(error))
  }, []);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    // Обновляем стейт
    setCards(newCards);
    });
  } 

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
      <CurrentUserContext.Provider
        value={currentUser}>
        
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;