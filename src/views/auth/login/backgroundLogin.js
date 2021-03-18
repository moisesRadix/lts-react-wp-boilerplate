import React from 'react';
import styled from 'styled-components';
import '../../../assets/extra/loginbg.scss';

const BackgroundLogin = styled.div``;

const BackgroundSpace = (props) => {
	return (
		<BackgroundLogin id='stars-container'>
			<div class='page-bg'></div>
			<div class='animation-wrapper'>
				<div class='particle particle-1'></div>
				<div class='particle particle-2'></div>
				<div class='particle particle-3'></div>
				<div class='particle particle-4'></div>
			</div>
			{props.children}
		</BackgroundLogin>
	);
};

export default BackgroundSpace;
