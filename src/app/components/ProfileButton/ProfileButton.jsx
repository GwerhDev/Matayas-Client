import { useSelector } from 'react-redux';
import s from './ProfileButton.module.css';
import { $display } from '../../../functions';

export const ProfileButton = () => {
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
