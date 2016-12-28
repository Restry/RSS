
export const LOAD = 'table/LOAD';
export const LOAD_SUCCESS = 'table/LOAD_SUCCESS';
export const LOAD_FAIL = 'table/LOAD_FAIL';

//export const PAGINATION = 'table/PAGINATION';
export const PAGINATION_SUCCESS = 'table/PAGINATION_SUCCESS';
export const DETAILS_SUCCESS = 'table/DETAILS_SUCCESS';
export const CREATE_SUCCESS = 'table/CREATE_SUCCESS';
export const DELETE_SUCCESS = 'table/DELETE_SUCCESS';
export const EDIT_SUCCESS = 'table/EDIT_SUCCESS';
//export const PAGINATION_FAIL = 'table/PAGINATION_FAIL';

const initialState = {
  loaded: false,
  created: false,
  deleted: false,
  edited: false,
  data: [],
  pagination: {},
  item: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        created: false
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        created: false,
        deleted: false,
        edited: false,
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
    case DETAILS_SUCCESS:
      const item = action.result[0] || {};
      item.productDetails = item.productDetails && JSON.parse(item.productDetails);

      return {
        ...state,
        loading: false,
        loaded: true,
        item
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        created: true,
        item: {}
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
        item: {}
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        edited: true,
        item: action.result
      };
    default:
      return state;
  }
}

export const pagination = (url, pagination, filters, sorter) => {
  console.log('url, pagination, filters, sorter', url, pagination, filters, sorter);
  return {
    types: [LOAD, PAGINATION_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(url)
  };
};

export const load = (url) => {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(url)
  };
}

export const details = (id, itemID) => {
  return {
    types: [LOAD, DETAILS_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`${id}?code=${itemID}`)
  };
};

export const create = (id, data) => {
  return {
    types: [LOAD, CREATE_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post(`${id}`, { data })
  }
};

export const edit = (id, data) => {
  return {
    types: [LOAD, EDIT_SUCCESS, LOAD_FAIL],
    promise: (client) => client.put(`${id}/${data.id}`, { data })
  }
};

export const remove = (id, itemID) => {
  return {
    types: [LOAD, DELETE_SUCCESS, LOAD_FAIL],
    promise: (client) => client.del(`${id}/${itemID}`)
  }
};

