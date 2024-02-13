import { AuthModel } from "../../Dto";

export interface ObserverPartialStateModel {
  callback: (state: Partial<AuthModel>) => void;
  key?: keyof AuthModel;
}
export type ObserverStateModel =
  | ObserverPartialStateModel
  | ObserserGlobalStateModel;

export interface ObserserGlobalStateModel {
  callback: (state: AuthModel) => void;
  id?: string;
}
export type ObsUnsubscribe = () => void;

export interface ObserverModel {
  getInstance: () => ObserverModel;
  partialSubscribe(
    key: keyof AuthModel
  ): (callback: (state: Partial<AuthModel>) => void) => ObsUnsubscribe;
  subscribe(callback: (state: AuthModel) => void): () => void;
  partialUnsubscribe(cbObj: ObserverPartialStateModel): void;
  unsubscribe(cbObj: ObserserGlobalStateModel): void;
  setSelectedState(key: keyof AuthModel, newValue: AuthModel[keyof AuthModel]): void;
  getSelectedState(key: keyof AuthModel): () => string;
  setState(newValue: AuthModel): void;
  getState(): AuthModel;
  getSelector(key: keyof AuthModel): string | undefined;
  reset: () => void;
}

export type ObserverControllerModel = (initialState: AuthModel) => ObserverModel;
