const initialState = {
    'user1': {
        id: 0,
        name: 'user1',
        password: 1111,
        isAuth: false
    },
    'user2': {
        id: 1,
        name: 'user2',
        password: 1111,
        isAuth: false
    }
}

export const userRedcer = (state = initialState, actions) => {

    switch (actions.type) {
        case 'AUTH':
            return {...state,[actions.payload]:{...state[actions.payload],isAuth:true}}
        default:
            return state
    }

}