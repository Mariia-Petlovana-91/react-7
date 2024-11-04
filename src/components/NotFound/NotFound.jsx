import css from '../NotFound/NotFound.module.css';

export default function NotFound() {
	return (
		<div className={css.container}>
			<p className={css.text}>No contacts found for this request. 🤷‍♂️</p>
		</div>
	)
}