export const USER_LOGIN = (data, token) => {
    return {
        type: 'LOGIN',
        payload: {
            data: data,
            token: token
        }
    }
}

export const USER_LOGOUT = () => {
    return {
        type: 'LOGOUT',
    }
}

export const RETRIEVE_USER = (token, data) => {
    return {
        type: 'CHECK_USER',
        payload: {
            existingToken: token,
            existingData: data,
        }
    }
}