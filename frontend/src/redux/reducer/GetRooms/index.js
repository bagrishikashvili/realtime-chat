import {
  START_GET_ROOMS,
  START_GET_ROOMS_SUCCESS,
  START_GET_ROOMS_FAIL,
  START_GET_ROOMS_CLEAR
} from './types';

export default (state = {
  data: [],
  error: {},
  loading: false
}, action) => {
  switch (action.type) {
    case START_GET_ROOMS:
      return {
        data: [],
        loading: true,
        error: {}
    };
    case START_GET_ROOMS_SUCCESS:
      return {
          data: action.payload.data,
          error: {},
          loading: false,
      };
      case START_GET_ROOMS_FAIL:
        return {
            data: [],
            error: action.error.response.data,
            loading: false,
      };
      case START_GET_ROOMS_CLEAR:
        return {
            data: [],
            error: {},
            loading: false,
      };
    default:
      return state;
  }
};