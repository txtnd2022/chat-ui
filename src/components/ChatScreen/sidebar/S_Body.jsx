import React from 'react'
import styles from '../../../../styles/ChatScreen/Sidebar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { open_convo } from '../../../redux/actions/convActions'
import S_Members from './S_Members'
import { SERVER_URL } from '../../../host'

function S_Body() {

    const host = SERVER_URL

    const state = useSelector(state => state.auth_reducer)
    const user_id = state.userData._id
    const [connections, setConnections] = React.useState([])
    const [conversations, setConversations] = React.useState([])

    React.useEffect(() => {
        const getUserConnections = async () => {
            try {
                // const url = `http://localhost:8080/api/conversations/${user_id}`
                // const res = await axios(url)
                setConnections(state.userData.connections)
            } catch (er) {
                console.log(er)
            }
        }
        getUserConnections()
    }, [state.userData.connections])

    React.useEffect(() => {
        const getUserConversations = async () => {
            try {
                const url = `${host}/api/conversations/${user_id}`
                const res = await axios(url)
                setConversations(res.data)
                console.log(conversations)
            } catch (er) {
                console.log(er)
            }
        }
        getUserConversations()
    }, [user_id])

    return (
        <div className={styles.s_body_main}>
            <div className={styles.s_body_title}>
                <p>Your chats</p>
            </div>
            {
                conversations.map((c, id) => {
                    return (
                        <S_Members key={id} c_user_Id={user_id} conversation={c} />
                    )
                })
            }
        </div>
    )
}

export default S_Body

