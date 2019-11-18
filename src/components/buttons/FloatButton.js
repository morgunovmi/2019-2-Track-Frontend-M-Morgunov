import React from 'react';
import floatStyles from '../../styles/buttons/FloatButton.css';
import pencil from '../../assets/pencil.svg';

export default class FloatButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onButtonClick(event.target.value);
	}

	render() {
		return (
			<div className="flButton" style={floatStyles.FloatButton}>
				<div className="float" onClick={this.handleClick}>
					<img className="pencil" src={pencil} alt=""></img>
				</div>
				<div className="label-container">
					<div className="label-text">Create chat</div>
				</div>
			</div>
		);
	}
}
