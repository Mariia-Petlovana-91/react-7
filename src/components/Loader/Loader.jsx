import css from '../Loader/Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';


export default function Loader() {
   return (
      <div className={css.load}>
       <InfinitySpin
       visible={true}
       width="200"
       color="rgb(168, 34, 67)"
       ariaLabel="infinity-spin-loading"
      />
      </div> 
	)
}
