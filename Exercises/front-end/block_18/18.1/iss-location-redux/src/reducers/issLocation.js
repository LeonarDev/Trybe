import {
  REQUEST_ISS_LOCATION,
  REQUEST_ISS_LOCATION_ERROR,
  REQUEST_ISS_LOCATION_SUCCESS,
} from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  latitude: -19.967279,
  longitude: -44.198689,
  isFetching: false,
  error: null,
};

const issLocation = (
  state = INITIAL_ISS_LOCATION_STATE,
  { type, payload },
) => {
  switch (type) {
  case REQUEST_ISS_LOCATION:
    return {
      ...state,
      isFetching: payload.isFetching,
    };
  case REQUEST_ISS_LOCATION_SUCCESS:
    return {
      ...state,
      latitude: parseFloat(payload.latitude),
      longitude: parseFloat(payload.longitude),
      isFetching: payload.isFetching,
    };
  case REQUEST_ISS_LOCATION_ERROR:
    return {
      ...state,
      error: payload.error,
      isFetching: payload.isFetching,
    };
  default:
    return state;
  }
};

export default issLocation;
