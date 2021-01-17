import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

import load from '../images/editAvatar.svg';
import profileEdit from '../images/profile__edit.svg';
import buttonPlus from '../images/add-button__plus.svg';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  //Хуки начальный данных профайла//
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  //Хуки эффектов - загрузка начальных данных//
  //Профиля и карточек//
  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch((error) => console.error(error))
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch((error) => console.error(error))
}, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={`${userAvatar}`} alt="Аватар" className="profile__avatar" />
          <img src={load} alt="Редактирование аватара" onClick={onEditAvatar} className="profile__avatar-load" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" onClick={onEditProfile} className="button"><img src={profileEdit} alt="Изм."
            className="profile__edit" /></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="button button_add_card"><img src={buttonPlus} alt="Добавить"
          onClick={onAddPlace} className="profile__add-button" /></button>
      </section>

      <section className="elements">
        {
          cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;