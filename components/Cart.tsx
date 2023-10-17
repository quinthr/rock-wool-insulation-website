'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartSidebar from './CartSidebar';

const Cart = () => {
  const [ModalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      <div className='inline-block px-2'>
        <div className='relative cursor-pointer text-center'>
          <a
            href='#'
            className='relative flex items-center text-center text-base font-normal tracking-normal text-black'
            onClick={() => openModal()}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                color: '#6c757d',
                width: '24px',
                height: '24px',
              }}
            />
          </a>
        </div>
      </div>
      <CartSidebar modalIsOpen={ModalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Cart;
