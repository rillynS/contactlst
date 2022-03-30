const initialState = []
export const contactCurrentUser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_CONTACT_LIST':
            return state = [...actions.payload]
        case 'REMOVE_CONTACT':
            return state.filter(item => item.id !== actions.payload)
        case 'CHANGE_CONTACT':
            state[actions.payload[0]] = actions.payload[1]
            return [...state]
        case 'ADD_NEW_CONTACT':
            console.log('ADD_NEW_CONTACT');
            return [...state, actions.payload]
        default:
            return state
    }
}