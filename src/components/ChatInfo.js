import React from 'react';
import infoStyles from '../styles/ChatInfo.css';

export default function ChatInfo(props) {
	return (
		<div className="chat-info-container" style={infoStyles.ChatInfo}>
			<div className="chat-icon">
				<img className="icon" alt=""></img>
			</div>
			<div className="chat-info">
				<p className="chat-title">Donald</p>
				<p className="chat-status">last seen 15 minutes ago</p>
			</div>
		</div>
	);
}
