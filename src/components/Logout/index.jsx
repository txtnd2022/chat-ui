import React from 'react'
import { useDispatch } from 'react-redux'
import { USER_LOGOUT } from '../../redux/actions/authActions'

function Index() {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(USER_LOGOUT())
    }

    return (
        <div>
            <button  onClick={() => logout()} > Logout </button>
        </div>
    )
}

export default Index
