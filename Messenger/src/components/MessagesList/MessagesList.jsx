import './MessagesList.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from '../Message/Message';

export class MessagesList extends Component{
    static propTypess = {
        itens: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    };

    render(){
        const {items} = this.props;

        return(
            <div className='messages-list'>
                {items.map((item,idx) => <Message key={idx} {...item} />)}
            </div>
        )
    }
}