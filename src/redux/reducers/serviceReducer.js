const defaultState = {
  service: {},
};

const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "setService":
      return {
        ...state,
        service: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducer;
