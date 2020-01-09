export const initialState = { authAttempted: false, auth: null, user: null };

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH_STATE':
      return {
        ...state,
        auth: action.auth,
        authAttempted: true
      };
    default:
      return state;
  }
};
