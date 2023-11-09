import s from './Navigator.module.css';
import logo from '../../../assets/png/matayas-logo.png';
import logotypo from '../../../assets/svg/matayas-logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { UserButton } from '../UserButton/UserButton';
import { UserMenu } from '../UserMenu/UserMenu';
import { Menu } from '../Menu/Menu';
/* import { SearchBar } from '../SearchBar/SearchBar';*/
import burgerIcon from '../../../assets/svg/burger-icon.svg';

export const Navigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [logoImg, setLogoImg] = useState(logo);

  function handleLogoHover() {
    setLogoImg(logotypo);
  }

  function handleLogoLeave() {
    setLogoImg(logo);
  }

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.navContainerExt}>
      {/*       <div className={s.navigatorContainer}>
        <nav>
          <section className={s.logoSection}>
            <Link to="/">
              <div className={s.logo} style={{ backgroundImage: `url(${logoImg})` }}
                onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave} alt="" height="40px" />
            </Link>
          </section>
          <section className={s.searchSection}>
            <SearchBar />
          </section>
          <section className={s.featuredSection}>

          </section>
        </nav>
      </div> */}
      <div className={s.menuContainer}>
        <nav>
          <section className={s.underLogo}>
            <Link to="/">
              <div className={s.logo} style={{ backgroundImage: `url(${logoImg})` }}
                onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave} alt="" height="40px" />
            </Link>
          </section>
          <section className={s.menuSection}>
          <Menu />
          </section>
          <section className={s.menuSectionMobile}>
            <button className={s.menuIcon}><img src={burgerIcon} alt="" width={"20px"}/></button>
          </section>
          <section className={s.userSection}>
            <div className={s.authContainer}>
              {
                currentUser
                  ? <UserButton />
                  : <div className={s.authButtons}>
                    <Link to="/register" className={s.registerLink}>Registrarse</Link>
                    <Link to="/login"><button className={s.enterButton}>Ingresar</button></Link>
                  </div>
              }
              <UserMenu />
            </div>
          </section>
        </nav>
      </div>
    </div>
  )
}
