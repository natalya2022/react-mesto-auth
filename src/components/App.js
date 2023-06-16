import React, { useState, useEffect } from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [imageData, setImageData] = useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(console.error);
  }, []);

  const handleEditAvatarClick = evt => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = evt => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = evt => {
    setAddPlacePopupOpen(true);
  };

  const handleImagePopupClick = (link, name) => {
    setImagePopupOpen(true);
    setImageData({ link, name });
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .likeCard(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(newCards => {
        setCards(cards => cards.filter(c => c._id !== card._id));
      })
      .catch(console.error);
  }

  function handleUpdateUser(name, about) {
    api
      .editUserProfile(name, about)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleAddPlaceSubmit(item) {
    api
      .addNewCard(item)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateAvatar(avatar) {
    api
      .editUserAvatar(avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <div className="wrap">
            <Header loggedIn={isLoggedIn} />
            {/* <Routes>
              <Route path="/" element={<Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onImagePopup={handleImagePopupClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                cards={cards}
              />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
            </Routes> */}
            <Footer />
          </div>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ImagePopup
            link={imageData.link}
            name={imageData.name}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
