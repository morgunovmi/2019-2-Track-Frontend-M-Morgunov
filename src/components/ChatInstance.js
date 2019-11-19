import React from 'react';
import PropTypes from 'prop-types';
import instanceStyles from '../styles/ChatInstance.css';
import tick from '../assets/doubletick.svg';
import chatIcon from '../assets/chaticonph.png';

ChatInstance.propTypes = {
	chatName: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	lastMessageTime: PropTypes.string.isRequired,
};

export default function ChatInstance({
	chatName,
	lastMessage,
	lastMessageTime,
}) {
	return (
		<div className="chat" style={instanceStyles.ChatInstance}>
			<div className="chat-icon">
				<img className="icon" src={chatIcon} alt="" />
			</div>
			<div className="text-info">
				<p className="chat-name">{chatName}</p>
				<p className="last-message" data-placeholder="Come start this chat">
					{lastMessage}
				</p>
			</div>
			<div className="chat-status">
				<p className="time" data-placeholder="TBA">
					{lastMessageTime}
				</p>
				<img className="message-status" src={tick} alt="" />
			</div>
		</div>
	);
}
