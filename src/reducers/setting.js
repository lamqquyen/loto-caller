import { ACTION_TYPES } from "../core/constants"

const initialState = {
  isAutoCallEnabled: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_AUTO_CALL:
      state = {
        isAutoCallEnabled: payload
      };
      break;

    default:
      break;
  }

  return state;
};

export default reducer;
