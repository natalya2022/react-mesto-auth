import React from 'react';
import regfalse from './../images/regfalse.svg';
import regtrue from './../images/regtrue.svg';


const InfoTooltip = ({ onClose, checkRegister, isOpen }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>      
      <div className="popup__container popup_type_register" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose} />
        {checkRegister ? (
          <>
            <img className="popup__image" src={regtrue} alt="" />
            <h2 className="popup__tooltip">Вы успешно зарегистрировались!</h2>
          </>
        ) : (
          <>
            <img className="popup__image" src={regfalse} alt="" />
            <h2 className="popup__tooltip">Что-то пошло не так!<br/>
            Попробуйте еще раз.</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoTooltip;
