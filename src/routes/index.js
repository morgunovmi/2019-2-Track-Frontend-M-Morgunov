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

const NewContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history} basename="/chats">
			<Container>
				<Switch>
					<Route
						path="/chats"
						exact
						render={() => (
							<div>
								<Header history={history} type="ChatList" />
								<ChatList history={history} />
							</div>
						)}
					/>
					<Route
						path="/chats/:id"
						render={() => (
							<NewContainer>
								<Header history={history} type="ChatPage" />
								<ChatContainer />
							</NewContainer>
						)}
					/>
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
