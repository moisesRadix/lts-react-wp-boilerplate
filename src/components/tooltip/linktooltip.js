import React from 'react';
import styled from 'styled-components';

const ToolTipText = styled.span`
	visibility: hidden;
	z-index: 10000;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 1;
	top: -5px;
	left: 110%;
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent black transparent transparent;
	}
`;

const ToolTip = styled('div')({
	position: 'relative',
	display: 'inline-block',
	':hover span': {
		visibility: 'visible',
	},
});

const LinkTooltip = ({ children, toolTipText }) => (
	<ToolTip>
		{children}
		<ToolTipText>{toolTipText}</ToolTipText>
	</ToolTip>
);

export default LinkTooltip;
