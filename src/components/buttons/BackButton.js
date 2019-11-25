import React from 'react';
import backStyles from '../../styles/buttons/BackButton.css';
import { withRouter } from 'react-router-dom';

function BackButton(props) {
	function handleBackClick() {
		props.history.push(process.env.PUBLIC_URL);
	}
	return (
		<div
			className="back-button"
			style={backStyles.BackButton}
			onClick={handleBackClick}
		>
			<svg
				width="20"
				height="20"
				xmlns="http://www.w3.org/2000/svg"
				fillRule="evenodd"
				clipRule="evenodd"
			>
				<path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
			</svg>
		</div>
	);
}

export default withRouter(BackButton);
