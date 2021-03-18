import React from 'react';
import ReactDropdown from 'react-dropdown';
import Select from 'react-select';
import styled from 'styled-components';

const BarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CustomSelect = styled(Select)`
	width: 20%;
	div[class*='control'] {
		border-radius: 19px;
		border-color: inherit;
		box-shadow: none !important;
		&:focus,
		&:active {
			border-color: inherit;
		}
	}
`;
export default function MainFilterbar() {
	return (
		<BarContainer>
			<CustomSelect
				options={[
					{
						label: 'TopFloor Marketing - Stripe',
						value: '123',
					},
					{
						label: 'Radix Haven - Stripe',
						value: '',
					},
				]}
			/>
			<ReactDropdown
				options={[
					{
						label: 'TopFloor Marketing - Stripe',
						value: '23',
					},
					{
						label: 'Radix Haven - Stripe',
						value: '',
					},
				]}
			/>
		</BarContainer>
	);
}
