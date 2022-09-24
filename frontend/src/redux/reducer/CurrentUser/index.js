import {
  START_VALUE_FAIL,
  START_VALUE_SUCCESS,
  START_VALUE
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
      return {
          data: action.payload.data,
          error: {},
          loading: false,
      };
      case START_VALUE_FAIL:
        return {
            data: {},
            error: action.error.response.data,
            loading: false,
      };
    default:
      return state;
  }
};