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
	margin: 0;
`;

export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Container>
				<Switch>
					<Route
						path="/chats"
						exact
						render={(props) => (
							<div>
								<Header {...props} type="ChatList" />
								<ChatList {...props} />
							</div>
						)}
					/>
					<Route
						path="/chats/:id"
						render={(props) => (
							<div>
								<Header {...props} type="ChatPage" />
								<ChatContainer {...props} />
							</div>
						)}
					/>
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
