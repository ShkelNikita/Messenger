import './Messenger.scss'

import React, {Fragment, PureComponent} from 'react';
import {List} from '@material-ui/core';
import {ListItem}  from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import {MessagesList} from '../MessagesList/MessagesList'
import {MessageForm} from '../MessageForm/MessageForm'
import { HeaderRedux } from 'containers/HeaderContainer';

export class Messenger extends PureComponent{
    render() {
        const { chats, messages, sendMessage, addChat } =this.props;
        return(
            <Fragment>
                <HeaderRedux/>
                <div className='messenger'>
                    <List>
                        {chats.map((chat, idx) =><ListItem key={idx}>
                            <Link to={chat.link}>
                                <ListItemText primary={chat.name}></ListItemText>
                            </Link>
                        </ListItem>)}
                            <Button onClick={addChat} >
                                <ListItemText primary='Добавить чат'></ListItemText>
                            </Button>
                    </List>
                    {messages ? <MessagesList items={messages}/> : 'Choose your destiny'}
                    {messages && <MessageForm onSend={sendMessage}/>}
                </div>
            </Fragment>
        )
    }

}