import { getCurrentISSLocation } from '../services/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
  payload: {
    isFetching: true,
  },
});

export const requestISSLocationSuccess = ({ iss_position: { latitude, longitude } }) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload: { latitude, longitude, isFetching: false },
});

export const requestISSLocationError = (error) => ({
  type: REQUEST_ISS_LOCATION_ERROR,
  payload: { error, isFetching: false },
});

export const fetchISSLocation = () => async (dispatch) => {
  dispatch(requestISSLocation());

  try {
    const issLocationResponse = await getCurrentISSLocation();
    dispatch(
      requestISSLocationSuccess(issLocationResponse),
    );
  } catch (error) {
    dispatch(
      requestISSLocationError(issLocationError),
    );
  }
};
