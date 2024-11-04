import css from '../AddUser/AddUser.module.css';
import  iconSize  from '../../utils/iconSize';
import { IoPersonAdd } from "react-icons/io5";

export default function ({isOpen}) {
	return (<>
		<button className={css.userBtn}
			type='button'
			onClick={()=>isOpen()}
		>
			<IoPersonAdd className={css.userIcon}
				size={iconSize.m}
			/>
		</button>
	</>)
}