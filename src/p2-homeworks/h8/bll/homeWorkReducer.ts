import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'SORT-UP': {
            return [...state].sort((a, b) => a.name < b.name ? -1 : 0)
        }
        case 'SORT-DOWN': {
            return [...state].sort((a, b) => a.name > b.name ? 1 : 0)
        }
        case 'CHECK': {
            return state.filter(f=>f.age>=action.payload.check)
        }
        default: return state
    }
}

type ActionType = SortUpACType | SortDownACType | SortCheckACType

type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return{type: 'SORT-UP'} as const
}
type SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return{type: 'SORT-DOWN'} as const
}
type SortCheckACType = ReturnType<typeof sortCheckAC>
export const sortCheckAC = (check:number) => {
    return{type: 'CHECK', payload: {check}} as const
}


