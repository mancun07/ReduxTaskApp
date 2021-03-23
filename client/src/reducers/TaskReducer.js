const initialState = {
  tasks: [],
  loading: false,
  current: null,
  err: null,
};

const LogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((log) => {
          return log._id !== action.payload;
        }),
        loading: false,
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((log) => {
          return log._id === action.payload._id ? action.payload : log;
        }),
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload,
      };

    default:
      return state;
  }
};

export default LogReducer;
