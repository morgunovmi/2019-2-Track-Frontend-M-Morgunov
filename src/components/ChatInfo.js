import React from 'react';
import PropTypes from 'prop-types';
import infoStyles from '../styles/ChatInfo.css';
import chatIcon from '../assets/chaticonph.png';

ChatInfo.propTypes = {
	name: PropTypes.string.isRequired,
};

export default function ChatInfo({ name }) {
	return (
		<div className="chat-info-container" style={infoStyles.ChatInfo}>
			<div className="chat-icon">
				<img className="icon" alt="" src={chatIcon} />
			</div>
			<div className="chat-info">
				<p className="chat-title">{name}</p>
				<p className="online-status">last seen 15 minutes ago</p>
			</div>
		</div>
	);
}
