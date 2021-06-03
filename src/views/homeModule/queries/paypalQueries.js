import { INITIAL_CHART_STATE } from 'utils/globalChartHandlers/lineChartHandlers';
import { INITIAL_CHART_QTY_STATE } from 'utils/globalChartHandlers/lineChartHandlers';
import { simpleQueryBuilder } from 'utils/graphql/queryBuilder/graphqlQueryBuilder';
import {
	multipleQueryBuilder,
	querySnippets,
} from 'utils/graphql/queryBuilder/graphqlQueryBuilder';

const innerVars = (vars = []) =>
	[
		['from', '$from'],
		['to', '$to'],
		['groupBy', '$groupBy'],
	].concat(vars);

const innerVarsResume = (vars = []) =>
	[
		['from', '$from'],
		['to', '$to'],
		['groupBy', '$groupByResumen'],
	].concat(vars);

// her we have a complete collection of home queries without categories
const revenuePerformance = {
	totalSales: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalSales',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalSales',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'SALES']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalNetRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalNetRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalNetRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NET_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenueRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRevenueRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
	totalNetRevenueRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalNetRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalNetRevenueRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
	failedRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalFailedRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalFailedRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'FAILED_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	failedPayments: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalFailedPayments',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalFailedPayments',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'FAILED_PAYMENTS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const trialPerformance = {
	newTrials: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalNewTrials',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalNewTrials',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NEW_TRIALS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	// This not yey
	// newTrialsRevenue: multipleQueryBuilder('query', {
	//     alias : 'paypalNewTrialsRevenue',
	//     variables : querySnippets.globalVarsWithResume,
	//     queries :[
	//       {
	//         resultName: 'result',
	//         queryName: 'paypalNewTrialsRevenue',
	//         variables: innerVars(),
	//         response: querySnippets.lineChartMoneyResponse
	//       },
	//       {
	//         resultName: 'resultResume',
	//         queryName: 'paypalHomeResume',
	//         variables: innerVarsResume([['option', 'NEW_TRIALS_REVENUE']]),
	//         response: querySnippets.responseResume
	//       }
	//     ]
	//   }),
	trialConversion: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTrialConversion',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTrialConversion',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'TRIAL_CONVERSION']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	trialConversionRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTrialConversionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTrialConversionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'TRIAL_CONVERSION_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	trialConversionRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTrialConversionRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTrialConversionRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
	trialConversionRevenueRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTrialConversionRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTrialConversionRevenueRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
};

const allCustomers = {
	totalCustomers: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'TOTAL_CUSTOMER_RECURRING_ONE_TIME']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenuePerCustomers: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRevenuePerCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRevenuePerCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'TOTAL_REVENUE_CUSTOMER_RECURRING_ONE_TIME']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	averageRevenuePerCustomer: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAverageRevenuePerCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAverageRevenuePerCustomer',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'AVG_REVENUE_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	newCustomers: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalNewCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalNewCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NEW_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	newRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalNewRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalNewRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NEW_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};
const oneTimeCustomers = {
	totalCustomersOneTime: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalCustomersRecurringOneTime',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalCustomersRecurringOneTime',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'TOTAL_CUSTOMER_RECURRING_ONE_TIME'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenuePerCustomerOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRevenuePerCustomersRecurringOneTime',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRevenuePerCustomersRecurringOneTime',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'TOTAL_REVENUE_CUSTOMER_RECURRING_ONE_TIME'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalSalesOneTime: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalSalesOneTime',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalSales',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'SALES'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalFeesPerTransactions: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalFeesPerTransactions',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalFees',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'FEES'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerCustomerOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAvgRevenuePerCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAverageRevenuePerCustomerRecurringOnetime',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'AVG_REVENUE_PAYMENT'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerPaymentOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAvgRevenuePerPayment',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAvgRevenuePerPayment',
					variables: innerVars([['transaction_option', 'ONE_TIME']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([
						['option', 'REVENUE'],
						['transaction_option', 'ONE_TIME'],
					]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};
const activeSubscriptionPerformance = {
	activeSubscription: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalRecurringSubscription',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalRecurringSubscription',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'RECURRING_SUBSCRIPTION']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	activeSubscriptionRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalRecurringRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalRecurringRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'RECURRING_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	recurringCustomer: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalRecurringCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalRecurringCustomer',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'RECURRING_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgCustomerRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAvgCustomerRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAvgCustomerRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'AVG_RECURRING_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerSubscription: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAvgSubscriptionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAvgSubscriptionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'AVG_RECURRING_SUBSCRIPTION']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},

	recurringSubscriptionsRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalRecurringSubscriptionsRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalRecurringSubscriptionsRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
	recurringRevenueRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalRecurringRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalRecurringRevenueRate',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
			],
		}),
	},
	newSubscriptions: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalNewSubscriptions',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalNewSubscriptions',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NEW_SUBSCRIPTORS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	newSubscriptionRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalNewSubscriptionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalNewSubscriptionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'NEW_SUBSCRIPTIONS_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgNewSubscriptionRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalAvgNewSubscriptionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalAvgNewSubscriptionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'AVG_NEW_SUBSCRIPTIONS_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const churnSubscriptionsPerformance = {
	churnedSubscriptions: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalChurnedSubscriptions',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalChurnedSubscriptions',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'CHURNED_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	churnedRevenue: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalChurnedRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalChurnedRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'CHURNED_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const revenueLoss = {
	totalRefunds: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRefunds',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRefunds',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'REFUNDS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRefundsRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalRefundsRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalRefundsRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'REFUNDS_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const fees = {
	totalFees: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'paypalTotalFees',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'paypalTotalFees',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'paypalHomeResume',
					variables: innerVarsResume([['option', 'FEES']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};
const liveStream = {
	liveStreamTable: simpleQueryBuilder('query', {
		alias: 'paypalLiveStream',
		queryName: 'paypalLiveStream',
		resultName: 'result',
		variables: [
			['page', 'Int!'],
			['perPage', 'Int!'],
			['filter', 'chargeStatus!'],
		],
		response: querySnippets.staticTableResponse(
			'charge_date customer_id name email phone amount type fee currency status failure_code failure_message',
		),
	}),
};
export const paypalQueries = {
	revenuePerformance,
	trialPerformance,
	allCustomers,
	oneTimeCustomers,
	activeSubscriptionPerformance,
	churnSubscriptionsPerformance,
	revenueLoss,
	fees,
	liveStream,
};
