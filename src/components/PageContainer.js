import React from 'react';
import MessageSpace from './MessageSpace';
import MessageForm from './MessageForm';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0;
`;

export default function ChatContainer(props) {
	const { id } = useParams();
	return <PageContainer chatid={id} />;
}

class PageContainer extends React.Component {
	constructor(props) {
		super(props);

		this.id = this.props.chatid;

		this.state = {};
		this.chats = JSON.parse(window.localStorage.getItem('chats'));
		this.state.messageBase = this.chats[this.id].messageBase;
		this.name = this.chats[this.id].name;
		this.state.formValue = '';
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
	}

	handleMessageSubmit() {
		const curDate = new Date();
		const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;
		const mid = curDate.getMilliseconds();

		this.setState({
			messageBase: this.state.messageBase.concat({
				id: mid,
				content: this.state.formValue,
				addedAt: curTime,
			}),
			formValue: '',
		});
	}

	componentDidUpdate() {
		this.chats[this.id].messageBase = this.state.messageBase;
		window.localStorage.setItem('chats', JSON.stringify(this.chats));
	}

	handleFormChange(value) {
		this.setState({ formValue: value });
	}

	render() {
		return (
			<Container>
				<MessageSpace
					onMessageSubmit={this.handleMessageSubmit}
					messageBase={this.state.messageBase}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit}
					onFormChange={this.handleFormChange}
					formValue={this.state.formValue}
				/>
			</Container>
		);
	}
}
