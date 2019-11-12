import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Header from '../components/Header';
import CounterContainer from '../containers/CounterContainer';
import MessageForm from '../components/MessageForm';
import MessageSpace from '../components/MessageSpace';

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0;
`;

export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Container>
				<Header />
				<Switch>
					<Route path="/" component={CounterContainer} />
				</Switch>
				<MessageSpace />
				<MessageForm />
			</Container>
		</Router>
	);
}

export default Routes;
