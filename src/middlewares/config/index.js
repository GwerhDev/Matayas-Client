import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc/consts";

const fallback = environment === DEVELOPMENT
  ? "http://localhost:4000"
  : "https://matayas-api.fly.dev";

// Configurable con VITE_API_URL (ver .env.example). Si no se define, usa el
// fallback por entorno.
export const URL_API = import.meta.env.VITE_API_URL || fallback;
