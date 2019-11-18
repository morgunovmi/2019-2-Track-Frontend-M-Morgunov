import React from 'react';
import clStyles from '../styles/ChatList.css';
import FloatButton from './buttons/FloatButton';
import tmpChats from '../tmpChats';
import ChatInstance from './ChatInstance';

export default class ChatList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.chats = JSON.parse(window.localStorage.getItem('chats'));

		if (this.state.chats == null) {
			window.localStorage.setItem('chats', JSON.stringify(tmpChats));
			this.state.chats = tmpChats;
		}

		this.createNewChat = this.createNewChat.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.handleChatClick = this.handleChatClick.bind(this);
	}

	componentDidUpdate() {
		window.localStorage.setItem('chats', JSON.stringify(this.state.chats));
	}

	createNewChat(chatName) {
		let chatid = Math.floor(Math.random() * 10000) + 1;
		let isAvailable = true;
		do {
			// eslint-disable-next-line no-loop-func
			Object.keys(this.state.chats).forEach((id) => {
				if (id === chatid) {
					isAvailable = false;
				}
			});
			if (isAvailable === false) {
				chatid = Math.floor(Math.random() * 10000) + 1;
			}
		} while (isAvailable === false);

		const chatObject = {
			name: chatName,
			messageBase: [],
		};
		this.setState((prevState) => {
			let chats = Object.assign({}, prevState.chats);
			chats[chatid] = chatObject;
			return { chats };
		});
	}

	handleChatClick(id) {
		let history = this.props.history;
		history.push(`/${id}`);
	}

	handleButtonClick() {
		const chatName = window.prompt('Who do you want to chat with?');
		if (chatName !== '' && chatName != null) this.createNewChat(chatName);
	}

	render() {
		return (
			<div className="list" style={clStyles.ChatLIst}>
				{Object.keys(this.state.chats).map((id) => {
					const chat = this.state.chats[id];
					const lMessage = chat.messageBase[chat.messageBase.length - 1];
					if (lMessage === undefined) {
						return (
							<div key={id} onClick={() => this.handleChatClick(id)}>
								<ChatInstance
									chatName={chat.name}
									lastMessage=""
									lastMessageTime=""
								/>
							</div>
						);
					} else {
						return (
							<div key={id} onClick={() => this.handleChatClick(id)}>
								<ChatInstance
									chatName={chat.name}
									lastMessage={lMessage.content}
									lastMessageTime={lMessage.addedAt}
								/>
							</div>
						);
					}
				})}
				<FloatButton onButtonClick={this.handleButtonClick} />
			</div>
		);
	}
}
