const initialState = {
  goats: [],
  loading: false,
  error: ''
};

export const appReducer = (state = initialState, action) => {
  switch(action.type){
    case "FETCHING_GOATS_START":
      return { ...state, loading: true };
    case "FETCHING_GOATS_SUCCESS":
      return { ...state, goats: action.payload, loading: false, error: '' };
    case "FETCHING_GOATS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}