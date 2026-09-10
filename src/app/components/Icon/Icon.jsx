import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTrashCan,
  faBars,
  faUser,
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
  faXmark,
  faCheck,
  faArrowLeft,
  faArrowRight,
  faChevronRight,
  faPlus,
  faEye,
  faEyeSlash,
  faLink,
  faLinkSlash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faWhatsapp,
  faInstagram,
  faFacebookMessenger,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const ICONS = {
  edit: faPen,
  delete: faTrashCan,
  menu: faBars,
  user: faUser,
  search: faMagnifyingGlass,
  phone: faPhone,
  mail: faEnvelope,
  close: faXmark,
  check: faCheck,
  back: faArrowLeft,
  arrowRight: faArrowRight,
  chevronRight: faChevronRight,
  plus: faPlus,
  eye: faEye,
  eyeSlash: faEyeSlash,
  link: faLink,
  unlink: faLinkSlash,
  google: faGoogle,
  whatsapp: faWhatsapp,
  instagram: faInstagram,
  messenger: faFacebookMessenger,
  telegram: faTelegram,
};

/**
 * Ícono único de la app. `name` es una clave semántica (ver ICONS).
 * El resto de props pasan a <FontAwesomeIcon> (size, className, style…).
 */
export const Icon = (props) => {
  const { name, ...rest } = props || {};
  const icon = ICONS[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} {...rest} />;
};
