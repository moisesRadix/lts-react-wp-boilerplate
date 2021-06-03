import gql from 'graphql-tag';

/**
 * @name simpleQueryBuilder
 * @param {string} type Type of graphQl request, (query or mutation)
 * @param {string} queryConfig.alias query alias
 * @param {string} queryConfig.queryName query name in graphQL API
 * @param {Array} queryConfig.variables array of touples for variables definition
 * @param {Array} queryConfig.staticVars array of touples for static value variables definition
 * @param {object} queryConfig.response array of touples for response definition
 * @returns graph-tag string (graphQL query string)
 */
export const simpleQueryBuilder = (
	type = 'query',
	{
		alias = '',
		queryName = '',
		resultName = 'result',
		variables = [],
		staticVars = [],
		response = [],
	},
) => {
	const result = `
  ${type} ${alias}${
		variables?.length > 0
			? `(${variables
					.map((vars) => {
						return `$${vars[0]}: ${vars[1]}`;
					})
					.join('\n')})`
			: ''
	}
	{
		${resultName}: ${queryName}${
		variables?.length > 0
			? `(
				${variables
					.map((vars) => {
						return `${vars[0]}: $${vars[0]}`;
					})
					.join('\n')}
			${
				staticVars?.length > 0
					? staticVars
							.map((vars) => {
								return `${vars[0]}: ${vars[1]}`;
							})
							.join('\n')
					: ''
			}
			)`
			: ''
	}{
    ${response
			.map((item) => {
				return `${item[0]} ${item[1]}`;
			})
			.join('\n')}
   }
	}
  `;
	return gql`
		${result}
	`;
};

/**
 *
 * @param {string} type Type of graphQl request, (query or mutation)
 * @param {object} queryConfig query configuration
 * @param {string} queryConfig.alias query alias
 * @param {string} queryConfig.queryName query name in graphQL API
 * @param {Array} queryConfig.queries array of objects for multiple queries
 * @returns graph-tag string (graphQL query string)
 */
export const multipleQueryBuilder = (
	type = 'query',
	{ alias = '', variables = [], queries = [] },
) => {
	const result = `
	${type} ${alias}${
		variables?.length > 0
			? `(${variables
					.map((vars) => {
						return `$${vars[0]}: ${vars[1]}`;
					})
					.join('\n')})`
			: ''
	} {
		${queries
			.map((query) => {
				return `
			${query.resultName || 'result'}: ${query.queryName}
			${
				query.variables
					? `(${query.variables
							.map((vars) => {
								return `${vars[0]}: ${vars[1]}`;
							})
							.join('\n')})`
					: ''
			}
			{
				${query.response
					.map((item) => {
						return `${item[0]} ${item[1]}`;
					})
					.join('\n')}
			}
			`;
			})
			.join('\n')}
	}
	`;
	return gql`
		${result}
	`;
};

/**
 * @description Collection of snippets for common variables and responses of graphQL queries from radixhaven API's
 *  @property globalVars
 *  @property	globalVarsWithResume
 *  @property	globalDateVars
 *  @property	tableVars
 *  @property	boxResponse
 *  @property	miniBoxesResponse
 *  @property	dualAxisResponse
 *  @property	dualAxisPerformanceResponse
 *  @property	staticTableResponse
 *  @property	dynamicTableResponse
 *  @property	dynamicTableExcelResponse
 *  @property	lineChartMoneyResponse
 *  @property	lineChartQtyResponse
 *  @property	heatMapResponse
 *  @property	pieChartResponse
 */
export const querySnippets = {
	globalVars: [
		['from', 'DateTime!'],
		['to', 'DateTime!'],
		['groupBy', 'dateGroup!'],
	],
	globalVarsWithResume: [
		['from', 'DateTime!'],
		['to', 'DateTime!'],
		['groupBy', 'dateGroup!'],
		['groupByResumen', 'dateGroup!'],
	],
	globalDateVars: [
		['from', 'DateTime!'],
		['to', 'DateTime!'],
	],
	tableVars: [
		['perPage', 'Int!'],
		['page', 'Int!'],
	],
	boxResponse: [
		['header', ''],
		['type', ''],
		['content', ''],
		['currency', ''],
		[
			'footer',
			`{
				content
				label
				isPositive
			}`,
		],
		['tooltip', ''],
	],
	miniBoxesResponse: [
		['label', ''],
		['money', ''],
		['qty', ''],
		['currency', ''],
		['object', ''],
	],
	dualAxisResponse: [
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		[
			'xAxis',
			`{
				title
				categories
			}`,
		],
		[
			'series',
			`{
				name
				type
				data {
					y
					currency
				}
			}`,
		],
	],
	dualAxisCustomResponse: [
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		[
			'xAxis',
			`{
				title
				categories
			}`,
		],
		[
			'series',
			`{ name
			   type
				data {
					y
					recurring
					onetime
					currency
				}
			}`,
		],
	],
	dualAxisPerformanceResponse: [
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		[
			'xAxis',
			`{
				title
				categories
			}`,
		],
		['series', `{ name yAxis type color data { y currency name color trending }}`],
	],
	staticTableResponse: (tableElements) => [
		['page', ''],
		['perPage', ''],
		['pages', ''],
		['total', ''],
		['title', ''],
		['docs', `{${tableElements}}`],
	],
	dynamicTableResponse: (tableElements) => [
		['page', ''],
		['perPage', ''],
		['pages', ''],
		['total', ''],
		['title', ''],
		['subtitle', ''],
		['helpinfo', ''],
		[
			'docs',
			`{ ${tableElements} 
			columns {
					id_column
					column_name
					accessor
					field_type
					column_type
					value
				}
			}
		`,
		],
	],
	dynamicTableExcelResponse: (tableElements = []) =>
		tableElements.concat([
			[
				'columns',
				`{
					id_column
					column_name
					accessor
					field_type
					column_type
					value
				}`,
			],
		]),
	lineChartMoneyResponse: [
		['chart', `{type}`],
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		['subTitle', `{ text }`],
		['yAxis', '{ title opposite type }'],
		['xAxis', '{ title categories }'],
		['series', '{ name data { y currency }}'],
	],
	lineChartQtyResponse: [
		['chart', `{type}`],
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		['subTitle', `{ text }`],
		['yAxis', '{ title opposite type }'],
		['xAxis', '{ title categories }'],
		['series', '{ name data }'],
	],
	heatMapResponse: [
		['chart', `{type}`],
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		['yAxis', `{ title categories }`],
		['xAxis', `{ title categories }`],
		['series', `{ name data }`],
	],
	pieChartResponse: [
		['chart', `{type}`],
		[
			'title',
			`{
				text
				helpinfo
			}`,
		],
		['subTitle', `{ text }`],
		[
			'series',
			`{
				minPointSize
				innerSize
				zMin
				name
				data {
					name
					y
					z
					x
					currency
				}
			}`,
		],
	],
	responseResume: [
		['current', ''],
		['last', ''],
		['percent', ''],
		['currency', ''],
		['isPositive', ''],
	],
};
