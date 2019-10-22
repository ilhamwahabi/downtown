import { useReducer } from "react";

export type TStageState = "input" | "count";

export const initialStage: TStageState = "input";

export enum EStageActionType {
  "TO_INPUT_STAGE",
  "TO_COUNT_STAGE"
}

export interface IStageAction {
  type: EStageActionType;
}

export const stageReducers = (state: TStageState, action: IStageAction) => {
  switch (action.type) {
    case EStageActionType.TO_INPUT_STAGE:
      return "input";
    case EStageActionType.TO_COUNT_STAGE:
      return "count";
    default:
      return state;
  }
};

export const useStageReducer = () => useReducer(stageReducers, initialStage);
