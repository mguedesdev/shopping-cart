import React, { useContext } from 'react';

import './AlertBox.css';
import AppContext from '../../context/AppContext';

const AlertBox = () => {

  const { showAlert, setShowAlert, itemBeingRemoved, handleRemoveItem  } = useContext(AppContext);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleRemove = () => {
    handleRemoveItem(itemBeingRemoved.id);
    setShowAlert(false);
  };

  return (
    showAlert && itemBeingRemoved  && 
      <div className="alertBox">
        <div className="container-alertBox">
          <h3 className="title-alert">Você quer remover este item?</h3>
          <span className="content-alert">{itemBeingRemoved.title}</span>
          <div>
            <button type="button" className="button--alert" onClick={handleRemove}>Sim</button>
            <button type="button" className="button--alert" onClick={handleCloseAlert}>Não</button>
          </div>
        </div>
      </div>
  );
};

AlertBox.propTypes = {
  data: AlertBox.string,

}.isRequired;

export default AlertBox;