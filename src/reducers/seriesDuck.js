import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

const BASE_URL = 'http://gateway.marvel.com:80';

const FETCH_LIST = 'FETCH_LIST';

const series = (state = [], action) => {
  switch (action.type) {
    case FETCH_LIST:
      return action.data;
    default:
      return state;
  }
};

export default series;

export const fetchList = () => dispatch =>
  axios
    .get(`${BASE_URL}/v1/public/series`, {
      params: getQueryParams(),
    })
    .then(response =>
      dispatch({
        type: FETCH_LIST,
        data: response.data.data.results,
      })
    )
    .catch(error => console.log(error));
