import s from './SearchBar.module.css';
import searchIcon from '../../../assets/svg/search-icon.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <div className={s.container}>
        <input onInput={(e) => setQuery(e.target.value)} placeholder='Buscar productos, marcas y más...' type="text" />
        <button type='submit' className={s.searchButton}><img src={searchIcon} alt="" width="20px" /></button>
      </div>
    </form>
  )
}
