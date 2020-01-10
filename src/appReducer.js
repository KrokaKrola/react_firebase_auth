export const initialState = { authAttempted: false, auth: null, user: null, loggLoading: true };

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH_STATE':
      return {
        ...state,
        auth: action.auth,
        authAttempted: true,
        loggLoading: false
      };
    default:
      return state;
  }
};
