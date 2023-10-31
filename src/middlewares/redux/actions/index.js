import { ERROR } from "../../misc/consts";

export function resetError() {
  return ({
    type: ERROR,
    payload: null
  })
}