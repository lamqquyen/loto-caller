import keyMirror from 'keymirror'

export const ENTER_KEY_CODE = 13;

export const ACTION_TYPES = keyMirror({
  CHANGE_CURRENT_NUMBER: null,
  RESET_NUMBERS: null,
  SET_AUTO_CALL: null
});

export const INTERVAL_CALL = 3000 //ms