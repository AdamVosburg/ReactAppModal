import React, { useState } from "react";

const InsiderAcceptModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal__container">
          <div className="modal">
            <div className="modal_header">
              <div className="modal_container_button">
                <button onClick={closeModal}>
                <span className="cross_mark">&#10005;</span>
                </button>
              </div>
              <h3 className="header_title">
                <strong>
                  An Insider has decided to take on your request!
                </strong>
              </h3>
            </div>
            <div class="modal_body">           
            </div>
            <div className="actions">
              <button className="approve_button">Approve and Pay ↗</button>
              <button className="decline_button" onClick={closeModal}>
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InsiderAcceptModal;