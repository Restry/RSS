
export const LOAD = 'table/LOAD';
export const LOAD_SUCCESS = 'table/LOAD_SUCCESS';
export const LOAD_FAIL = 'table/LOAD_FAIL';

//export const PAGINATION = 'table/PAGINATION';
export const PAGINATION_SUCCESS = 'table/PAGINATION_SUCCESS';
//export const PAGINATION_FAIL = 'table/PAGINATION_FAIL';

const initialState = {
  loaded: false,
  data:[],
  pagination:{}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        pagination: {
          total: action.result.length,
          current: 0
        }
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };

    case PAGINATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        pagination: {
          total: action.result.length,
          current: 0
        }
      };
    default:
      return state;
  }
}

export const pagination = (url, pagination, filters, sorter) => {
  return {
    types: [LOAD, PAGINATION_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(url)
  };
};

export function load(url) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(url)
  };
}
