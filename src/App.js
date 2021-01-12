import './App.css';

function App() {
  return (
    <div className="App">

      <h1>М Е С Т О</h1>
      <h1>М Е С Т О</h1>
      <h1>М Е С Т О</h1>

      <header class="header">
        <img src="<%=require('./images/header__logo.svg')%>" alt="Лого" class="header__logo"/>
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__avatar-container">
            <img src="" alt="Аватар" class="profile__avatar"/>
            <img src="<%=require('./images/editAvatar.svg')%>" alt="Редактирование аватара" class="profile__avatar-load"/>
          </div>
          <div class="profile__info">
            <h1 class="profile__name">Жак-Ив Кусто</h1>
            <button type="button" class="button"><img src="<%=require('./images/profile__edit.svg')%>" alt="Изм."
              class="profile__edit"/></button>
            <p class="profile__description">Исследователь океана</p>
          </div>
          <button type="button" class="button button_add_card"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Добавить"
            class="profile__add-button"/></button>
        </section>
        <section class="elements"></section>
      </main>
      <footer class="footer">
        <p class="footer__title">© 2020 Mesto Russia</p>
      </footer>

      <div class="popup popup__profile">
        <div class="popup__container">
          <button type="button" class="button"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Закрыть"
            class="popup__close popup__close_profile"/></button>
          <h2 class="popup__title popup__title_name">Редактировать профиль</h2>
          <form class="popup__form popup__form_user" id="form-user" name="user" method="POST">
            <input type="text" required autocomplete="off" minlength="2" maxlength="40"
              class="popup__input popup__input_name popup__input_name-profile" id="name" name="name"/>
            <span id="name-error" class="error"></span>
            <input type="text" required autocomplete="off" minlength="2" maxlength="200" class="popup__input
              popup__input_description popup__input_description-profile" id="job" name="info"/>
            <span id="job-error" class="error"></span>
            <button type="submit" class="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      <div class="popup popup__card">
        <div class="popup__container">
          <button type="button" class="button"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Закрыть"
            class="popup__close popup__close_card"/></button>
          <h2 class="popup__title popup__title_card">Новое место</h2>
          <form class="popup__form popup__form_place" name="place" method="POST">
            <input type="text" required autocomplete="off" minlength="2" maxlength="30" placeholder="Название"
              class="popup__input popup__input_name popup__input_name-card" id="picName" name="name"/>
            <span id="picName-error" class="error"></span>
            <input type="url" required autocomplete="off" placeholder="Ссылка на картинку"
              class="popup__input popup__input_description popup__input_url-card" id="picLink" name="link"/>
            <span id="picLink-error" class="error"></span>
            <button type="submit" class="popup__save">Создать</button>
          </form>
        </div>
      </div>
      <div class="popup popup__image">
        <div class="popup__image-button">
          <button type="button" class="button"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Закрыть"
            class="popup__close popup__close_image"/></button>
          <h2 class="popup__image-name"></h2>
          <img src="" class="popup__image-place" alt=""/>
        </div>
      </div>
      <div class="popup popup__avatar">
        <div class="popup__container">
          <button type="button" class="button"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Закрыть"
            class="popup__close popup__close_avatar"/></button>
          <h2 class="popup__title popup__title_avatar">Обновить аватар</h2>
          <form class="popup__form popup__form_avatar" name="avatar" method="POST">
            <input type="url" required autocomplete="off" placeholder="Ссылка на аватар"
              class="popup__input popup__input_name popup__input_name-avatar" id="picLink" name="link"/>
            <span id="picLink-error" class="error"></span>
            <button type="submit" class="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      <div class="popup popup__confirm">
        <div class="popup__container">
          <button type="button" class="button"><img src="<%=require('./images/add-button__plus.svg')%>" alt="Закрыть"
            class="popup__close popup__close_confirm"/></button>
          <h2 class="popup__title popup__title_avatar">Вы уверены?</h2>
          <form class="popup__form popup__form_confirm" name="avatar" method="POST">
            <button type="submit" class="popup__save">Да</button>
          </form>
        </div>
      </div>

      <template class="template">
        <div class="card">
          <img src="" class="card__image" alt=""/>
          <button type="button" class="button button__delete"><img src="<%=require('./images/trash.svg')%>" class="card__trash"
            alt="Удалить"/></button>
          <div class="card__info">
            <h2 class="card__title"></h2>
            <div class="card__like-container">
              <button type="button" class="button button__like"></button>
              <p class="card__like-counter">0</p>
            </div>
          </div>
        </div>
      </template>


    </div>
  );
}

export default App;
