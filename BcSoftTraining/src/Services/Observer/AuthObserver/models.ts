import { AuthModel } from "../../Dto";

export interface ObserverStateModel {
  callback: (state: Partial<AuthModel>) => void;
  key: keyof AuthModel;
}
export type ObsUnsubscribe = () => void;

export interface ObserverModel {
  getInstance: () => ObserverModel;
  onSubscribe(
    key: keyof AuthModel
  ): (callback: (state: Partial<AuthModel>) => void) => ObsUnsubscribe;
  getSelector: (key: keyof AuthModel) => AuthModel[keyof AuthModel] | undefined;
  getState: (
    key: keyof AuthModel
  ) => () => AuthModel[keyof AuthModel] | undefined;
  setState: (
    key: keyof AuthModel,
    newValue: AuthModel[keyof AuthModel]
  ) => void;
  reset: () => void;
}

export type ObserverControllerModel = (initialState: AuthModel) => ObserverModel;
