const initialState = {
    logs: [],
    loading: false,
    current: null,
    err: null
}

const LogReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_LOGS':
        return {
            ...state,
            logs: action.payload,
            loading: false
        }

        case 'SEARCH_LOGS':
        return {
            ...state,
            logs: action.payload,
            loading: false
        }

        case 'ADD_LOG':
        return {
            ...state,
            logs: [...state.logs, action.payload],
            loading: false
        }

        case 'DELETE_LOG':
        return  {
            ...state,
            logs: state.logs.filter(log => {
                return log._id !== action.payload
            }),
            loading: false
        }

        case 'UPDATE_LOG':
        return {
            ...state,
            logs: state.logs.map(log => {
                return log._id === action.payload._id ? action.payload : log
            }),
            loading: false
        }


        case 'SET_LOADING':
        return {
            ...state,
            loading: true
        }

        case 'SET_CURRENT':
        return {
            ...state,
            current: action.payload
        }

        default:
        return state
    }
}

export default LogReducer