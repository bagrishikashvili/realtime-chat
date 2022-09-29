import { isEmpty } from 'lodash';
import { 
    START_GET_ROOMS,
    START_GET_ROOMS_SUCCESS,
    START_GET_ROOMS_FAIL,
    START_GET_ROOMS_CLEAR
} from './../reducer/GetRooms/types';
const token = localStorage.getItem('access_token');

export function getRooms() {
    return {
      type: START_GET_ROOMS,
      payload: {
        request:{
            method: 'GET',
            url: '/get-rooms',
            headers: {
                'Authorization': `Bearer ${!isEmpty(token) ? token : null}`
            } 
        }
      }
    }
}

export function clearRooms() {
	return {
		type: START_GET_ROOMS_CLEAR,
		payload: []
	};
}