import React, {PureComponent} from 'react';



export class Header extends PureComponent{
    render(){
        const {chats} = this.props;
        return(
        <header>
            Hi from Header!
            {
                chats && chats.length && <ul>
                    {chats.map((chat, idx) => <li key={idx}>{chat.name}</li>)}
                </ul>
            }

        </header>
        )
    }
}