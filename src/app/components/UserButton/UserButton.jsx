import s from './UserButton.module.css';
import { useSelector } from 'react-redux';
import { $display } from '../../../functions';

export const UserButton = () => {
  const { profilePic } = useSelector(state => state.currentUser);

  function handleClick() {
    $display('#profile-menu-container')
  }

  return (
    <div className={s.profilePicContainer} onClick={handleClick}>
      <img src={profilePic} alt="" width="100%" />
    </div>
  )
}
