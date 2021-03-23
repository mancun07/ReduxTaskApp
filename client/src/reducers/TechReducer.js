const initialState = {
    techs: [],
    err: null
}

const TechReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TECHS':
        return {
            ...state,
            techs: action.payload
        }

        case 'ADD_TECH':
        return {
            ...state,
            techs: [...state.techs, action.payload]
        }

        case 'DELETE_TECH':
            return {
                ...state,
                techs: state.techs.filter(tech => {
                    return tech._id !== action.payload
                })
            }

        case 'GET_TECHS_ERROR':
            return {
                ...state,
                err: action.payload
            }

        default:
        return state
    }
}

export default TechReducer