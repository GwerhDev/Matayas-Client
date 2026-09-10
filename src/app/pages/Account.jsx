import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './Account.module.css';
import {
  getUserData,
  updateAccount,
  changePassword,
  unlinkGoogle,
  linkGoogleUrl,
} from '../../middlewares/redux/actions/account';
import { getUserToken } from '../../middlewares/helpers';
import { PasswordField } from '../components/PasswordField/PasswordField';
import { Icon } from '../components/Icon/Icon';
import defaultImage from '../../assets/png/default-image.png';

const LINK_FEEDBACK = {
  ok: { ok: true, msg: 'Cuenta de Google vinculada correctamente.' },
  'email-mismatch': { ok: false, msg: 'El correo de esa cuenta de Google no coincide con el de tu cuenta.' },
  'in-use': { ok: false, msg: 'Esa cuenta de Google ya está vinculada a otro usuario.' },
  error: { ok: false, msg: 'No se pudo completar la vinculación con Google.' },
};

function feedback(state) {
  if (!state?.msg) return null;
  return (
    <span className={state.ok ? 'success-span' : 'error-span'}>
      <p>{state.msg}</p>
    </span>
  );
}

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector((state) => state.currentUser);

  const [username, setUsername] = useState('');
  const [picSource, setPicSource] = useState('none');
  const [savingData, setSavingData] = useState(false);
  const [dataMsg, setDataMsg] = useState(null);

  const [editingPass, setEditingPass] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [savingPass, setSavingPass] = useState(false);
  const [passMsg, setPassMsg] = useState(null);

  const [linkMsg, setLinkMsg] = useState(null);
  const [unlinking, setUnlinking] = useState(false);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username || '');
      setPicSource(currentUser.profilePicSource || 'none');
    }
  }, [currentUser]);

  useEffect(() => {
    const link = new URLSearchParams(location.search).get('link');
    if (!link) return;
    setLinkMsg(LINK_FEEDBACK[link] || LINK_FEEDBACK.error);
    dispatch(getUserData());
    navigate('/account', { replace: true });
  }, [location.search, dispatch, navigate]);

  const hasPassword = !!currentUser?.hasPassword;
  const hasGoogle = !!currentUser?.hasGoogle;

  const dataDirty = useMemo(() => {
    if (!currentUser) return false;
    return (
      username.trim() !== (currentUser.username || '') ||
      picSource !== (currentUser.profilePicSource || 'none')
    );
  }, [username, picSource, currentUser]);

  if (!currentUser) {
    return getUserToken() ? (
      <div className="auth-container">
        <div className="auth-form"><h2>Cargando tu cuenta…</h2></div>
      </div>
    ) : (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Necesitas iniciar sesión</h2>
          <p className="auth-subtitle">Ingresa para ver y editar los datos de tu cuenta.</p>
          <Link to="/login" className="btn btn-primary btn-block" style={{ textDecoration: 'none' }}>
            Ingresar
          </Link>
        </div>
      </div>
    );
  }

  const avatarSrc = picSource === 'google' ? (currentUser.googlePic || defaultImage) : defaultImage;

  function handleDataSubmit(e) {
    e.preventDefault();
    setDataMsg(null);
    const clean = username.trim();
    if (clean.length < 2 || clean.length > 40) {
      return setDataMsg({ ok: false, msg: 'El nombre debe tener entre 2 y 40 caracteres.' });
    }
    setSavingData(true);
    dispatch(updateAccount({ username: clean, profilePicSource: picSource }, (ok, msg) => {
      setSavingData(false);
      setDataMsg({ ok, msg });
    }));
  }

  function resetPassForm() {
    setCurrentPassword('');
    setNewPassword('');
    setConfirm('');
  }

  function closePassForm() {
    setEditingPass(false);
    setPassMsg(null);
    resetPassForm();
  }

  function handlePassSubmit(e) {
    e.preventDefault();
    setPassMsg(null);
    if (newPassword.length < 6) {
      return setPassMsg({ ok: false, msg: 'La contraseña debe tener al menos 6 caracteres.' });
    }
    if (newPassword !== confirm) {
      return setPassMsg({ ok: false, msg: 'Las contraseñas no coinciden.' });
    }
    if (hasPassword && !currentPassword) {
      return setPassMsg({ ok: false, msg: 'Ingresa tu contraseña actual.' });
    }
    setSavingPass(true);
    dispatch(changePassword({ currentPassword, newPassword }, (ok, msg) => {
      setSavingPass(false);
      if (ok) {
        resetPassForm();
        setEditingPass(false);
        setPassMsg({ ok, msg });
      } else {
        setPassMsg({ ok, msg });
      }
    }));
  }

  function handleUnlink() {
    setLinkMsg(null);
    setUnlinking(true);
    dispatch(unlinkGoogle((ok, msg) => {
      setUnlinking(false);
      setLinkMsg({ ok, msg });
    }));
  }

  return (
    <div className={s.wrap}>
      <div className={s.head}>
        <h1>Cuenta</h1>
        <p className="section-subtitle">Edita tus datos, tu contraseña y el acceso con Google.</p>
      </div>

      <form className={`card ${s.card}`} onSubmit={handleDataSubmit}>
        <h2>Datos personales</h2>

        <div className={s.picRow}>
          <img
            className={s.pic}
            src={avatarSrc}
            alt=""
            onError={(e) => { e.currentTarget.src = defaultImage; }}
          />
          <div className={s.picChoices}>
            <span className="field-label">Foto de perfil</span>
            <div className={s.segmented}>
              <button
                type="button"
                className={picSource === 'none' ? s.segActive : s.seg}
                onClick={() => { setPicSource('none'); setDataMsg(null); }}
              >
                Sin foto
              </button>
              <button
                type="button"
                className={picSource === 'google' ? s.segActive : s.seg}
                onClick={() => { setPicSource('google'); setDataMsg(null); }}
                disabled={!hasGoogle}
              >
                Foto de Google
              </button>
            </div>
            {!hasGoogle && (
              <span className="field-hint">Vincula tu cuenta de Google para usar su foto.</span>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor="account-username">Nombre</label>
          <input
            id="account-username"
            type="text"
            autoComplete="name"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setDataMsg(null); }}
          />
        </div>

        <div className={`field ${s.readonly}`}>
          <label htmlFor="account-email">Email</label>
          <input id="account-email" type="email" value={currentUser.email || ''} disabled />
          <span className="field-hint">Para cambiar tu correo, escríbenos desde Contacto.</span>
        </div>

        {feedback(dataMsg)}

        <div className={s.actions}>
          <button type="submit" className="btn btn-primary" disabled={savingData || !dataDirty}>
            {savingData ? 'Guardando…' : 'Guardar cambios'}
          </button>
        </div>
      </form>

      <div className={`card ${s.card}`}>
        <h2>Acceso</h2>

        <div className={s.subform}>
          <h3 className={s.subhead}>Contraseña</h3>

          {!editingPass ? (
            <>
              <p className={s.note}>
                {hasPassword
                  ? 'Tienes una contraseña configurada para iniciar sesión con tu correo.'
                  : 'Aún no tienes una contraseña. Crea una para iniciar sesión también con tu correo.'}
              </p>
              {feedback(passMsg)}
              <div className={s.actions}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => { setPassMsg(null); setEditingPass(true); }}
                >
                  {hasPassword ? 'Cambiar contraseña' : 'Crear contraseña'}
                </button>
              </div>
            </>
          ) : (
            <form className={s.subform} onSubmit={handlePassSubmit}>
              {hasPassword ? (
                <PasswordField
                  label="Contraseña actual"
                  autoComplete="current-password"
                  value={currentPassword}
                  onChange={(e) => { setCurrentPassword(e.target.value); setPassMsg(null); }}
                />
              ) : (
                <p className={s.note}>
                  Tu cuenta entra con Google. Elige una contraseña para entrar también con tu correo.
                </p>
              )}
              <PasswordField
                label="Contraseña nueva"
                autoComplete="new-password"
                hint="Mínimo 6 caracteres."
                value={newPassword}
                onChange={(e) => { setNewPassword(e.target.value); setPassMsg(null); }}
              />
              <PasswordField
                label="Repite la contraseña nueva"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => { setConfirm(e.target.value); setPassMsg(null); }}
              />

              {feedback(passMsg)}

              <div className={s.actions}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={savingPass || !newPassword || !confirm || (hasPassword && !currentPassword)}
                >
                  {savingPass ? 'Guardando…' : (hasPassword ? 'Cambiar contraseña' : 'Crear contraseña')}
                </button>
                <button type="button" className="btn btn-ghost" onClick={closePassForm} disabled={savingPass}>
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="divider" />

        <div className={s.subform}>
          <h3 className={s.subhead}>Acceso con Google</h3>
          {hasGoogle ? (
            <>
              <p className={s.linkedRow}>
                <Icon name="google" />
                <span>Vinculada a Google</span>
                <span className={s.check}><Icon name="check" /></span>
              </p>
              {feedback(linkMsg)}
              <div className={s.actions}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleUnlink}
                  disabled={unlinking || !hasPassword}
                >
                  <Icon name="unlink" />
                  {unlinking ? 'Desvinculando…' : 'Desvincular Google'}
                </button>
              </div>
              {!hasPassword && (
                <span className="field-hint">
                  Crea una contraseña antes de desvincular, para no quedar sin acceso.
                </span>
              )}
            </>
          ) : (
            <>
              <p className={s.note}>
                Vincula tu cuenta de Google (mismo correo) para entrar con un clic y usar tu foto de Google.
              </p>
              {feedback(linkMsg)}
              <div className={s.actions}>
                <a className="btn btn-secondary" href={linkGoogleUrl()} style={{ textDecoration: 'none' }}>
                  <Icon name="google" />
                  Vincular con Google
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
