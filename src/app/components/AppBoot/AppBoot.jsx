import { useEffect, useState } from 'react';
import { Preloader } from '../Preloader/Preloader';

/**
 * Splash de arranque: se muestra una sola vez, al montar la app (carga o
 * refresco de página). No reaparece en la navegación interna del SPA — de eso
 * se encargan los skeletons de cada vista.
 *
 * Se oculta cuando la ventana termina de cargar (con un mínimo de 800 ms para
 * que no "parpadee") y a más tardar a los 2.5 s.
 */
export const AppBoot = (props) => {
  const { children } = props || {};
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setReady(true);
    };

    const minDelay = new Promise((r) => setTimeout(r, 800));
    const windowLoaded = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((r) => window.addEventListener('load', r, { once: true }));

    Promise.all([minDelay, windowLoaded]).then(finish);
    const cap = setTimeout(finish, 2500);

    return () => clearTimeout(cap);
  }, []);

  if (ready) return children;

  return (
    <div className="app-boot">
      <Preloader />
    </div>
  );
};
