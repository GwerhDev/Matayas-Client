import s from './SearchBar.module.css';
import searchIcon from '../../../assets/svg/search-icon.svg';

export const SearchBar = () => {
  return (
    <div className={s.container}>
      <input placeholder='buscar productos, marcas y más...' type="text" />
      <button className={s.searchButton}><img src={searchIcon} alt="" width="20px"/></button>
    </div>
  )
}
