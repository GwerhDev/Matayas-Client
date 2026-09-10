import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Slider.module.css';
import matayasLogo from '../../../assets/svg/matayas-logo.svg';
import { formattedPrice } from '../../../functions';
import { Icon } from '../Icon/Icon';

const AUTOPLAY_MS = 5000;
const SWIPE_RESUME_MS = 6000;

const LogoSlide = () => (
  <div className={s.logoSlide}>
    <img className={s.logo} src={matayasLogo} alt="Amplificadores Matayas" draggable={false} />
    <p className={s.text}>Fabricación, modificación y reparación de amplificadores a tubos</p>
  </div>
);

export const Slider = (props) => {
  const { items } = props || {};
  const list = Array.isArray(items) ? items : [];
  const count = list.length + 1; // slide 0 = logo, resto = productos

  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [swipePause, setSwipePause] = useState(false);

  const viewportRef = useRef(null);
  const pointerStart = useRef(null);
  const dragRef = useRef(0);
  const movedRef = useRef(false);
  const resumeTimer = useRef(null);

  const wrap = useCallback((i) => ((i % count) + count) % count, [count]);
  const goTo = useCallback((i) => setIndex(wrap(i)), [wrap]);
  const goBy = useCallback((delta) => setIndex((cur) => wrap(cur + delta)), [wrap]);

  // Autoplay: se reinicia con cada cambio de slide y se pausa al interactuar.
  useEffect(() => {
    if (count <= 1 || dragging || hovering || swipePause) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [count, index, dragging, hovering, swipePause]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  function bumpSwipePause() {
    setSwipePause(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setSwipePause(false), SWIPE_RESUME_MS);
  }

  function onPointerDown(e) {
    if (count <= 1) return;
    pointerStart.current = { x: e.clientX, y: e.clientY };
    dragRef.current = 0;
    movedRef.current = false;
    setDragging(true);
    viewportRef.current?.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!pointerStart.current) return;
    const dx = e.clientX - pointerStart.current.x;
    dragRef.current = dx;
    if (Math.abs(dx) > 8) movedRef.current = true;
    setDrag(dx);
  }

  function endDrag(e) {
    if (!pointerStart.current) return;
    const width = viewportRef.current?.offsetWidth || 1;
    const dx = dragRef.current;
    pointerStart.current = null;
    dragRef.current = 0;
    setDragging(false);
    setDrag(0);
    viewportRef.current?.releasePointerCapture?.(e.pointerId);
    if (Math.abs(dx) > Math.min(width * 0.15, 90)) {
      goBy(dx < 0 ? 1 : -1);
    }
    bumpSwipePause();
  }

  // Un swipe no debe disparar la navegación del <Link>.
  function onClickCapture(e) {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  }

  const trackStyle = {
    transform: `translateX(calc(${-index * 100}% + ${drag}px))`,
    transition: dragging ? 'none' : undefined,
  };

  if (count <= 1) {
    return (
      <div className={s.viewport}>
        <div className={s.slide}><LogoSlide /></div>
      </div>
    );
  }

  return (
    <div
      className={s.viewport}
      ref={viewportRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className={s.track} style={trackStyle} onClickCapture={onClickCapture}>
        <div className={s.slide}><LogoSlide /></div>
        {list.map((item, i) => (
          <div className={s.slide} key={item._id || i}>
            <Link to={`/product/${item._id}`} className={s.productSlide} draggable={false}>
              <div className={s.productText}>
                <h2 className={s.productTitle}>{item.title}</h2>
                <p className={s.productPrice}>${formattedPrice(item.price)}</p>
              </div>
              <img className={s.productImage} src={item.image} alt={item.title} draggable={false} />
            </Link>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${s.arrow} ${s.prev}`}
        aria-label="Anterior"
        onClick={() => goBy(-1)}
      >
        <Icon name="chevronLeft" />
      </button>
      <button
        type="button"
        className={`${s.arrow} ${s.next}`}
        aria-label="Siguiente"
        onClick={() => goBy(1)}
      >
        <Icon name="chevronRight" />
      </button>

      <div className={s.dots}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            type="button"
            key={i}
            className={i === index ? s.dotActive : s.dot}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};
