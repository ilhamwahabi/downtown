import { useReducer } from "react";

export interface ITimeState {
  hour: string;
  minute: string;
  second: string;
}

export enum ETimeActionType {
  CHANGE_HOUR_FIRST_DIGIT,
  CHANGE_HOUR_SECOND_DIGIT,
  CHANGE_MINUTE_FIRST_DIGIT,
  CHANGE_MINUTE_SECOND_DIGIT,
  CHANGE_SECOND_FIRST_DIGIT,
  CHANGE_SECOND_SECOND_DIGIT
}

export interface ITimeAction {
  type: ETimeActionType;
  payload: string;
}

export const reducers = (state: ITimeState, action: ITimeAction) => {
  switch (action.type) {
    case ETimeActionType.CHANGE_HOUR_FIRST_DIGIT:
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 2)
        updatedState.hour = `${action.payload}${updatedState.hour[1]}`;

      return updatedState;
    case ETimeActionType.CHANGE_HOUR_SECOND_DIGIT: {
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 3)
        updatedState.hour = `${updatedState.hour[0]}${action.payload}`;

      return updatedState;
    }
    case ETimeActionType.CHANGE_MINUTE_FIRST_DIGIT: {
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 5)
        updatedState.minute = `${action.payload}${updatedState.minute[1]}`;

      return updatedState;
    }
    case ETimeActionType.CHANGE_MINUTE_SECOND_DIGIT: {
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 9)
        updatedState.minute = `${updatedState.minute[0]}${action.payload}`;

      return updatedState;
    }
    case ETimeActionType.CHANGE_SECOND_FIRST_DIGIT: {
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 5)
        updatedState.second = `${action.payload}${updatedState.second[1]}`;

      return updatedState;
    }
    case ETimeActionType.CHANGE_SECOND_SECOND_DIGIT: {
      const updatedState = { ...state };
      if (parseInt(action.payload) <= 9)
        updatedState.second = `${updatedState.second[0]}${action.payload}`;

      return updatedState;
    }
    default:
      return state;
  }
};

export const initialState: ITimeState = {
  hour: "00",
  minute: "00",
  second: "00"
};

export const useTimeInputReducer = () => useReducer(reducers, initialState);
