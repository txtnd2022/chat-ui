import React from 'react'
import styles from '../../../../styles/ChatScreen/Sidebar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { open_convo } from '../../../redux/actions/convActions'

function S_Members({ conversation, c_user_Id }) {

    const host = 'http://184.73.109.198:8080'

    const dispatch = useDispatch()
    const [friendData, setFriendData] = React.useState([])
    const [avatar, setAvatar] = React.useState()

    const friend_Id = conversation.members.find(m => m !== c_user_Id)
    const conversation_Id = conversation

    React.useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const url = host + '/api/users/viewuser/' + friend_Id
                const res = await axios(url)
                const user = res.data.user
                setFriendData(user)
                setAvatar(user.username[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserDetails()
    }, [c_user_Id, conversation, friend_Id])

    // const delConnection = async () => {
    //     try {
    //         const url = `http://localhost:8080/api/users/${friend_Id}/disconnect`
    //         const res = await axios({
    //             method: 'put',
    //             url,
    //             data: {
    //                 userId: user_id
    //             }
    //         })
    //     } catch (er) {
    //         console.log(er)
    //     }
    // }

    const openConversation = async () => {
        dispatch(open_convo(friendData, conversation_Id))
    }

    return (
        <div className={styles.coversation_box}>
            <div className={styles.s_avatar}>{avatar}</div>
            <div className={styles.s_avatar_name} onClick={() => openConversation()} >
                {friend_Id ? friendData.username :
                    'Test_Conv'}
            </div>
            {/* <button onClick={() => delConnection()} > Del</button> */}
        </div>
    )
}

export default S_Members
