import React from 'react'
import styles from '../../../../styles/ChatScreen/MessageBox.module.css'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { send_message } from '../../../redux/actions/convActions'
import { CHAT_WITH_RAYAN, CHAT_WITH_TEST } from '../../../../sampleGlobalChat'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'
import { io } from 'socket.io-client'


function M_Body() {

    const host = 'http://184.73.109.198:8080'

    const dispatch = useDispatch()
    // const [socket, setSocket] = React.useState(null)
    const socket = React.useRef()
    const [inputMessage, setInputMessage] = React.useState('')
    const [messageData, setMessageData] = React.useState([])
    const ConvReducer = useSelector(state => state.conv_reducer)
    const AuthReducer = useSelector(state => state.auth_reducer)
    const currentChat = ConvReducer.conversation_Id
    const conversation_Id = ConvReducer.conversation_Id
    const Current_User_Id = AuthReducer.userData._id
    const friend_Data = ConvReducer.friend_Data
    const [arrivalMessage, setArrivalMessage] = React.useState(null)

    //scroll end to div
    const scrollRef = React.useRef()


    React.useEffect(() => {
        socket.current = io(`ws://${host}:8900`)
        socket.current.on('getMessage', data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])


    console.log(currentChat);

    React.useEffect(() => {
        console.log(arrivalMessage)
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
            setMessageData((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, friend_Data])

    React.useEffect(() => {
        socket.current.emit('addUsers', Current_User_Id)
        socket.current.on('getUsers', users => {
            console.log(users);
        })
    }, [Current_User_Id])

    // React.useEffect(() => {
    //     setSocket(io('ws://localhost:8900'))
    // }, [])

    // React.useEffect(() => {
    //     socket?.emit('addUsers', Current_User_Id)
    //     console.log(socket)
    //     socket?.on('getUsers', users => {
    //         console.log(users)
    //     })
    // }, [socket])

    React.useEffect(() => {
        const getMessages = async () => {
            try {
                const url = `${host}/api/messages/${conversation_Id._id}`
                const res = await axios(url)
                const messages = res.data.messages
                setMessageData(messages)
            } catch (er) {
                console.log(er)
            }
        }
        getMessages()
    }, [conversation_Id])

    React.useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    },  [messageData])


    const sendMessage = async (e) => {
        e.preventDefault()

        if (friend_Data !== null) {

            socket.current.emit('sendMessage', {
                senderId: Current_User_Id,
                recieverId: friend_Data._id,
                text: inputMessage
            })

            try {
                const url = `${host}/api/messages`
                const res = await axios({
                    method: 'post',
                    url,
                    data: {
                        conversationId: conversation_Id,
                        senderId: Current_User_Id,
                        text: inputMessage,
                    }
                })
                const response = res.data.newMessage
                setMessageData([...messageData, response])
                setInputMessage('')
            } catch (er) {
                console.log(er)
            }
            // dispatch(send_message(message))
        }
    }



    return (
        <div>
            <div className={styles.m_body}>
                <div className={styles.message_area}>
                    <Scrollbars>
                        {
                            messageData !== null ?
                                messageData.map((c, id) => {
                                    // console.log(c)
                                    return (
                                        <div className={styles.scroll_div} ref={scrollRef}>
                                            <Message  senderId={c.senderId} c_user_Id={Current_User_Id} key={id} message={c.text} />
                                        </div> 

                                    )
                                })
                                : <><p>Start a new Convo</p></>
                        }
                    </Scrollbars>
                </div>

                <div className={styles.input_area}>
                    <input
                        type="text"
                        placeholder='Enter text to send'
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button onClick={(e) => sendMessage(e)}>Send</button>
                </div>
            </div>
        </div >
    )
}

export default M_Body
