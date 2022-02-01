import {ACTION_TYPES} from '../core/constants'


export const autoCall = (payload) => {
  return {type: ACTION_TYPES.SET_AUTO_CALL, payload}
}