import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';

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
				<PageContainer />
			</Container>
		</Router>
	);
}

export default Routes;
