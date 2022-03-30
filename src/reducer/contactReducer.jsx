const initialState = [
    [
        { id: 1, userName: 'Jack', phoneNumber: 89885112, location: 'UK' },
        { id: 2, userName: 'Antew', phoneNumber: 84365112, location: 'UK' },
        { id: 3, userName: 'Jastin', phoneNumber: 86745112, location: 'UK' },
        { id: 4, userName: 'Joe', phoneNumber: 87725112, location: 'UK' }
    ], [
        { id: 1, userName: 'Jackss', phoneNumber: 89885112, location: 'UK' },
        { id: 2, userName: 'Antewss', phoneNumber: 84365112, location: 'UK' },
        { id: 3, userName: 'Jastin', phoneNumber: 86745112, location: 'UK' },
        { id: 4, userName: 'Joe', phoneNumber: 87725112, location: 'UK' }
    ]
]

export const contactReducer = (state = initialState, actions) => {
    switch (actions.type) {   
        default:
            return state
    }
}