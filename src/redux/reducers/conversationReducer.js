import { CHAT_WITH_RAYAN, CHAT_WITH_TEST } from "../../../sampleGlobalChat";

const initialState = {
    friend_Data: null,
    message: '',
    conversation_Id: null
}

const conv_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CONVO':
            const { selected_convo_data, conversation_Id } = action.payload;
            return {
                friend_Data : selected_convo_data,
                conversation_Id: conversation_Id
            }
        // case 'CURRENT_CHAT':
        //     const {current_user} = action.payload
        //     return {
        //         current_user: current_user
        //     }
        // case 'SEND_MESSAGE':
        //     const { message } = action.payload 
        //     return {
        //         username: null,
        //         message: message
        //     }
        default:
            return state
    }
}

export default conv_reducer 