import s from './UserButton.module.css';
import { useSelector } from 'react-redux';
import { $display } from '../../../functions';
import { Icon } from '../Icon/Icon';

export const UserButton = () => {
  const currentUser = useSelector((state) => state.currentUser);

  function handleClick() {
    $display('#profile-menu-container');
  }

  return (
    <div className={s.container} onClick={handleClick}>
      {currentUser ? (
        <>
          <p className={s.username}>{currentUser.username}</p>
          <div className={s.profilePicContainer}>
            {currentUser.profilePic
              ? <img src={currentUser.profilePic} alt="" width="100%" />
              : <Icon name="user" />}
          </div>
        </>
      ) : (
        <span className={s.guestIcon}><Icon name="user" /></span>
      )}
    </div>
  );
};
