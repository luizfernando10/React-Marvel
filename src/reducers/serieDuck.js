import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'http://gateway.marvel.com:80';

const FETCH_DETAIL = 'FETCH_DETAIL';
const CLEAN_DETAILS = 'CLEAN_DETAILS';

const defaultState = [];

const serie = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return action.data;
    case CLEAN_DETAILS:
      return defaultState;
    default:
      return state;
  }
};

export default serie;

export const fetchDetails = id => dispatch =>
  axios
    .get(`${BASE_URL}/v1/public/series/${id}`, {
      params: getQueryParams(),
    })
    .then(response =>
      dispatch({
        type: FETCH_DETAIL,
        data: response.data.data.results[0],
      })
    )
    .catch(error => console.log(error));

export const cleanDetails = () => ({
  type: CLEAN_DETAILS,
});
