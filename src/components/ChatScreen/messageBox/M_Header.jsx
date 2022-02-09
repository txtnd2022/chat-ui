import React from 'react'
import styles from '../../../../styles/ChatScreen/MessageBox.module.css'
import { useSelector } from 'react-redux'

function M_Header() {

    const state = useSelector(state => state.conv_reducer)
    return (
        <div>
            <div className={styles.m_header}>
                {
                    state.friend_Data === null ?
                        <>
                            <p className={styles.m_header_title}>Select user</p>
                        </> :
                        <>
                            {
                                state.friend_Data !== null ?
                                    <div>
                                        <p className={styles.m_header_title}>{state.friend_Data.username}</p>
                                    </div>


                                    :
                                    <>
                                    </>
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default M_Header
