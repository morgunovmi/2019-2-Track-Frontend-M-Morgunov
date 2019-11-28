import React from 'react';
import menuStyles from '../../styles/buttons/MenuButton.css';

export default function MenuButton(props) {
	return (
		<div className="menu-button" styl={menuStyles.MenuButton}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
			>
				<path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
			</svg>
		</div>
	);
}
