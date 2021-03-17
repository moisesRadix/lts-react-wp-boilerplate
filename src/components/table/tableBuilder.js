import { isEmpty } from 'lodash';
import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Table = styled.table``;

export default function TableBuilder({
	columns,
	hiddenColumns = [],
	mainTitle = null,
	data = [],
	onClickRow,
	customRowClass,
	customHeaderClass,
	loading,
	scroll = null,
	borderless,
	className,
	totalText = 'Total',
	excel = null,
	pagination = {},
	dataCount,
	search = null,
	ResultCases,
}) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setHiddenColumns,
	} = useTable({
		columns,
		data,
		initialState: {
			hiddenColumns: hiddenColumns,
		},
	});
	return (
		<div>
			<Table
				{...getTableProps()}
				className={`tb-builder ${scroll ? 'fixed_header_rdx_tb_scroll' : ''}`}
				borderless={borderless ? true : false}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()} className={customHeaderClass}>
							{headerGroup.headers.map((column) => (
								<th
									className={column.className ? column.className : ''}
									{...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody
					{...getTableBodyProps()}
					style={
						scroll
							? {
									overflow: 'auto',
									height: scroll,
									transition: 'all 250ms linear',
							  }
							: {
									transition: 'all 250ms linear',
									height: !isEmpty(pagination) ? '20em' : null,
							  }
					}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr
								className={customRowClass}
								{...row.getRowProps()}
								onClick={onClickRow ? () => onClickRow(row.original) : null}
								style={{ cursor: onClickRow ? 'pointer' : 'initial' }}>
								{row.cells.map((cell) => {
									return (
										<td
											className={cell.column.classNameCell ? cell.column.classNameCell : ''}
											{...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
