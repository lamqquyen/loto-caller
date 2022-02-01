import { ACTION_TYPES } from "../core/constants"
import cloneDeep from "lodash/cloneDeep"
import data from "../data"

const initialState = {
  currentNumber: "",
  numbers: cloneDeep(data)
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.RESET_NUMBERS:
      state = {
        ...state,
        currentNumber: "",
        numbers: cloneDeep(data)
      };
      break;

    case ACTION_TYPES.CHANGE_CURRENT_NUMBER:
      const {numbers} = state
      numbers[payload].isCalled = true

      state = {
        ...state,
        currentNumber: payload,
        numbers
      };
      break;

    default:
      break;
  }

  return state;
};

export default reducer;
