import React from 'react';
import load from '../../images/editAvatar.svg';
import profileEdit from '../../images/profile__edit.svg';
import buttonPlus from '../../images/add-button__plus.svg';

function Main() {

      function handleEditAvatarClick() {
        document.querySelector('.popup__avatar').classList.add('popup_opened');
    }
    function handleEditProfileClick() {
        document.querySelector('.popup__user').classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup__place').classList.add('popup_opened');
    }

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img src="" alt="Аватар" className="profile__avatar" />
                        <img src={load} alt="Редактирование аватара" onClick={handleEditAvatarClick} className="profile__avatar-load" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" onClick={handleEditProfileClick} className="button"><img src={profileEdit} alt="Изм."
                            className="profile__edit" /></button>
                        <p className="profile__description">Исследователь океана</p>
                    </div>
                    <button type="button" className="button button_add_card"><img src={buttonPlus} alt="Добавить"
                        onClick={handleAddPlaceClick} className="profile__add-button" /></button>
                </section>

                <section className="elements"></section>

            </main>
        </>
    );
}

export default Main;