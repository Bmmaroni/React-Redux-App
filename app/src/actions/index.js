import axios from 'axios';

export const getGoats = () => (dispatch) => {
  dispatch({type: 'FETCHING_GOATS_START'});
  axios
    .get ('http://placegoat.com/200')
    .then(res => {
      console.log('Response: ', res);
      dispatch({type: 'FETCHING_GOATS_SUCCESS'});
    })
    .catch(err => {
      console.log('Error: ', err);
      dispatch({type: 'FETCHING_GOATS_FAILURE'});
    })
};