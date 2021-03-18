import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/svg/RadixSymbol.svg';
import { MainViewList } from '../../routes';

const SidebarStyled = styled.nav`
	/* z-index: 4; */
	display: inline-block;
	height: 100vh;
	z-index: 10000;
	width: 66px;
	float: left;
	box-shadow: -2px 11px 10px 0px #00000061;
	background-color: #fff;
	overflow: hidden;
	transition-duration: 0.2s, 0.2s, 0.35s;
	a {
		display: block;
		color: black;
		padding: 16px;
		text-decoration: none;
	}
	/* a:hover:not(.active) {
		background-color: #555;
		color: white;
	} */
	ul {
		text-align: center;
		color: black;
		list-style: none;
		padding-left: 0px !important;
		margin-right: 1px;

		li {
			list-style: none;
			padding: 18px 0;
			cursor: pointer;
			color: black;
			text-decoration: none;
			transition: all ease-out 100ms;

			i {
				display: block;
				font-style: normal;
				color: black;
				font-size: 18px;
				transition: all ease 150ms;
				&:hover {
					/* color: #f7f7f7; */
				}
			}

			.tooltip {
				display: inline-block;
				position: absolute;
				background-color: black;
				padding: 8px 15px;
				border-radius: 3px;
				margin-top: -26px;
				color: white;
				left: 90px;
				opacity: 0;
				visibility: hidden;
				font-size: 13px;
				letter-spacing: 0.5px;

				&:before {
					content: '';
					display: block;
					position: absolute;
					left: -4px;
					top: 10px;
					transform: rotate(45deg);
					width: 10px;
					height: 10px;
					background-color: inherit;
				}
			}

			&:hover {
				/* background-color: black; */
				/* color: #f7f7f7; */

				.tooltip {
					visibility: visible;
					opacity: 1;
				}
			}

			&.active {
				background-color: #282251;

				i {
					color: #f7f7f7;
				}
			}
		}
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
				<li key={i}>
					<i>{v.icon}</i>
					<span className='tooltip'>{v.name}</span>
				</li>
			);
		});
	return (
		<SidebarStyled>
			<li style={{ margin: '1em 17px' }}>
				<LogoRadix />
			</li>
			<ul>{linkParser()}</ul>
		</SidebarStyled>
	);
}
