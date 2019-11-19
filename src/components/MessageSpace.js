import React from 'react';
import PropTypes from 'prop-types';
import spaceStyles from '../styles/MessageSpace.css';
import messageStyles from '../styles/Message.css';

Message.propTypes = {
	content: PropTypes.string.isRequired,
	addedAt: PropTypes.string.isRequired,
};

function Message({ content, addedAt }) {
	return (
		<div className="message-line" style={messageStyles.Message}>
			<div className="message-container">
				<p className="message">{content}</p>
				<p className="time">{addedAt}</p>
			</div>
		</div>
	);
}

MessageSpace.propTypes = {
	messageBase: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			content: PropTypes.string.isRequired,
			addedAt: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default function MessageSpace(props) {
	const { messageBase } = props;
	return (
		<div className="space" style={spaceStyles.MessageSpace}>
			{messageBase
				.slice(0)
				.reverse()
				.map((item) => (
					<Message
						key={item.id}
						content={item.content}
						addedAt={item.addedAt}
					/>
				))}
		</div>
	);
}
