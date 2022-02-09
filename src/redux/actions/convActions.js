export const open_convo = (data, c_Id) => {
    return {
        type: 'OPEN_CONVO',
        payload: {
            selected_convo_data : data,
            conversation_Id : c_Id
        }
    }
}

export const send_message = (data) => {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            message: data,
        }
    }
}

// export const current_chat = (data) => {
//     return {
//         type: 'CURRENT_CHAT',
//         payload: {
//             current_user: data 
//         }
//     }
// }