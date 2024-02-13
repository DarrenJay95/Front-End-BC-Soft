import {
  ObserserGlobalStateModel,
  ObserverControllerModel,
  ObserverModel,
  ObserverPartialStateModel,
  ObserverStateModel,
} from "./observer.model";

export const ObserverController: ObserverControllerModel = function <T>(
  initialState: T
) {
  let instance: ObserverModel<T>;
  let observerList: ObserverStateModel<T>[] = [];
  let state = initialState;

  const getInstance = (): ObserverModel<T> => {
    if (!instance) {
      instance = ObserverController<T>(initialState);
    }
    return instance;
  };
  function partialSubscribe(key: keyof T) {
    return function subscribe(callback: (state: Partial<T>) => void) {
      const cbObj = { callback, key };
      observerList.push(cbObj);
      return partialUnsubscribe.bind(this, cbObj);
    };
  }
  function subscribe(callback: (state: T) => void) {
    const cbObj = { callback, id: getUUId() };
    observerList.push(cbObj);
    return unsubscribe.bind(this, cbObj);
  }
  const partialUnsubscribe = function (
    cbObj: ObserverPartialStateModel<T>
  ): void {
    const newObserverList = filterList("key", cbObj);
    observerList = newObserverList;
  };
  const unsubscribe = function (cbObj: ObserserGlobalStateModel<T>): void {
    const newObserverList = filterList("id", cbObj);
    observerList = newObserverList;
  };
  const filterList = <T>(key: keyof T, cbObj: T) => {
    return observerList.filter(
      (obs) => !(obs as T)?.[key] || (obs as T)[key] !== cbObj[key]
    );
  };
  const isPartial = (
    obs: ObserverStateModel<T>
  ): obs is ObserverPartialStateModel<T> =>
    !!(obs as ObserverPartialStateModel<T>).key;
  const getUUId = () =>
    window.crypto.getRandomValues(new Uint8Array(16)).join("");

  const setSelectedState = (key: keyof T, newValue: T[keyof T]): void => {
    state = {
      ...state,
      [key]: newValue,
    };
    observerList.forEach(
      (obs) => isPartial(obs) && obs.key == key && obs.callback(state)
    );
  };
  const getSelector = (key: keyof T) => {
    return state[key];
  };
  const getSelectedState = (key: keyof T) => {
    return function getSelector(){
      return state[key];
    }
  };
  const setState = (newValue: T): void => {
    state = newValue;
    observerList.forEach((obs) => !isPartial(obs) && obs.callback(newValue));
  };
  const getState = () => state;
  const reset = () => {
    state = initialState;
    observerList.forEach((obs) => obs.callback(state));
  };

  return {
    getInstance,
    partialSubscribe,
    subscribe,
    partialUnsubscribe,
    unsubscribe,
    setSelectedState,
    getSelectedState,
    setState,
    getState,
    reset,
    getSelector
  };
};
