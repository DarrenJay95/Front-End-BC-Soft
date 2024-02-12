export interface ObserverStateModel<T> {
  callback: (state: T) => void;
  key: keyof T;
}
export type ObsUnsubscribe = () => void;

export interface ObserverModel<T> {
  getInstance: () => ObserverModel<T>;
  onSubscribe(key: keyof T): (callback: (state: T) => void) => ObsUnsubscribe;
  getSelector: (key: keyof T) => T[keyof T];
  getState: () => T;
  setState: (key: keyof T, newValue: T[keyof T]) => void;
  reset: () => void;
}

type ObserverControllerModel = <T>(initialState: T) => ObserverModel<T>;

export const ObserverController: ObserverControllerModel = function <T>(
  initialState: T
) {
  let instance: ObserverModel<T>;
  let observerList: ObserverStateModel<T>[] = [];
  let state = initialState;

  const unsubscribe = function (cbObj: ObserverStateModel<T>): void {
    const newObserverList = observerList.filter((obs) => obs.key !== cbObj.key);
    observerList = newObserverList;
  };

  const setState = (key: keyof T, newValue: T[keyof T]): void => {
    state = {
      ...state,
      [key]: newValue,
    };
    observerList.forEach((obs) => obs.key == key && obs.callback(state));
  };
  const reset = () => {
    state = initialState;
    observerList.forEach((obs) => obs.callback(state));
  };
  return {
    getInstance: (): ObserverModel<T> => {
      if (!instance) {
        instance = ObserverController<T>(initialState);
      }
      return instance;
    },
    onSubscribe(key: keyof T) {
      return function subscribe(callback: (state: T) => void) {
        const cbObj = { callback, key };
        observerList.push(cbObj);
        return unsubscribe.bind(this, cbObj);
      };
    },
    getState: () => state,
    getSelector: (key: keyof T) => {
        return state[key];
    },
    setState,
    reset,
  };
};
