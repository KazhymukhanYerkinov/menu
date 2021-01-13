import { dataAPI } from "../api/api";
import { reset } from 'redux-form';

const SET_DATA_PRODUCTS = 'SET_DATA_PRODUCTS';
const SET_SUCCESS_PRODUCTS = 'SET_SUCCESS_PRODUCTS';



let initialState = {
    cafe: null,
    success: false,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_PRODUCTS:
            return {
                ...state,
                cafe: action.cafe
            }
        case SET_SUCCESS_PRODUCTS:
            return {
                ...state,
                success: action.success
            }

        default:
            return state;
    }
}

const setDataProducts = (cafe) => ({ type: SET_DATA_PRODUCTS, cafe });
export const setSuccess = (success) => ({ type: SET_SUCCESS_PRODUCTS, success });


export const getDataProductsThunk = (name) => async (dispatch) => {
    try {
        let data = await dataAPI.getData(name);
        dispatch(setDataProducts(data));
    } catch (err) {
        console.log(err);
    }
}

export const postOrderThunk =  (name, phone, table, comment, items) => async (dispatch) => {
    try {
        const data = await dataAPI.postOrder(name, phone, table, comment, items);
        if (data.status === 200) {
            dispatch(setSuccess(true));
            dispatch(reset('order'));
        } 
    }
    catch (err) {
        console.log(err);
    }
}


export default dataReducer;

