import React from 'react';
import spaceStyles from '../styles/MessageSpace.css';
import messageStyles from '../styles/Message.css';

function Message(props) {
	return (
		<div className="message-line" style={messageStyles.Message}>
			<div className="message-container">
				<p className="message">{props.content}</p>
				<p className="time">{props.addedAt}</p>
			</div>
		</div>
	);
}

export default function MessageSpace(props) {
	const messageBase = props.messageBase;
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
