import { AuthModel } from "../../Dto";
import { ObserverControllerModel, ObserverModel, ObserverStateModel } from "./models";


export const AuthController: ObserverControllerModel = function (
  initialState: AuthModel
) {
  let instance: ObserverModel;
  let observerList: ObserverStateModel[] = [];
 
  const resetInitialCookies = () => {
    Object.entries(initialState).forEach(setCookie)
  };
  const setCookie = ([key, value]: [key: string, value: string]) =>{
    document.cookie = `${key}=${value}; SameSite=None; Secure`;
  }
  
  const unsubscribe = function (cbObj: ObserverStateModel): void {
    const newObserverList = observerList.filter((obs) => obs.key !== cbObj.key);
    observerList = newObserverList;
  };

  const setState = (
    key: keyof AuthModel,
    newValue: AuthModel[keyof AuthModel]
  ): void => {
    if(!newValue) throw Error('no value for Authmodel! no possible')
    setCookie([key, newValue!])
    observerList.forEach(
      (obs) =>
        obs.key == key &&
        obs.callback({
          [key]: newValue,
        })
    );
  };
  const getSelector = (key: keyof AuthModel) => {
    const cookies = document.cookie;
    if (cookies) {
      const value = cookies
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1];
      return value;
    }

    return undefined;
  };
  const getState = (key: keyof AuthModel) => () => {
    return getSelector(key);
  };
  const reset = () => {
    resetInitialCookies();
    observerList.forEach((obs) =>
      obs.callback(initialState)
    );
  };
  return {
    getInstance: (): ObserverModel => {
      if (!instance) {
        instance = AuthController(initialState);
      }
      return instance;
    },
    onSubscribe(key: keyof AuthModel) {
      return function subscribe(callback: (state: Partial<AuthModel>) => void) {
        const cbObj = { callback, key };
        observerList.push(cbObj);
        return unsubscribe.bind(this, cbObj);
      };
    },
    getState,
    getSelector,
    setState,
    reset,
  };
};
const { setState, getState, getSelector, reset, onSubscribe } = AuthController({
  token: "",
  refreshToken: "",
}).getInstance();

export const Auth = {
  getSelector,
  getState,
  onSubscribe,
  reset,
  setState,
};
