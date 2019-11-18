import React from 'react';
import infoStyles from '../styles/ChatInfo.css';
import chatIcon from '../assets/chaticonph.png';

export default function ChatInfo(props) {
	return (
		<div className="chat-info-container" style={infoStyles.ChatInfo}>
			<div className="chat-icon">
				<img className="icon" alt="" src={chatIcon}></img>
			</div>
			<div className="chat-info">
				<p className="chat-title">{props.name}</p>
				<p className="online-status">last seen 15 minutes ago</p>
			</div>
		</div>
	);
}
