import { isEmpty } from 'lodash';
import { START_SIGNIN } from './../reducer/SignIn/types';
import { START_VALUE, START_VALUE_SUCCESS } from './../reducer/CurrentUser/types';

export function login(values) {
    return {
      type: START_SIGNIN,
      payload: {
        request: {
            method: 'POST',
            url: '/login',
            data: { ...values }
        }
      }
    }
}

export function setCurrentUser(user) {
	return {
		type: START_VALUE_SUCCESS,
		payload: user
	};
}

