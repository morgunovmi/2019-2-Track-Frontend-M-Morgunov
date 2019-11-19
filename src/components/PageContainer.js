import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import MessageSpace from './MessageSpace';
import MessageForm from './MessageForm';

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0;
`;

export default function ChatContainer(props) {
	const { id } = useParams();
	return <PageContainer chatid={parseInt(id, 10)} />;
}

class PageContainer extends React.Component {
	constructor(props) {
		super(props);

		const { chatid } = this.props;

		this.state = {};
		this.chats = JSON.parse(window.localStorage.getItem('chats'));
		this.state.messageBase = this.chats[chatid].messageBase;
		this.name = this.chats[chatid].name;
		this.state.formValue = '';
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
	}

	componentDidUpdate() {
		const { chatid } = this.props;
		const { messageBase } = this.state;
		this.chats[chatid].messageBase = messageBase;
		window.localStorage.setItem('chats', JSON.stringify(this.chats));
	}

	handleMessageSubmit() {
		const curDate = new Date();
		const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;
		const mid = curDate.getMilliseconds();

		const { messageBase, formValue } = this.state;
		this.setState({
			messageBase: messageBase.concat({
				id: mid,
				content: formValue,
				addedAt: curTime,
			}),
			formValue: '',
		});
	}

	handleFormChange(value) {
		this.setState({ formValue: value });
	}

	render() {
		const { messageBase, formValue } = this.state;
		return (
			<Container>
				<MessageSpace
					onMessageSubmit={this.handleMessageSubmit}
					messageBase={messageBase}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit}
					onFormChange={this.handleFormChange}
					formValue={formValue}
				/>
			</Container>
		);
	}
}

PageContainer.propTypes = {
	chatid: PropTypes.number.isRequired,
};
