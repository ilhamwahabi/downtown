import React, { createContext, useContext, FC, useMemo } from "react";

import {
  useTimeInputReducer,
  ITimeState,
  ITimeAction,
  useStageReducer,
  TStageState,
  IStageAction,
  TCountingAction,
  useCountingReducer
} from "../reducers";

interface IContextProps {
  timeInput: [ITimeState, React.Dispatch<ITimeAction>];
  stage: [TStageState, React.Dispatch<IStageAction>];
  counting: [boolean, React.Dispatch<TCountingAction>];
}

export const Context = createContext({} as IContextProps);

export const ContextProvider: FC = ({ children }) => {
  const useTimeInput = useTimeInputReducer();
  const useStage = useStageReducer();
  const useCounting = useCountingReducer();

  const contextValue = useMemo(
    () => ({ timeInput: useTimeInput, stage: useStage, counting: useCounting }),
    [useTimeInput, useStage, useCounting]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useContextReducer = () => useContext(Context);
