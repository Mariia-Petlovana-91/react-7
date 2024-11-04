import css from './ContactForm.module.css';
import schemaValidate from '../../utils/validataSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch} from 'react-redux';
import contactsModule from '../../redux/contacts/contactsSlice';

export default function ContactForm({ setModalIsOpen }) {
	
	const { apiPostContacts} = contactsModule;
	const dispatch = useDispatch();
	
	
      
	function onSubmit(data, actions) {
		dispatch(apiPostContacts(data));
		setModalIsOpen();
		actions.resetForm();
		return;
	}

	const INITIAL__VALUE = {
	 	name: "",
	      number: "",
	}

	return (
		<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={schemaValidate}>
			<Form className={css.form}>
				<label className="label">
					<span className="descript">Name</span>
					<Field className="input"
						type='text'
						name='name' />
					<ErrorMessage className={css.form__error}
						name='name'
						component="span" />
				</label>
				<label className="label">
					<span className="descript">Number</span>
					<Field className="input"
						type='text'
						name='number' />
					<ErrorMessage className={css.form__error}
						name='number'
						component="span" />
				</label>
                        <button className='btn' type="submit">Add contact</button>
			</Form>

		</Formik>
	)
}