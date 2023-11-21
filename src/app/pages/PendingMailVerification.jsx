const PendingMailVerification = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <span className="auth-form-text">
          Te hemos enviado un correo electrónico. Verifica tu bandeja de entrada y sigue las instrucciones para activar tu cuenta.
        </span>
      </form>
    </div>
  )
}

export default PendingMailVerification;