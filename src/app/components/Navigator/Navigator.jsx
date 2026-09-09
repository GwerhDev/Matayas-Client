import s from './Navigator.module.css';
import logo from '../../../assets/png/matayas-logo.png';
import logotypo from '../../../assets/svg/matayas-logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { UserButton } from '../UserButton/UserButton';
import { UserMenu } from '../UserMenu/UserMenu';
import { Menu } from '../Menu/Menu';
/* import { SearchBar } from '../SearchBar/SearchBar';*/
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Icon } from '../Icon/Icon';
import { $display } from '../../../functions';

export const Navigator = () => {
  const dispatch = useDispatch();
  const [logoImg, setLogoImg] = useState(logo);

  function handleClick() {
    $display('#burger-menu-container');
  }

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
          <section className={s.menuSectionMobile}>
            <button className={s.menuIcon} onClick={handleClick} aria-label="Menú"><Icon name="menu" /></button>
          </section>
          <section className={s.underLogo}>
            <Link to="/">
              <div className={s.logo} style={{ backgroundImage: `url(${logoImg})` }}
                onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave} alt="" height="40px" />
            </Link>
          </section>
          <section className={s.menuSection}>
          <Menu />
          </section>
          <section className={s.userSection}>
            <div className={s.authContainer}>
              <UserButton />
              <UserMenu />
            </div>
          </section>
        </nav>
      </div>
      <BurgerMenu/>
    </div>
  )
}
