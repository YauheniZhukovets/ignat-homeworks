import {UserType} from '../HW8';

export const homeWorkReducer = (state: Array<UserType>, action: CommonActionType): Array<UserType> => {
    switch (action.type) {
        case 'SORT-UP': {
            let copyState = state.map(m=>m)
            copyState.sort( (a, b) => a.name < b.name ? -1 : 1 )
            return copyState
        }
        case 'SORT-DOWN': {
            let copyState = state.map(m=>m)
            copyState.sort( (a, b) => b.name < a.name ? -1 : 1 )
            return copyState
        }
        case 'AGE-CHECK': {
            return state.filter(f => f.age > action.payload)
        }
        default:
            return state
    }
}

export type CommonActionType = sortUpACType | sortDownACType | ageCheckACType

export type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {type: 'SORT-UP'} as const
}

export type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {type: 'SORT-DOWN'} as const
}

export type ageCheckACType = ReturnType<typeof ageCheckAC>
export const ageCheckAC = (payload: number) => {
    return {type: 'AGE-CHECK', payload: 18} as const
}