import { AuthModel, authInitialState } from "../../Dto";
import {
  ObserserGlobalStateModel,
  ObserverControllerModel,
  ObserverModel,
  ObserverPartialStateModel,
  ObserverStateModel,
} from "./auth.model";

export const AuthController: ObserverControllerModel = function (
  initialState: AuthModel
) {
  let instance: ObserverModel;
  let observerList: ObserverStateModel[] = [];
  let state = initialState;

  const getInstance = (): ObserverModel => {
    if (!instance) {
      instance = AuthController(initialState);
    }
    return instance;
  };
  function partialSubscribe(key: keyof AuthModel) {
    return function subscribe(callback: (state: Partial<AuthModel>) => void) {
      const cbObj = { callback, key };
      observerList.push(cbObj);
      return partialUnsubscribe.bind(this, cbObj);
    };
  }
  function subscribe(callback: (state: AuthModel) => void) {
    const cbObj = { callback, id: getUUId() };
    observerList.push(cbObj);
    return unsubscribe.bind(this, cbObj);
  }
  const partialUnsubscribe = function (cbObj: ObserverPartialStateModel): void {
    const newObserverList = filterList("key", cbObj);
    observerList = newObserverList;
  };
  const unsubscribe = function (cbObj: ObserserGlobalStateModel): void {
    const newObserverList = filterList("id", cbObj);
    observerList = newObserverList;
  };
  const filterList = <AuthModel>(key: keyof AuthModel, cbObj: AuthModel) => {
    return observerList.filter(
      (obs) =>
        !(obs as AuthModel)?.[key] || (obs as AuthModel)[key] !== cbObj[key]
    );
  };
  const isPartial = (
    obs: ObserverStateModel
  ): obs is ObserverPartialStateModel => {
    return !!(obs as ObserverPartialStateModel).key;
  };

  const getUUId = () => {
    return window.crypto.getRandomValues(new Uint8Array(16)).join("");
  };

  const setSelectedState = (
    key: keyof AuthModel,
    newValue: AuthModel[keyof AuthModel]
  ): void => {
    state = {
      ...state,
      [key]: newValue,
    };
    observerList.forEach(
      (obs) => isPartial(obs) && obs.key == key && obs.callback(state)
    );
  };
  const getSelector = (key: keyof AuthModel) => {
    return state[key];
  };
  const getSelectedState = (key: keyof AuthModel) => {
    return function getSelector(){
      return state[key];
    };
  };
  const setState = (newValue: AuthModel): void => {
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
    getSelector,
    reset,
  };
};

const {
  setState,
  getState,
  getSelectedState,
  setSelectedState,
  reset,
  partialSubscribe,
  subscribe,
  getSelector,
} = AuthController(authInitialState).getInstance();

export const Auth = {
  setState,
  getState,
  getSelectedState,
  setSelectedState,
  reset,
  partialSubscribe,
  subscribe,
  getSelector,
};
