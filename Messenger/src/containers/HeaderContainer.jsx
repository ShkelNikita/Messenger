import React , {PureComponent} from 'react';
import { connect } from 'react-redux';

import {Header} from 'components/Header/Header'

class HeaderContainer extends PureComponent{
    render(){
        const {chats} = this.props;
        return( 
            <Header chats={chats}/>
        );     
    }
}

function mapStateToProps(state,props){
    const chats = state.chats.get('entries').map((chat) => ({name: chat.get('name')})).toList().toJS();
    return{chats};
}

export const HeaderRedux = connect(mapStateToProps)(HeaderContainer);