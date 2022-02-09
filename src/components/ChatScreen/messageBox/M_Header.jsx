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
                            <p>Select user</p>
                        </> :
                        <>
                            {
                                state.friend_Data !== null ?
                                    <p>{state.friend_Data.username}</p>
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
