import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/svg/RadixSymbol.svg';
import { MainViewList } from '../../routes';
import LinkTooltip from '../tooltip/linktooltip';

const SidebarStyled = styled.nav`
	/* z-index: 4; */
	display: inline-block;
	min-height: 100vh;
	width: 66px;
	float: left;
	background-color: #f1f1f1;
	overflow: hidden;
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
	ul {
		text-align: center;
		color: white;
		list-style: none;
		padding-left: 0px !important;
		margin-right: 1px;

		li {
			list-style: none;
			padding: 18px 0;
			cursor: pointer;
			color: black;
			text-decoration: none;
			transition: all ease-out 120ms;

			i {
				display: block;
				font-style: normal;
				color: black;
				font-size: 18px;
				color: white;
				transition: all ease 450ms;
				&:hover {
					color: #f7f7f7;
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
				background-color: black;
				color: #f7f7f7;

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
				<a href='#' key={i}>
					<LinkTooltip toolTipText={v.name}>Icon</LinkTooltip>
				</a>
			);
		});
	return (
		<SidebarStyled>
			<ul>
				<li className='active'>
					<i className='fa fa-share-alt'>icon</i>
					<span className='tooltip'>Connections</span>
				</li>
				<li>
					<i className='fa fa-hdd-o'>icon</i>
					<span className='tooltip'>Devices</span>
				</li>
				<li>
					<i className='fa fa-newspaper-o'>icon</i>
					<span className='tooltip'>Contacts</span>
				</li>
				<li>
					<i className='fa fa-print'>icon</i>
					<span className='tooltip'>Fax</span>
				</li>
				<li>
					<i className='fa fa-sliders'>icon</i>
					<span className='tooltip'>Settings</span>
				</li>
			</ul>
		</SidebarStyled>
	);
}
