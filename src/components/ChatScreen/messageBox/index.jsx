import React from 'react'
import styles from '../../../../styles/ChatScreen/MessageBox.module.css'
import M_Body from './M_Body'
import M_Header from './M_Header'

function index() {
    return (
        <div className={styles.messageBox_container} >
           <M_Header />
           <M_Body />
        </div>
    )
}

export default index
