import { ObserverController } from "../ObserverController";


export interface LoaderModel {
	isVisible: boolean;
}

const initialLoaderState: LoaderModel = {
	isVisible: false,
};

const { setSelectedState , ...obsMethods } =
	ObserverController<LoaderModel>(initialLoaderState).getInstance();

export const LoaderObserver = { ...obsMethods };

export const showLoader = () => setSelectedState('isVisible', true);
export const hideLoader = () => setSelectedState('isVisible', false);