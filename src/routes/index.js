import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import ChatContainer from '../components/PageContainer';

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
					<Route path="/chats" component={ChatList} />
					<Route path="/:id" component={ChatContainer} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
