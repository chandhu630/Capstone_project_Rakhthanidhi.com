import {
    GET_ALL_BLOOD_FAILURE,
    GET_ALL_BLOOD_REQUEST,
    GET_ALL_BLOOD_SUCCESS,

    GET_ALL_QUESTIONS_FAILURE,
    GET_ALL_QUESTIONS_REQUEST,
    GET_ALL_QUESTIONS_SUCCESS

}
from "./ActionType.js";
import axios from  "axios";
export const getAllBloodRequest = () => ({
        type:GET_ALL_BLOOD_REQUEST,
    })
    export const getAllBloodFailure = () => ({
        type:GET_ALL_BLOOD_FAILURE,
    })
    export const getAllBloodSuccess = (loadData) => ({
        type:GET_ALL_BLOOD_SUCCESS,
        loadData
    })


    export const getAllquestionRequest = () => ({
        type:GET_ALL_QUESTIONS_REQUEST,
    })
    export const getAllquestionFailure = () => ({
        type:GET_ALL_QUESTIONS_FAILURE,
    })
    export const getAllquestionSuccess = (loadData) => ({
        type:GET_ALL_QUESTIONS_SUCCESS,
        loadData
    })

    export const getAllblood = () =>(dispatch) => {
        dispatch(getAllBloodRequest());
        axios.get("http://localhost:8080/blood")
        .then((res) => dispatch(getAllBloodSuccess(res.data)))
        .catch(() => dispatch(getAllBloodRequest()));
    }
    
    export const getAllquestions = () =>(dispatch) => {
        dispatch(getAllquestionRequest());
        axios.get("http://localhost:8080/questions")
        .then((res) => dispatch(getAllquestionSuccess(res.data)))
        .catch(() => dispatch(getAllquestionRequest()));
    }
    









