import s from './ContactMethods.module.css';
import { Icon } from '../Icon/Icon';
import { instagramLink, mailLink, messengerLink, phoneLink, telegramLink, whatsappLink } from '../Utils/consts';

const methods = [
  { name: 'phone', href: phoneLink, brand: 'phone', label: 'Teléfono' },
  { name: 'whatsapp', href: whatsappLink, brand: 'whatsapp', label: 'WhatsApp', external: true },
  { name: 'instagram', href: instagramLink, brand: 'instagram', label: 'Instagram', external: true },
  { name: 'messenger', href: messengerLink, brand: 'messenger', label: 'Messenger', external: true },
  { name: 'telegram', href: telegramLink, brand: 'telegram', label: 'Telegram', external: true },
  { name: 'mail', href: mailLink, brand: 'mail', label: 'Correo' },
];

export const ContactMethods = () => {
  return (
    <span className={s.contactMethod}>
      {methods.map((m) => (
        <a
          key={m.name}
          href={m.href}
          aria-label={m.label}
          className={`${s.chip} ${s[m.brand]}`}
          {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon name={m.name} />
        </a>
      ))}
    </span>
  );
};
