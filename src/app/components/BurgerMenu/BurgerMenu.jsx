import s from './BurgerMenu.module.css';
import { $d } from '../../../functions';
import { Menu } from '../Menu/Menu';

export const BurgerMenu = () => {
  document.addEventListener('mouseup', function (e) {
    const container = $d('#burger-menu-container');
    if (!container?.contains(e.target)) {
      return (
        $d('#burger-menu-container').style.display = 'none'
      )
    }
    return;
  });

  return (
    <div className={s.container} id='burger-menu-container'>
      <Menu/>
    </div>
  )
}
