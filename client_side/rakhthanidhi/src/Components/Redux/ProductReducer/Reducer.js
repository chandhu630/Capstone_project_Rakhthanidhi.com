import {
  GET_ALL_BLOOD_FAILURE,
  GET_ALL_BLOOD_REQUEST,
  GET_ALL_BLOOD_SUCCESS,
  
  GET_ALL_QUESTIONS_FAILURE,
  GET_ALL_QUESTIONS_REQUEST,
  GET_ALL_QUESTIONS_SUCCESS
   
  } 
  from "./ActionType";
  
  export const initState = {
    bloodData: [],
    error: "",
    loading: false,
    searchData: [],
    requestedProduct: [],
    questionData :[]
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


      case GET_ALL_QUESTIONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_QUESTIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_QUESTIONS_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          questionData: action.loadData,
        };
        default:
        return state;
    }
  };
  export default reducer;

  

  
  

  
  
  

