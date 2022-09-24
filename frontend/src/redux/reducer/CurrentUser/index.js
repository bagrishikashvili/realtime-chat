import {
  START_VALUE_FAIL,
  START_VALUE_SUCCESS,
  START_VALUE,
  START_CLEAR_VALUE
} from './types';

export default (state = {
  data: {},
  error: {},
  loading: false
}, action) => {
  switch (action.type) {
    case START_VALUE:
      return {
        data: {},
        loading: true,
        error: {}
    };
    case START_VALUE_SUCCESS:
      let data = action.payload.data ? action.payload.data : action.payload.user;
      return {
          data: data,
          error: {},
          loading: false,
      };
      case START_VALUE_FAIL:
        return {
            data: {},
            error: action.error.response.data,
            loading: false,
      };
      case START_CLEAR_VALUE:
        return {
            data: {},
            error: {},
            loading: false,
      };
    default:
      return state;
  }
};