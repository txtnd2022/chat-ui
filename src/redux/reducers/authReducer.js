const initialState = {
    userExist: false,
    userData: {
        data: {
            email: 'txtnd@gmail.com',
            username: 'Text End'
        }
    },
    token: null
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const { data, token } = action.payload
            return {
                userExist: true,
                userData: data,
                token: token
            }
        case 'LOGOUT':
            return {
                userExist: false,
                userData: '',
                token: null
            }
        case 'CHECK_USER':
            const { existingToken, existingData } = action.payload
            return {
                userExist: true,
                userData: existingData,
                token: existingToken
            }
        default:
            return state
    }
}

export default auth_reducer 