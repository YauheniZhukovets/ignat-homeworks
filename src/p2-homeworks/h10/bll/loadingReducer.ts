type InitialStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}


export const loadingReducer = (state:InitialStateType = initState, action: loadingACType): InitialStateType => {
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {type: 'IS-LOADING', isLoading} as const
}