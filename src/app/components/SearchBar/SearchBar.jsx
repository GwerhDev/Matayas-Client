import s from './SearchBar.module.css';
import { Icon } from '../Icon/Icon';
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
        <button type='submit' className={s.searchButton} aria-label="Buscar"><Icon name="search" /></button>
      </div>
    </form>
  )
}
