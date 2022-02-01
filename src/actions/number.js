import {ACTION_TYPES} from '../core/constants'


export const call = (number) => {
  return {type: ACTION_TYPES.CHANGE_CURRENT_NUMBER, payload: number}
}

export const reset = () => {
  return {type: ACTION_TYPES.RESET_NUMBERS}
}