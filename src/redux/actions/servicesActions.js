export const setService = (service) => (dispatch) => {
  dispatch({
    type: "setService",
    payload: service,
  });
};
