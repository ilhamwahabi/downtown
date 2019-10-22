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
      return { ...state, hour: `${action.payload}${state.hour[1]}` };
    case ETimeActionType.CHANGE_HOUR_SECOND_DIGIT: {
      return { ...state, hour: `${state.hour[0]}${action.payload}` };
    }
    case ETimeActionType.CHANGE_MINUTE_FIRST_DIGIT: {
      return { ...state, minute: `${action.payload}${state.minute[1]}` };
    }
    case ETimeActionType.CHANGE_MINUTE_SECOND_DIGIT: {
      return { ...state, minute: `${state.minute[0]}${action.payload}` };
    }
    case ETimeActionType.CHANGE_SECOND_FIRST_DIGIT: {
      return { ...state, second: `${action.payload}${state.second[1]}` };
    }
    case ETimeActionType.CHANGE_SECOND_SECOND_DIGIT: {
      return { ...state, second: `${state.second[0]}${action.payload}` };
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
