import s from './UserButton.module.css';
import { useSelector } from 'react-redux';
import { $display } from '../../../functions';
import userIcon from '../../../assets/svg/profile-icon.svg';

export const UserButton = () => {
  const currentUser = useSelector((state) => state.currentUser);

  function handleClick() {
    $display('#profile-menu-container');
  }

  return (
    <div className={s.container} onClick={handleClick}>
      {currentUser
        ?
        <>
          <p className={s.username}>{currentUser.username}</p>
          <div className={s.profilePicContainer}>
            <img src={currentUser.profilePic} alt="" width="100%" />
          </div>
        </>
        :
        <img src={userIcon} />
      }
    </div>
  )
}
