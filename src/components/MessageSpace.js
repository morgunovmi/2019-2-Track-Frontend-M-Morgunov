import React from 'react';
import spaceStyles from '../styles/MessageSpace.css';
import messageStyles from '../styles/Message.css';

function Message(props) {
	return (
		<div className="message-line" style={messageStyles.Message}>
			<div className="message-container">
				<p className="message">{props.textValue}</p>
				<p className="time">{props.timeValue}</p>
			</div>
		</div>
	);
}

export default class MessageSpace extends React.Component {
	constructor(props) {
		super(props);

		this.state = { messageBase: [{ textValue: 'hello', timeValue: '12:23' }] };
		this.addChild = this.addChild.bind(this);
	}

	getInitialState() {
		return [{ textValue: 'hello', timeValue: '12:23' }];
	}

	addChild() {
		this.setState(
			this.state.messageBase.concat({ textValue: 'ahem', timeValue: '23:34' }),
		);
		console.log('hello');
	}

	spawnMessage() {
		console.log('Spawn');
	}

	render() {
		return (
			<div className="space" style={spaceStyles.MessageSpace}>
				<button onClick={this.addChild}>Add component</button>
				{this.state.messageBase.map((item) => (
					<Message
						key={item.toString()}
						textValue={item.textValue}
						timeValue={item.timeValue}
					/>
				))}
			</div>
		);
	}
}
