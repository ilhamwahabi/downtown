import { useReducer } from "react";

export type TStageState = "input" | "counting" | "paused";

export const initialStage: TStageState = "input";

export enum EStageActionType {
  "INPUT",
  "COUNT",
  "PAUSE"
}

export interface IStageAction {
  type: EStageActionType;
}

export const stageReducers = (state: TStageState, action: IStageAction) => {
  switch (action.type) {
    case EStageActionType.INPUT:
      return "input";
    case EStageActionType.COUNT:
      return "counting";
    case EStageActionType.PAUSE:
      return "paused";
    default:
      return state;
  }
};

export const useStageReducer = () => useReducer(stageReducers, initialStage);
