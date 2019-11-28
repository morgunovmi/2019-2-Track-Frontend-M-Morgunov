import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import headerStyles from '../styles/Header.css';
import BackButton from './buttons/BackButton';
import BurgerButton from './buttons/BurgerButton';
import ChatInfo from './ChatInfo';
import SearchButton from './buttons/SearchButton';
import MenuButton from './buttons/MenuButton';
import TickButton from './buttons/TickButton';

ChatPageHeader.propTypes = {
	history: PropTypes.shape(historyPropTypes).isRequired,
};

export function ChatPageHeader({ history }) {
	const { id } = useParams();
	const chats = JSON.parse(window.localStorage.getItem('chats'));
	const thisChat = chats[id];
	return (
		<div className="chat-header" style={headerStyles.Header}>
			<BackButton history={history} />
			<ChatInfo name={thisChat.name} chatid={id} />
			<SearchButton />
			<MenuButton />
		</div>
	);
}

export function ChatListHeader() {
	return (
		<div className="chat-header" style={headerStyles.Header}>
			<BurgerButton />
			<div className="chat-list-header">
				<p className="clheader-text">Messenger</p>
			</div>
			<SearchButton />
		</div>
	);
}

ProfileHeader.propTypes = {
	history: PropTypes.shape(historyPropTypes).isRequired,
};

export function ProfileHeader({ history }) {
	return (
		<div className="chat-header" style={headerStyles.Header}>
			<BackButton history={history} />
			<div className="chat-list-header">
				<p className="clheader-text">Edit profile</p>
			</div>
			<TickButton />
		</div>
	);
}
