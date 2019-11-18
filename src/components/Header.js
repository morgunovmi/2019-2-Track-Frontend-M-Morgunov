import React from 'react';
import headerStyles from '../styles/Header.css';
import BackButton from './buttons/BackButton';
import BurgerButton from './buttons/BurgerButton';
import ChatInfo from './ChatInfo';
import SearchButton from './buttons/SearchButton';
import MenuButton from './buttons/MenuButton';
import { useParams } from 'react-router-dom';

function Header(props) {
	const { id } = useParams();
	const chats = JSON.parse(window.localStorage.getItem('chats'));
	const thisChat = chats[id];
	if (props.type === 'ChatList') {
		return (
			<div className="chat-header" style={headerStyles.Header}>
				<BurgerButton />
				<div className="chat-list-header">
					<p className="clheader-text">Messenger</p>
				</div>
				<SearchButton />
			</div>
		);
	} else if (props.type === 'ChatPage') {
		return (
			<div className="chat-header" style={headerStyles.Header}>
				<BackButton history={props.history} />
				<ChatInfo name={thisChat.name} chatid={id} />
				<SearchButton />
				<MenuButton />
			</div>
		);
	}
}

export default Header;
