import {NavLink} from 'react-router-dom';

const activeItem = ({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item';

function Menu() {

  return (
    <nav className="menu">
      <NavLink className={activeItem} to="/">Главная</NavLink>
      <NavLink className={activeItem} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={activeItem} to="/timeattack">Time Attack</NavLink>
      <NavLink className={activeItem} to="/forza">Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;
