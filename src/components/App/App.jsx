
import css from '../App/App.module.css';
import Section from '../Section/Section';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';


export default function App() {
 

 
  return (
    <>
      <Section title={"Phone Book"}>
        <div className={css.boxComment}>
            <div className={css.boxComment__firstEl}>
            <SearchBox />
            <ContactForm />
          </div>
          <ContactList/>
        </div>
      </Section>
    </>
  )
}
