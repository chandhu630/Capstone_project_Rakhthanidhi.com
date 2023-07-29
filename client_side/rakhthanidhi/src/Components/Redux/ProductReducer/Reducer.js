import {
  GET_ALL_BLOOD_FAILURE,
  GET_ALL_BLOOD_REQUEST,
  GET_ALL_BLOOD_SUCCESS
   
  } 
  from "./ActionType";
  
  export const initState = {
    bloodData: [],
    error: "",
    loading: false,
    searchData: [],
    requestedProduct: []
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_BLOOD_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_BLOOD_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_BLOOD_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          bloodData: action.loadData,
        };
        default:
        return state;
    }
  };
  export default reducer;