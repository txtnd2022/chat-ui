import React from 'react'
import { useSelector } from 'react-redux'
import Logout from '../Logout'
import styles from '../../../styles/GlobalStyle.module.css'
import Sidebar from './sidebar'
import MessageBox from './messageBox'

function index() {

    // const state = useSelector(state => state.auth_reducer)

    return (
        <div className={styles.container}>
            <Sidebar />
            <MessageBox />
        </div>
    )
}

export default index
