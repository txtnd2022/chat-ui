import React from 'react'
import styles from '../../../../styles/ChatScreen/Sidebar.module.css'
import S_Header from './S_Header'
import S_Body from './S_Body'
import { useDispatch,useSelector } from 'react-redux'


function index() {

    // const dispatch = useDispatch()

    return (
        <div className={styles.sidebar_container}>
            <S_Header />
            <S_Body />
        </div>
    )
}

export default index
