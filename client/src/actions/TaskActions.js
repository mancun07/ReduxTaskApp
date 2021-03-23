export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    const res = await fetch("/api/v1/logs");
    const data = await res.json();
    dispatch({ type: "GET_TASKS", payload: data.data });
  } catch (err) {
    dispatch({ type: "GET_ERRORS", payload: err.message });
  }
};

// export const searchTasks = (text) => async dispatch => {

//         try {
//             dispatch({type: 'SET_LOADING'})
//             const res = await fetch(`/api/v1/logs?q=${text}`)
//             const data = await res.json()

//             dispatch({type: 'SEARCH_TASKS', payload: data.data})
//         }

//         catch (err) {
//             dispatch({type: 'GET_ERRORS', payload: err.message})
//         }
// }

export const addTask = (newLog) => async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    const res = await fetch("/api/v1/logs", {
      method: "POST",
      body: JSON.stringify(newLog),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    dispatch({ type: "ADD_TASK", payload: data.data });
  } catch (err) {
    dispatch({ type: "GET_ERRORS", payload: err.message });
  }
};

export const updateTask = (log) => async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    const res = await fetch(`/api/v1/logs/${log._id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    dispatch({ type: "UPDATE_TASK", payload: data.data });
  } catch (err) {
    dispatch({ type: "GET_ERRORS", payload: err.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    await fetch(`/api/v1/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({ type: "DELETE_TASK", payload: id });
  } catch (err) {
    dispatch({ type: "GET_ERRORS", payload: err.message });
  }
};

// export const setLoading = () => async dispatch => {
//      dispatch({type: 'SET_LOADING'})

// }

// export const setLoading = () => {
//     dispatch({type: SET_LOADING});
//   };

export const setCurrent = (log) => {
  return { type: "SET_CURRENT", payload: log };
};
