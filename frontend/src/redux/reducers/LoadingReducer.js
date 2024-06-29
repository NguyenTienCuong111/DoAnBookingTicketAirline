import {HIDE_LOADING, HIDE_LOADING_BUTTON, SET_LOADING, SET_LOADING_BUTTON, SET_LOADING_SPIN, HIDE_LOADING_SPIN, SET_RESULT, HIDE_RESULT} from "../types/LoadingTypes";

const initialState = {
	isLoading: false,
	loadingButton: false,
	isLoadingSpin: false,
	isSuccess: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING: {
			return {...state, isLoading: true};
		}
		case HIDE_LOADING: {
			return {...state, isLoading: false};
		}
		case SET_LOADING_BUTTON: {
			return {...state, loadingButton: true};
		}
		case HIDE_LOADING_BUTTON: {
			return {...state, loadingButton: false};
		}
		case SET_LOADING_SPIN: {
			return {...state, isLoadingSpin: true};
		}
		case HIDE_LOADING_SPIN: {
			return {...state, isLoadingSpin: false};
		}
		case SET_RESULT: {
			return {...state, isSuccess: true};
		}
		case HIDE_RESULT: {
			return {...state, isSuccess: false};
		}
		default:
			return state;
	}
};
