import { useSelector } from 'react-redux';
import s from './ProfileHeader.module.css';
import defaultImage from '../../../assets/png/default-image.png';
import { Preloader } from '../Preloader/Preloader';

export const ProfileHeader = () => {
  const currentUser = useSelector(state => state.currentUser);


  return (
    <>
      {
        currentUser
          ?
          <div className={s.container} >
            <div className={s.headerImageContainer}>

            </div>
            <div className={s.profilePicCOntainer}>
              <img className={s.profilePic} src={currentUser?.profilePic || defaultImage} alt="" width="100px" height="100px" />
            </div>
            <div className={s.userData}>
              <h2>{currentUser?.username}</h2>
              <p>{currentUser?.role}</p>
            </div>
          </div >
          :
          <Preloader position="static" />
      }
    </>
  )
}
