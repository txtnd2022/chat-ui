import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { USER_LOGIN } from '../../redux/actions/authActions'
import { SERVER_URL } from '../../host'
import styles from '../../../styles/Login.module.css'

function Index() {

    const host = SERVER_URL
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const inputValue = (e) => {
        const { name, value } = e.target
        setLoginData((pVal) => {
            return {
                ...pVal,
                [name]: value
            }
        })
    }

    const logIn = async () => {
        try {
            const url = host + '/api/auth/login/'
            const res = await axios({
                method: 'post',
                url,
                data: {
                    email: loginData.email,
                    password: loginData.password
                }
            })
            dispatch(USER_LOGIN(res.data.data, res.data.data.email))
            localStorage.setItem('token', res.data.data.email)
        } catch (e) {
            console.log(e)
        }
    }

    return (

        <div className={styles.container}>
            <div className={styles.login_container}>
                <p className={styles.header}>LOGIN </p>
                <input
                    name="email"
                    value={loginData.email}
                    placeholder='Email'
                    onChange={(e) => inputValue(e)} />

                <input
                    name="password"
                    value={loginData.password}
                    placeholder='Password'
                    onChange={(e) => inputValue(e)} />

                <button onClick={() => logIn()} > Login </button>
            </div>
        </div>
    )
}

export default Index
