import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';
import clStyles from '../styles/ChatList.css';
import FloatButton from './buttons/FloatButton';
import tmpChats from '../tmpChats';
import ChatInstance from './ChatInstance';

class ChatList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.chats = JSON.parse(window.localStorage.getItem('chats'));

		let { chats } = this.state;

		if (chats == null) {
			window.localStorage.setItem('chats', JSON.stringify(tmpChats));
			chats = tmpChats;
		}

		this.createNewChat = this.createNewChat.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.handleChatClick = this.handleChatClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidUpdate() {
		const { chats } = this.state;
		window.localStorage.setItem('chats', JSON.stringify(chats));
	}

	createNewChat(chatName) {
		let { chats } = this.state;
		let chatid = Math.floor(Math.random() * 10000) + 1;
		let isAvailable = true;
		do {
			// eslint-disable-next-line no-loop-func
			Object.keys(chats).forEach((id) => {
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
			chats = { ...prevState.chats };
			chats[chatid] = chatObject;
			return { chats };
		});
	}

	handleChatClick(id) {
		const { history } = this.props;
		history.push(`${process.env.PUBLIC_URL}/${id}`);
	}

	handleButtonClick() {
		const chatName = window.prompt('Who do you want to chat with?');
		if (chatName !== '' && chatName != null) this.createNewChat(chatName);
	}

	handleKeyDown(event) {
		if (event.key === 'Enter') {
			const id = event.target.getAttribute('id');
			const { history } = this.props;
			history.push(`${process.env.PUBLIC_URL}/${id}`);
		}
	}

	render() {
		const { chats } = this.state;
		return (
			<div className="list" style={clStyles.ChatLIst}>
				{Object.keys(chats).map((id) => {
					const chat = chats[id];
					const lMessage = chat.messageBase[chat.messageBase.length - 1];
					if (lMessage === undefined) {
						return (
							<div
								key={id}
								onClick={() => this.handleChatClick(id)}
								onKeyDown={this.handleKeyDown}
								role="link"
								tabIndex={0}
								id={id}
							>
								<ChatInstance
									chatName={chat.name}
									lastMessage=""
									lastMessageTime=""
									chatid={id}
								/>
							</div>
						);
					}
					return (
						<div
							key={id}
							onClick={() => this.handleChatClick(id)}
							onKeyDown={this.handleKeyDown}
							role="link"
							tabIndex={0}
							id={id}
						>
							<ChatInstance
								chatName={chat.name}
								lastMessage={lMessage.content}
								lastMessageTime={lMessage.addedAt}
							/>
						</div>
					);
				})}
				<FloatButton onButtonClick={this.handleButtonClick} />
			</div>
		);
	}
}

ChatList.propTypes = {
	history: PropTypes.shape(historyPropTypes).isRequired,
};

export default withRouter(ChatList);
