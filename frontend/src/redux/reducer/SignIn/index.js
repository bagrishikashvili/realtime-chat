import {
  START_SIGNIN,
  START_SIGNIN_SUCCESS,
  START_SIGNIN_FAIL
} from './types';


export default (state = {
  data: {},
  error: {},
  loading: false
}, action) => {
  switch (action.type) {
    case START_SIGNIN:
      return {
        data: {},
        loading: true,
        error: {}
    };
    case START_SIGNIN_SUCCESS:
      return {
          data: action.payload.data,
          error: {},
          loading: false,
      };
      case START_SIGNIN_FAIL:
        return {
            data: {},
            error: action.error.response.data,
            loading: false,
      };
    default:
      return state;
  }
};