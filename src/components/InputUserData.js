import React from 'react';

const InputUserData = () => {
  return (
    <>
      <input
        className="input-box"
        type="email"
        placeholder="Email"
        id="form-login-email"
        name="email"
        required
        //   value={namePlace || ''}
        //   onChange={handleChangeNamePlace}
      />
      <input
        className="input-box"
        type="password"
        placeholder="Пароль"
        id="form-login-password"
        name="password"
        minLength={3}
        maxLength={20}
        required
        //   value={linkPlace || ''}
        //   onChange={handleChangeLinkPlace}
      />
    </>
  );
};

export default InputUserData;