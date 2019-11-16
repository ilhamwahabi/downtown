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
  CHANGE_SECOND_SECOND_DIGIT,
  DECREASE_TIME
}

export interface ITimeAction {
  type: ETimeActionType;
  payload?: string;
}

export const timeInputReducers = (state: ITimeState, action: ITimeAction) => {
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
    case ETimeActionType.DECREASE_TIME: {
      const timeInSeconds =
        parseInt(state.hour) * 3600 +
        parseInt(state.minute) * 60 +
        parseInt(state.second) -
        1;

      const makeTwoDigit = (time: number): string => {
        if (time < 10) return `0${time}`;
        return time.toString();
      };

      const hour = makeTwoDigit(Math.floor(timeInSeconds / (60 * 60)));
      const minute = makeTwoDigit(Math.floor((timeInSeconds % (60 * 60)) / 60));
      const second = makeTwoDigit(Math.floor((timeInSeconds % (60 * 60)) % 60));

      return { hour, minute, second };
    }
    default:
      return state;
  }
};

export const initialTimeInput: ITimeState = {
  hour: "00",
  minute: "00",
  second: "00"
};

export const useTimeInputReducer = () =>
  useReducer(timeInputReducers, initialTimeInput);
