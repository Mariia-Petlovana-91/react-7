import css from '../Contact/Contact.module.css';
import { GrUserManager } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { iconSize } from '../utils/iconSize';
import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({ name = "Ім'я відсутнє", number = "Номер відсутній", id}) {
	const dispatch = useDispatch(); 
	
	return (
		<>
                  <div>
				<h3 className={css.contact__name}>
					<GrUserManager className={css.contact__icon}
						size={iconSize.sm} />{name}
				</h3>
				<p className={css.contact__number}>
					<FaPhone className={css.contact__icon}
						size={iconSize.sm} />{number}
				</p>
			</div>
			<button className='btn'
				type='button'
				onClick={() => dispatch(deleteContacts(id))}>Delete
			</button>
		</>
	)
}