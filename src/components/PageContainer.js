import React from 'react';
import MessageSpace from './MessageSpace';
import MessageForm from './MessageForm';
import styled from '@emotion/styled';
import { thisExpression } from 'babel-types';

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0;
`;

export default class PageContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.messageBase = [
			{ id: 1, textValue: 'hello', timeValue: '12:23' },
			{ id: 2, textValue: 'jeff', timeValue: '23:34' },
		];
		this.state.formValue = '';
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		console.log(this.state.messageBase);
	}

	handleMessageSubmit() {
		const curDate = new Date();
		const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;
		const mid = curDate.getMilliseconds() / 1000;

		this.setState({
			messageBase: this.state.messageBase.concat({
				id: mid,
				textValue: this.state.formValue,
				timeValue: curTime,
			}),
			formValue: '',
		});
		console.log(this.state.messageBase);
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
