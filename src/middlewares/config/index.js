import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080":"https://matayas-api.fly.dev";
