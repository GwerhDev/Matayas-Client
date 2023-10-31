import s from './Seeker.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchByQuery } from '../../../middlewares/redux/actions/search';

export const Seeker = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');

  useEffect(() => {
    dispatch(searchByQuery(query));
  },[dispatch, query]);

  console.log(query);

  return (
    <div className={s.container}>
      
    </div>
  )
}
