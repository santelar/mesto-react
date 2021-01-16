import React from 'react';
import {api} from '../../utils/api';
import load from '../../images/editAvatar.svg';
import profileEdit from '../../images/profile__edit.svg';
import buttonPlus from '../../images/add-button__plus.svg';

function Main(props) {

  //Хуки начальный данных профайла//
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <div style={{ backgroundImage: `url(${userAvatar})` }}  alt="Аватар" className="profile__avatar"></div>
            <img src={load} alt="Редактирование аватара" onClick={props.onEditAvatar} className="profile__avatar-load" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" onClick={props.onEditProfile} className="button"><img src={profileEdit} alt="Изм."
              className="profile__edit" /></button>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button type="button" className="button button_add_card"><img src={buttonPlus} alt="Добавить"
            onClick={props.onAddPlace} className="profile__add-button" /></button>
        </section>

        <section className="elements"></section>

      </main>
    </>
  );
}

export default Main;