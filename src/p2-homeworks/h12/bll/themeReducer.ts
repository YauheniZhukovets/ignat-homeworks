type InitialStateType = {
    isTheme: string
}
const initState = {
    isTheme: 'White'
};

export const themeReducer = (state: InitialStateType = initState, action: changeThemeACType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, isTheme: action.isTheme}
        }
        default:
            return state;
    }
};

type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (isTheme: string) => {
    return {type: 'CHANGE-THEME', isTheme} as const
}
