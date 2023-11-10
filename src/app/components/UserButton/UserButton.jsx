import s from './UserButton.module.css';
import { useSelector } from 'react-redux';
import { $display } from '../../../functions';

export const UserButton = () => {
  const { profilePic, username } = useSelector(state => state.currentUser);

  function handleClick() {
    $display('#profile-menu-container')
  }

  return (
    <div className={s.container} onClick={handleClick}>
      <p className={s.username}>{ username }</p>
      <div className={s.profilePicContainer}>
        <img src={profilePic} alt="" width="100%" />
      </div>
    </div>
  )
}
