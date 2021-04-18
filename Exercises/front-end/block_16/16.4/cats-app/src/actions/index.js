export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const failedRequest = (error) => ( {type: FAILED_REQUEST, payload: error });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://aws.random.cat/meow')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getPicture(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

