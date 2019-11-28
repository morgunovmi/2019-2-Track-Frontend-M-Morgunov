import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import {
	ChatListHeader,
	ChatPageHeader,
	ProfileHeader,
} from '../components/Header';
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
		<Router basename={process.env.PUBLIC_URL} history={history}>
			<Container>
				<Switch>
					<Route
						exact
						path={process.env.PUBLIC_URL}
						render={() => (
							<div>
								<ChatListHeader history={history} />
								<ChatList history={history} />
							</div>
						)}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/:id`}
						render={() => (
							<NewContainer>
								<ChatPageHeader history={history} />
								<ChatContainer />
							</NewContainer>
						)}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/profile`}
						render={() => <ProfileHeader history={history} />}
					/>
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
