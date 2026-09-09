export const getUserToken = () => localStorage.getItem('userToken');
export const setUserToken = (token) => localStorage.setItem('userToken', token);

export const options = () => {
  return {
    headers: {
      Authorization: getUserToken()
    }
  }
};

// Extrae un mensaje legible de un error de axios sin romper cuando no hay
// `response` (p. ej. error de red o CORS).
export const errMessage = (e, fallback = 'Ocurrió un error. Intenta nuevamente.') =>
  e?.response?.data?.message || e?.response?.data?.error || fallback;
