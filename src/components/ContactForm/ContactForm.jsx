import css from './ContactForm.module.css';
import schemaValidate from '../utils/validataSchema';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch} from 'react-redux';
import { addContacts} from '../../redux/contactsSlice';

export default function ContactForm() {
	
	const dispatch = useDispatch();
	
	function onAddId(data) {
         const finishAddContact = {
            ...data,
            id: nanoid(),
      };
         const action = addContacts(finishAddContact);
         dispatch(action);
      }
      
	function onSubmit(values, actions) {
		onAddId(values);
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