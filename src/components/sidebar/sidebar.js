import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/svg/RadixSymbol.svg';
import { MainViewList } from '../../routes';
import LinkTooltip from '../tooltip/linktooltip';

const SidebarStyled = styled.div`
	z-index: 4;
	margin: 0;
	padding: 0;
	width: 66px;
	background-color: #f1f1f1;
	position: fixed;
	height: 100%;
	overflow: auto;
	transition-duration: 0.2s, 0.2s, 0.35s;
	a {
		display: block;
		color: black;
		padding: 16px;
		text-decoration: none;
	}
	a:hover:not(.active) {
		background-color: #555;
		color: white;
	}
`;

export const LogoRadix = styled.div`
	display: inline-flex;
	align-items: center;
	content: url(${logo});
	justify-content: center;
	height: 34px;
	width: 34px;
	border-radius: 50%;
	text-align: center;
	overflow: hidden;
	background: white !important;
`;
export default function Sidebar() {
	const linkParser = () =>
		MainViewList.map((v, i) => {
			return (
				<a href='#' key={i}>
					<LinkTooltip toolTipText={v.name}>Icon</LinkTooltip>
				</a>
			);
		});
	return <SidebarStyled>{linkParser()}</SidebarStyled>;
}
