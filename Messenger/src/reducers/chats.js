import { handleActions } from "redux-actions";
import { Map, fromJS } from "immutable";

import { load , send, add} from "actions/chats";

const initialState = new Map({
    loading: false,
    entries: new Map(),
});

export const chatsReducer = handleActions({
    [load]: (state, action) =>{
        return state.set('entries', fromJS({
            '1' :{
                id: 1,
                messages: [
                    {text: 'Hi from 1', author: 'Bot'},
                ],
                name: 'Chat 1',
                },
            '2' :{
                id: 2,
                messages: [
                    {text: 'Hi from 2', author: 'Bot'},
                ],
                name: 'Chat 2',
                },
            '3' :{
                id: 3,
                messages: [
                    {text: 'Hi from 3', author: 'Bot'},
                ],
                name: 'Chat 3',
            }       
        }));      
    },
    [send]: (state,action) =>{
        const {chatId, ...message} =action.payload;

        return state.mergeIn(['entries', chatId, 'messages'],message )
    },
    [add]: (state, action) =>{
        const { name, chatId } = action.payload;

        return state.setIn(['entries', chatId], fromJS({
            id : chatId,
            messages: [],
            name,
        }));
    }
}, initialState);