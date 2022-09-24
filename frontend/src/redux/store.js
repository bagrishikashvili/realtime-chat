import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './combineReducers';
import apiError from './apiErrors';

let url = process.env.NODE_ENV !== "production" ? `${process.env.REACT_APP_API_LOCAL_HOST}` : `${process.env.REACT_APP_API_PROD_HOST}`;

const client = axios.create({ baseURL: url, timeout: 10000, withCredentials: false });


let store = createStore(reducer, applyMiddleware(axiosMiddleware(client), apiError));

export default store;