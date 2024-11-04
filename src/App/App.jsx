import css from '../App/App.module.css';

import { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import selectModule from '../redux/contacts/selectorsContacts';
import thunkModule from '../redux/contacts/contactsSlice';


import Section from '../components/Section/Section';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import AddModal from '../components/Modal/Modal';
import AddUser from '../components/AddUser/AddUser';
import Loader from '../components/Loader/Loader';
import NotFound from '../components/NotFound/NotFound'



export default function App() {
  const dispatch = useDispatch();
  const { apiGetContacts } = thunkModule;
  const { error } = selectModule;
  const { isLoading } = selectModule;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isLoad = useSelector(isLoading);
  const isError = useSelector(error);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

    function openModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

    useEffect(() => {
  if (modalIsOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
  }, [modalIsOpen]);
  return (
    <>
      <header className={css.header}>
        <SearchBox />
        <AddUser isOpen={openModal} />
      </header>
      <Section title={"Phone Book"}>
       {isLoad && <Loader />} 
        <ContactList />
        {isError&&<NotFound/>}
      </Section>
      <AddModal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
      />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
        duration: 3000,
        style: {
          background: ' #f04980d8',
          color: '#fff',
          border:  '1px solid rgb(168, 34, 67)'
        },
      }}       
    /> 
    </>
  )
}
