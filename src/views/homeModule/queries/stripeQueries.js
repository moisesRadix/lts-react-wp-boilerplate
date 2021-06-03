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
			alias: 'stripeTotalSales',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalSales',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeTotalRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeTotalNetRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalNetRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeTotalRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalRevenueRate',
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
			alias: 'stripeTotalNetRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalNetRevenueRate',
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
			alias: 'stripeFailedRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeFailedRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeFailedPayments',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeFailedPayments',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeNewTrials',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewTrials',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'NEW_TRIALS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	newTrialsRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeNewTrialsRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewTrialsRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'NEW_TRIALS_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	trialConversion: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeTrialConversion',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTrialConversion',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeTrialConversionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTrialConversionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeTrialConversionRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTrialConversionRate',
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
			alias: 'stripeTrialConversionRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTrialConversionRevenueRate',
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
			alias: 'stripeActiveCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'TOTAL_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenuePerCustomers: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeTotalRevenuePerCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalRevenuePerCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'TOTAL_REVENUE_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	averageRevenuePerCustomer: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeAverageRevenuePerCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAverageRevenuePerCustomer',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeNewCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeNewRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'NEW_REVENUE']]),
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
			alias: 'stripeRecurringSubscription',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeRecurringSubscription',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeARSRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeRecurringRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeRecurringCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeRecurringCustomer',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeAvgCustomerRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAvgCustomerRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'AVG_RECURRING_SUBSCRIPTION']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerSubscription: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeAvgARSRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAvgCustomerRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'AVG_RECURRING_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	recurringSubscriptionsRate: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeRecurringSubscriptionsRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeRecurringSubscriptionsRate',
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
			alias: 'stripeRecurringRevenueRate',
			variables: querySnippets.globalVars,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeRecurringRevenueRate',
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
			alias: 'stripeNewSubscriptions',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewSubscriptions',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeNewSubscriptionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeNewSubscriptionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeAvgNewSubscriptionRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAvgNewSubscriptionRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeChurnedCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeChurnedCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
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
			alias: 'stripeChurnedRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeChurnedRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'CHURNED_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const downgrade = {
	upgradeDowngradeRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeUpgradeDowngradeRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeUpgradeDowngradeRevenue',
					variables: innerVars([['action', 'DOWNGRADE']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'SUBS_DOWNGRADE_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	upgradeDowngrade: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeUpgradeDowngrade',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeUpgradeDowngrade',
					variables: innerVars([['action', 'DOWNGRADE']]),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'SUBS_DOWNGRADE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const upgrades = {
	upgradeDowngradeRevenue: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeUpgradeDowngradeRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeUpgradeDowngradeRevenue',
					variables: innerVars([['action', 'UPGRADE']]),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'SUBS_UPGRADE_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	upgradeDowngrade: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeUpgradeDowngrade',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeUpgradeDowngrade',
					variables: innerVars([['action', 'UPGRADE']]),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'SUBS_UPGRADE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};

const revenueLoss = {
	totalRefunds: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeTotalRefunds',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalRefunds',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'REFUNDS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalDispute: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeTotalDispute',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalDispute',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'DISPUTES']]),
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
			alias: 'stripeTotalFees',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalFees',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'FEES']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalStripeFees: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeTotalStripeFees',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeTotalStripeFees',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'STRIPE_FEES']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};
const liveStream = {
	liveStreamTable: simpleQueryBuilder('query', {
		alias: 'stripeLiveStream',
		queryName: 'stripeLiveStream',
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
const oneTimeCustomers = {
	totalCustomersOneTime: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeOneTimeCustomers',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeOneTimeCustomers',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'ONE_TIME_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalRevenuePerCustomerOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeOneTimeRevenue',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeOneTimeRevenue',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'ONE_TIME_REVENUE']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalSalesOneTime: {
		isMoney: false,
		shape: INITIAL_CHART_QTY_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeOneTimePayments',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeOneTimePayments',
					variables: innerVars(),
					response: querySnippets.lineChartQtyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'ONE_TIME_PAYMENTS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	totalFeesPerTransactions: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeOneTimeFees',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeOneTimeFees',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'ONE_TIME_FEES']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerCustomerOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeAvgRevenueOneTimeCustomer',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAvgRevenueOneTimeCustomer',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'AVG_ONE_TIME_REVENUE_CUSTOMER']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
	avgRevenuePerPaymentOneTime: {
		isMoney: true,
		shape: INITIAL_CHART_STATE,
		query: multipleQueryBuilder('query', {
			alias: 'stripeAvgRevenueOneTimePayment',
			variables: querySnippets.globalVarsWithResume,
			queries: [
				{
					resultName: 'result',
					queryName: 'stripeAvgRevenueOneTimePayment',
					variables: innerVars(),
					response: querySnippets.lineChartMoneyResponse,
				},
				{
					resultName: 'resultResume',
					queryName: 'stripeHomeResume',
					variables: innerVarsResume([['option', 'AVG_ONE_TIME_REVENUE_PAYMENTS']]),
					response: querySnippets.responseResume,
				},
			],
		}),
	},
};
export const stripeQueries = {
	revenuePerformance,
	trialPerformance,
	allCustomers,
	activeSubscriptionPerformance,
	churnSubscriptionsPerformance,
	downgrade,
	upgrades,
	revenueLoss,
	fees,
	liveStream,
	oneTimeCustomers,
};
