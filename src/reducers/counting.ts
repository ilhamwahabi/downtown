import { useReducer } from "react";

export type TCountingAction = "resume" | "pause";

export const reducers = (state: boolean, action: TCountingAction) => {
  switch (action) {
    case "resume":
      return true;
    case "pause":
      return false;
    default:
      return state;
  }
};

export const initialState = true;

export const useCountingReducer = () => useReducer(reducers, initialState);
