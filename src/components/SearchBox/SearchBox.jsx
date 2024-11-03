import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {

      const selectNameFilter = useSelector((state) => state.filtersData.filters);
      const dispatch = useDispatch();

      function onChangeValue(e) {
           const action = changeFilter(e.target.value);
           dispatch(action);
      }
	return (
		<div className={css.search__box}>
			<label className="label">
				<span className="descript">Find contacts by name</span>
				<input className="input"
					type='text'
					name='search'
					value={selectNameFilter}
					onChange={onChangeValue}
				/>
			</label>
		</div>
	)
}