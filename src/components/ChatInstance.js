import React from 'react';
import instanceStyles from '../styles/ChatInstance.css';
import tick from '../assets/doubletick.svg';
import chatIcon from '../assets/chaticonph.png';

export default function ChatInstance(props) {
	return (
		<div className="chat" style={instanceStyles.ChatInstance}>
			<div className="chat-icon">
				<img className="icon" src={chatIcon} alt=""></img>
			</div>
			<div className="text-info">
				<p className="chat-name">{props.chatName}</p>
				<p className="last-message" data-placeholder="Come start this chat">
					{props.lastMessage}
				</p>
			</div>
			<div className="chat-status">
				<p className="time" data-placeholder="TBA">
					{props.lastMessageTime}
				</p>
				<img className="message-status" src={tick} alt=""></img>
			</div>
		</div>
	);
}
