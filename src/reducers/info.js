
export const LOAD = 'info/LOAD';
export const LOAD_SUCCESS = 'info/LOAD_SUCCESS';
export const LOAD_FAIL = 'info/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function authorReducer(state = initialState, action) {
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
        navigator: action.result.navigator
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };

    default:
      return state;
  }
}


export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/info')
  };
}
