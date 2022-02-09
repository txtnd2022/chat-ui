import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import ChatScreen from './ChatScreen'
import { RETRIEVE_USER } from '../redux/actions/authActions'
import axios from 'axios'
import { SERVER_URL } from '../host'

function MainScreen() {

    const host = SERVER_URL 


    const dispatch = useDispatch()


    React.useEffect(async () => {
        setTimeout(async () => {
            try {
                const local_token = localStorage.getItem('token')
                const url = host+'/api/auth/retrieveUser/'+local_token
                const res = await axios(url)
                dispatch(RETRIEVE_USER(local_token, res.data.data))
            } catch (error) {
                console.log(error)
            }
        }, 1000)
    }, [])

    const state = useSelector(state => state.auth_reducer)

    return (
        <div>
            {
                state.token === null ? <>
                    <Login />
                </> : <>
                    <ChatScreen state={state} />
                </>

            }
        </div>
    )
}

export default MainScreen
