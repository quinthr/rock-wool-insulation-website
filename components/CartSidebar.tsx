import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#modal');

const products = [];

const CartSidebar = ({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <>
      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='bg-[rgba(0,0,0,.4)] z-[1050] overflow-hidden overflow-y-scroll absolute top-0 right-0 h-full w-full'
        className='duration-350 pointer-events-auto relative float-right flex h-full w-[500px] flex-col border-[#00000033] bg-white bg-clip-padding p-10 shadow-2xl outline-0 transition-all delay-0 ease-in-out'
      >
        <div className='flex w-full justify-between pb-8 text-left text-lg font-normal uppercase tracking-wide text-black'>
          <span>
            My Cart{' '}
            {products.length > 0 ? <span>({products.length})</span> : ''}
          </span>
        </div>
        {products.length > 0 ? (
          ''
        ) : (
          <div className='flex justify-center py-8 text-center text-lg'>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{
                color: '#6c757d',
                width: '24px',
                height: '24px',
              }}
            />
            <p className='ml-4 flex items-center'>No products in the cart.</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CartSidebar;
