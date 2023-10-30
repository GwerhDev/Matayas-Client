import anime from 'animejs';
import s from './Preloader.module.css';
import { useEffect } from 'react';

export const Preloader = () => {
  const colorLine = 'white';
  const colorText = 'white';

  useEffect(() => {
    anime.timeline().add({
      targets: '#Layer_1 path:nth-child(3)',
      fillOpacity: [0, 1],
      duration: 9000,
    });
  }, []);

  useEffect(() => {
    anime.timeline().add({
      targets: '#Layer_1 path:nth-child(2), #Layer_1 polygon, #Layer_1 path:nth-child(n+5)',
      fillOpacity: [0, 1],
      duration: 50000,
    });
  }, []);

  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <div className={s.logo}>
          <svg
            id="Layer_1"
            width="100%"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1211 251.07"
          >
            <path
              fill='transparent'
              d="M673.5,316.05h-.14Q387.9,304.93,102.41,293.93A34.19,34.19,0,0,1,68.5,259.8V121.35a34.19,34.19,0,0,1,33.91-34.13L673.5,66l.38,0,570.71,21.23a34.18,34.18,0,0,1,33.91,34.13V259.8a34.18,34.18,0,0,1-33.91,34.13Q959.05,305,673.5,316.05Z"
              transform="translate(-68 -65.47)" />
            <path fill={colorText}
              d="M1213.1,195a30.64,30.64,0,0,0-5.3-13.41h6.2V151.31s-7.84-16.52-17.22-16.76h-15.39c0,.25-.05.25-.07.26-11.94,0-33.1.74-33.1.74h-42.5c-3,0-5.91,0-8.6,0-22.8,0-36.86,1.14-45.91,7.45a28.58,28.58,0,0,0-11.37,17.49c-.62,3.47-.13,14-.13,14a74,74,0,0,0,.91,12.64,30.71,30.71,0,0,0,5.25,13.42H1040v29.6c0,9.06,7.61,16.4,17,16.4h15.41l.08,0,22.31,0,11.61,0h52.06c22,0,35.65-1.24,44.64-7.76,10.88-7.89,10.88-19.6,10.88-30.87v-.34A72.83,72.83,0,0,0,1213.1,195Zm-54.4,37.59H1107v1h-1.12c-5.41-.74-22.76-.72-34.83-.7,0,0-.12-.3-.12-.3h-3.26A13.72,13.72,0,0,1,1054,218.87V208.55h20v8l31.8,0h43.67c21.82,0,28.47-.11,30.3-5a15.54,15.54,0,0,0,.52-4.66,15.08,15.08,0,0,0-.29-3.28c-1.46-4.66-7.94-5.11-32.41-5.11h-41.88c-7.43,0-13.78,0-19.25-.1-22.65-.51-29.7-2.84-31.54-14.44a53.59,53.59,0,0,1-.69-10.32c0-20.49.07-25.18,43.53-25.18,2.65,0,5.48,0,8.51,0h42s22.76.11,34.83.09a5.65,5.65,0,0,1,.11.91h3.2A13.64,13.64,0,0,1,1200,163.18v6.74a2.7,2.7,0,0,1-2.75,2.63H1180v-7l-73.69,0h-2.18c-27.13,0-30.55-.05-30.55,9.07a16,16,0,0,0,.29,3.1c1.45,4.4,8,4.83,32.44,4.83h42.1c7.42,0,13.78,0,19.23.09,22.64.51,29.66,2.84,31.52,14.43a60.83,60.83,0,0,1,.69,10.31C1199.85,227.15,1200.08,232.55,1158.7,232.55Z"
              transform="translate(-68 -65.47)" />
            <path fill={colorLine}
              d="M1244.09,86.72,673.38,65.49l-.38,0L101.91,86.72A34.19,34.19,0,0,0,68,120.85V259.3a34.19,34.19,0,0,0,33.91,34.13q285.5,11,571,22.12H673q285.54-11.12,571.09-22.12A34.18,34.18,0,0,0,1278,259.3V120.85A34.18,34.18,0,0,0,1244.09,86.72ZM1259,259.58a14.76,14.76,0,0,1-14.73,14.74q-285.63,11-571.27,22.12-285.44-11.12-570.91-22.11h-.44A14.73,14.73,0,0,1,87,259.58V121a14.75,14.75,0,0,1,14.71-14.74L673,85l570.92,21.25h.35A14.76,14.76,0,0,1,1259,121Z"
              transform="translate(-68 -65.47)" />
            <polygon fill={colorText}
              points="314.78 134.07 349.01 134.07 331.84 97.01 314.78 134.07" />
            <path fill={colorText}
              d="M475.37,227.71,443,143.41l-3.41-8.86H360.08l-3.4,8.88-32.23,84.3-7.2,18.82h61.33l3.57-9,3.18-8h29.14l3.18,8,3.57,9h61.35Zm-44.6,4.84-6.67-17H375.73l-6.7,17h-31.4l32.11-84h60.15l32.29,84Z"
              transform="translate(-68 -65.47)" />
            <polygon fill={colorText}
              points="595.58 134.07 629.81 134.07 612.59 97.01 595.58 134.07" />
            <path fill={colorText}
              d="M756.11,227.71l-32.36-84.3-3.4-8.86H640.87l-3.39,8.88-32.26,84.3-7.17,18.82h61.33l3.57-9,3.12-8h29.2l3.18,8,3.51,9h61.41Zm-44.54,4.84-6.73-17H656.5l-6.68,17H618.4l32.14-84h60.15l32.25,84Z"
              transform="translate(-68 -65.47)" />
            <polygon fill={colorText}
              points="873.94 134.07 908.17 134.07 890.99 97.01 873.94 134.07" />
            <path fill={colorText}
              d="M1034.49,227.71l-32.39-84.3-3.4-8.86H919.23l-3.4,8.88-32.25,84.3-7.18,18.82h61.33l3.55-9,3.19-8h29.16l3.18,8,3.56,9h61.36Zm-44.57,4.84-6.7-17H934.85l-6.68,17H896.75l32.14-84H989l32.27,84Z"
              transform="translate(-68 -65.47)" />
            <path fill={colorText}
              d="M464,134.55v53h46v59h60v-59h46v-53Zm138,39H556v59H524v-59H478v-25H602Z"
              transform="translate(-68 -65.47)" />
            <path fill={colorText}
              d="M844.77,134.55,840.88,138l-21,18.48L798.72,138l-3.93-3.41H723.3l24.37,23.79L790,199.72v46.83h60V199.71l42.19-41.44,24.22-23.72ZM836,193.87v38.68H804V193.87l-46.27-45.32h32L819.87,175l30-26.4h32.21Z"
              transform="translate(-68 -65.47)" />
            <polygon fill={colorText}
              points="122 114.95 122 167.07 78 167.07 78 83.07 125.34 83.07 156.28 141 133.75 69.07 64 69.07 64 82.92 64 167.22 64 181.07 136 181.07 136 133.39 155.43 140.27 122 114.95" />
            <polygon fill={colorText}
              points="176.22 69.07 153.68 141 184.63 83.07 232 83.07 232 167.07 188 167.07 188 114.78 154.56 140.11 174 133.23 174 181.07 246 181.07 246 168.26 246 83.07 246 69.07 176.22 69.07" />
            <path d="M739.21,371.77" transform="translate(-68 -65.47)" />
          </svg>
        </div>
        <div className='loader' />
      </div>
    </div>
  )
}