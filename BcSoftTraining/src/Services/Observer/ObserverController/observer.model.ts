export interface ObserverPartialStateModel<T> {
  callback: (state: Partial<T>) => void;
  key?: keyof T;
}
export interface ObserserGlobalStateModel<T> {
  callback: (state: T) => void;
  id?: string;
}
export type ObserverStateModel<T> =
  | ObserverPartialStateModel<T>
  | ObserserGlobalStateModel<T>;
export type ObsUnsubscribe = () => void;

export interface ObserverModel<T> {
  getInstance: () => ObserverModel<T>;
  partialSubscribe(
    key: keyof T
  ): (callback: (state: Partial<T>) => void) => ObsUnsubscribe;
  subscribe(callback: (state: Partial<T>) => void): ObsUnsubscribe;
  partialUnsubscribe(cbObj: ObserverPartialStateModel<T>): void;
  unsubscribe(cbObj: ObserserGlobalStateModel<T>): void;
  setSelectedState(key: keyof T, newValue: T[keyof T]): void;
  getSelectedState(key: keyof T): () => T[keyof T];
  setState(newValue: T): void;
  getState(): T;
  reset: () => void;
}

export type ObserverControllerModel = <T>(initialState: T) => ObserverModel<T>;
