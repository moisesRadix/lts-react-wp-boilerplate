import React from 'react';
import styled from 'styled-components';

const SidebarStyled = styled.div`
	width: 180px;
	position: fixed;
	/* height: calc(100vh - 75px); */
	overflow: auto;
	z-index: 4;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: red;
	height: 100vh !important;
	transition-duration: 0.2s, 0.2s, 0.35s;
`;

const LogoRadix = styled.div`
	display: inline-flex;
	align-items: center;
	content: url('https://radixhaven.com/wp-content/uploads/2020/08/cropped-logoRadix.png');
	justify-content: center;
	height: 34px;
	width: 34px;
	border-radius: 50%;
	text-align: center;
	overflow: hidden;
	background: white !important;
`;
export default function Sidebar() {
	return (
		<SidebarStyled>
			<LogoRadix />
		</SidebarStyled>
	);
}
