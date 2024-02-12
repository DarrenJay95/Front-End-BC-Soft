import { ObserverController } from "../ObserverController";


export interface LoaderModel {
	isVisible: boolean;
}

const initialLoaderState: LoaderModel = {
	isVisible: false,
};

const { setState, ...obsMethods } =
	ObserverController<LoaderModel>(initialLoaderState).getInstance();

export const LoaderObserver = { ...obsMethods };

export const showLoader = () => setState('isVisible', true);
export const hideLoader = () => setState('isVisible', false);