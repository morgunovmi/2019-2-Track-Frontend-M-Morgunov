import React from 'react';
import headerStyles from '../styles/Header.css';
import BackButton from './buttons/BackButton';
import BurgerButton from './buttons/BurgerButton';
import ChatInfo from './ChatInfo';
import SearchButton from './buttons/SearchButton';
import MenuButton from './buttons/MenuButton';

function Header() {
	return (
		<div className="chat-header" style={headerStyles.Header}>
			<BurgerButton />
			<BackButton />
			<ChatInfo />
			<div className="chat-list-header">
				<p className="clheader-text">Messenger</p>
			</div>
			<SearchButton />
			<MenuButton />
		</div>
	);
}

export default Header;
