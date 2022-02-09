import React from 'react'
import styles from '../../../../styles/ChatScreen/MessageBox.module.css'
import {useSelector} from 'react-redux'

function Message({senderId, c_user_Id, message}) {

    return (
        <div>
            {
                c_user_Id === senderId ?
                    <div className={styles.m_container_own}>
                        <div className={styles.each_message}>
                            <p className={styles.each_message_p}>{message}</p>
                        </div>
                    </div>
                    :
                    <div className={styles.m_container_friend}>
                        <div className={styles.each_message}>
                            <p className={styles.each_message_p}>{message}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Message
