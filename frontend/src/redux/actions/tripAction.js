import {message} from "antd";
import {tripService} from "../services/tripService";
import {GET_DETAIL_TRIP, GET_DETAIL_TRIPPASSENGER, GET_TRIP, GET_TRIP_PASSENGER, SET_TRIPPASSENGER_CREATE, SET_TRIP_CREATE} from "../types/TripTypes";
import {GET_DETAIL_USER} from "../types/userTypes";
import {getPointPickUpAction} from "./pointAction";

export const getTripAction = () => {
	return async (dispatch) => {
		try {
			const result = await tripService.getTrip();
			console.log(result);
			if (result.status === 200) {
				dispatch({
					type: GET_TRIP,
					listTrip: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const createTripAction = (trip, next) => {
	return async (dispatch) => {
		try {
			const result = await tripService.createTrip(trip);
			console.log(result);
			if (result.status === 200) {
				message.success("Tạo trip thành công");
				dispatch({
					type: SET_TRIP_CREATE,
					tripCreated: result.data,
				});
				next();
			}
		} catch (error) {
			message.error("Tạo trip không thành công");
			console.log(error);
		}
	};
};

export const createTripPassengerAction = (tripPassenger, next) => {
	return async (dispatch, getState) => {
		try {
			const result = await tripService.createTripPassenger(tripPassenger);
			console.log(result);
			if (result.status === 200) {
				message.success("Phân Hãng bay cho chuyến đi thành công");
				dispatch({
					type: SET_TRIPPASSENGER_CREATE,
					tripPassengerCreated: result.data,
				});
				next();
			}
		} catch (error) {
			message.error("Phân Hãng bay cho chuyến đi không thành công");
			console.log(error);
		}
	};
};

export const getDetailTripAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await tripService.getDetailTrip(id);
			console.log(result);
			if (result.status === 200) {
				dispatch({
					type: GET_DETAIL_TRIP,
					tripDetail: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getDetailTripPassengerAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await tripService.getDetailTripPassenger(id);
			console.log("api detail trip passenger", result);
			if (result.status === 200) {
				dispatch({
					type: GET_DETAIL_TRIPPASSENGER,
					tripPassengerDetail: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getTripPassengerAction = (tripId) => {
	return async (dispatch) => {
		try {
			const result = await tripService.getTripPassenger(tripId);
			console.log(result);
			if (result.status === 200) {
				dispatch({
					type: GET_TRIP_PASSENGER,
					listTripPassenger: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllTripPassengerAction = () => {
	return async (dispatch) => {
		try {
			const result = await tripService.getAllTripPassenger();
			console.log(result);
			if (result.status === 200) {
				dispatch({
					type: GET_TRIP_PASSENGER,
					listTripPassenger: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateTripPassengerAction = (tripPassenger, id) => {
	return async (dispatch) => {
		try {
			const result = await tripService.updateTripPassenger(tripPassenger, id);
			console.log(result);
			if (result.status === 200) {
				message.success("update chuyến bay thành công");
				dispatch(getTripPassengerAction(tripPassenger.tripId));
			}
		} catch (error) {
			message.error("update chuyến bay thất bại");
			console.log(error);
		}
	};
};

export const deleteTripPassengerAction = (tripPassenger) => {
	return async (dispatch) => {
		try {
			const result = await tripService.deleteTripPassenger(tripPassenger.id);
			console.log(result);
			if (result.status == 200) {
				message.success("xóa chuyến bay thành công");
				dispatch(getTripPassengerAction(tripPassenger.tripId));
			}
		} catch (error) {
			message.error("update chuyến bay thất bại");
			console.log(error);
		}
	};
};

export const confirmTripPassengerAction = (tripPassenger, status) => {
	return async (dispatch) => {
		try {
			let statusObj = {
				status: status,
			};
			const result = await tripService.confirmTripPassenger(tripPassenger.id, statusObj);
			console.log(result);
			if (result.status == 200) {
				message.success("Xác nhận chuyến bay thành công");
				dispatch(getTripPassengerAction(tripPassenger.tripId));
			}
		} catch (error) {
			message.error("Xác nhận chuyến bay thất bại");
			console.log(error);
		}
	};
};
