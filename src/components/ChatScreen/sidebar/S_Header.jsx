import React from 'react'
import styles from '../../../../styles/ChatScreen/Sidebar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGOUT } from '../../../redux/actions/authActions'
import Swal from 'sweetalert2'
import axios from 'axios'
import { SERVER_URL } from '../../../host'

function S_Header() {

    const host = SERVER_URL

    const dispatch = useDispatch()
    const state = useSelector(state => state.auth_reducer)
    const username = state.userData.username
    const user_id = state.userData._id

    const logOut = () => {
        try {
            localStorage.removeItem('token')
            dispatch(USER_LOGOUT())
        } catch (error) {

        }
    }

    const getConnection = async (email) => {
        try {
            const url = host+'/api/auth/retrieveUser/' + email
            const res = await axios(url)
            const connection_id = res.data.data._id
            return connection_id
        } catch (er) {
            console.log(er)
        }
    }

    const newChat = async () => {
        try {
            const { value: email } = await Swal.fire({
                title: 'Add new friend',
                input: 'text',
                inputLabel: 'Enter email of your friend',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to write something!'
                    }
                }
            })
            if (email) {
                try {
                    const connection_id = await getConnection(email)
                    const url = `${host}/api/users/${connection_id}/connect`
                    const res = await axios({
                        method: 'put',
                        url,
                        data: {
                            userId: user_id
                        }
                    })
                    console.log(res.data)
                } catch (er) {
                    console.log(er)
                }
                // dispatch(ADD_CONNECTION())
            }
        } catch (er) {

        }
    }


    return (
        <div>
            <div className={styles.s_body_header} >
                <div className={styles.b_h_flex1}>
                    <div className={styles.s_avatar} onClick={() => { logOut() }}>{username[0]}</div>
                    <div className={styles.s_avatar_name}>{username}</div>
                </div>
                <div className={styles.b_h_flex2}>
                    <button className={styles.s_add_chat} onClick={() => { newChat() }} > Add Friend </button>
                </div>
            </div>
        </div>
    )
}

export default S_Header


// const ADD_USER = () => {

//     return (
//         <>
//             <input />
//         </>
//     )

// }