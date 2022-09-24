import { isEmpty } from 'lodash';
import { 
    START_VALUE
} from './../reducer/CurrentUser/types';
const token = localStorage.getItem('access_token');

export function getValues() {
    return {
      type: START_VALUE,
      payload: {
        request:{
            method: 'GET',
            url: '/get-current-user',
            headers: {
                'Authorization': `Bearer ${!isEmpty(token) ? token : null}`
            } 
        }
      }
    }
}