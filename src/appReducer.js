export const initialState = {
  authAttempted: false,
  auth: null,
  user: null,
  loggLoading: true
};

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH_STATE':
      return {
        ...state,
        authAttempted: true,
        loggLoading: false,
        ...action.test
      };
    case 'LOAD_USER':
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
