import css from './Modal.module.css';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
Modal.setAppElement('#root');
import ContactForm from '../ContactForm/ContactForm';

export default function AddModal({ isOpen,
  onRequestClose }) {
  return (<>
    <Modal
      ariaHideApp={false}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Item Details"
      overlayClassName={css.modalOverlay}
    ><div className={css.modalCloseEl}>
        <button
          type='button'
          onClick={onRequestClose}
          className={css.modalCloseBtn}
        >
          <IoCloseSharp className={css.icon} />
        </button>
        <ContactForm setModalIsOpen={onRequestClose} />
      </div>
    </Modal>
  </>
  );
};
