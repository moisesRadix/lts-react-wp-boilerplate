import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
	camelCase,
	capitalize,
	isNumber,
	kebabCase,
	lowerCase,
	snakeCase,
	startCase,
	toLower,
	toUpper,
} from 'lodash';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const numberWithCommas = (x) => {
	const fixed = parseFloat(x).toFixed(2);
	let parts = fixed.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const r = parts.join('.');
	// const res = r;
	return r;
};

export default function ParserLabel({
	value = '',
	type,
	prefix = '',
	sufix = '',
	statusClass = '',
	isPositive,
}) {
	const [result, setResult] = useState('');
	const parserValue = () => {
		switch (type) {
			case 'status':
				setResult(
					<b className='text-secondary'>
						<GoPrimitiveDot size={20} className={`${statusClass}`} />
						<span>{` ${value}`}</span>
					</b>,
				);

				break;
			case 'camelCase':
				setResult(camelCase(value));
				break;
			case 'snake_case':
				setResult(snakeCase(value));
				break;
			case 'kebabCase':
				setResult(kebabCase(value));
				break;
			case 'title':
				const tolower = lowerCase(value);
				setResult(startCase(tolower));
				break;
			case 'titleFirst':
				const tolowerFirst = lowerCase(value);
				setResult(capitalize(tolowerFirst));
				break;
			case 'lowerCase':
				setResult(toLower(value));
				break;
			case 'upperCase':
				setResult(toUpper(value));
				break;
			case 'currency':
				if (isNumber(value)) {
					setResult(
						`${prefix.toUpperCase()} ${numberWithCommas(value)} ${sufix.toUpperCase()}`,
					);
				}
				break;
			case 'currencyPositive':
				if (isNumber(value)) {
					setResult(
						<b className='text-success'>{`${prefix.toUpperCase()} ${numberWithCommas(
							value,
						)} ${sufix.toUpperCase()}`}</b>,
					);
				}
				break;
			case 'currencyNegativeB':
				if (isNumber(value)) {
					setResult(
						<b className='text-danger'>{`${prefix.toUpperCase()} ${numberWithCommas(
							value,
						)} ${sufix.toUpperCase()}`}</b>,
					);
				}
				break;

			case 'currencyNegative':
				if (isNumber(value)) {
					setResult(
						`-${prefix.toUpperCase()} ${numberWithCommas(value)} ${sufix.toUpperCase()}`,
					);
				}

				break;
			case 'decimal':
				if (isNumber(value)) {
					setResult(numberWithCommas(value));
				}
				break;
			case 'percent':
				if (isNumber(value)) {
					setResult(`${numberWithCommas(value)}%`);
				}
				break;
			case 'percentPositive':
				setResult(
					<b className='text-success'>
						<AiOutlineArrowUp />
						<span>{`${value}${sufix}`}</span>
					</b>,
				);

				break;
			case 'percentNegative':
				setResult(
					<b className='text-danger'>
						<AiOutlineArrowDown />
						<span>{`${value}${sufix}`}</span>
					</b>,
				);

				break;
			case 'textPositive':
				setResult(
					<b className='text-success'>
						<span>{`${value}`}</span>
					</b>,
				);
				break;
			case 'textNegative':
				setResult(
					<b className='text-danger'>
						<span>{`${value}`}</span>
					</b>,
				);
				break;
			case 'textInfo':
				setResult(
					<b className='text-info'>
						<span>{`${value}`}</span>
					</b>,
				);
				break;
			case 'simpleDate':
				setResult(moment(value).format('MM-DD-YYYY'));
				break;
			case 'longDate':
				setResult(moment(value).format('dddd, MMMM D, YYYY h:mm A').toString());

				break;
			case 'dateTime12h':
				setResult(moment(value).format('MM-DD-YYYY hh:mm a'));

				break;
			case 'dateTime24h':
				setResult(moment(value).format('MM-DD-YYYY hh:mm'));

				break;
			case 'simpleDateExt':
				setResult(moment(value).format('MMM Do, YYYY'));

				break;
			default:
				setResult(value);
				break;
		}
	};

	useEffect(() => {
		parserValue();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
	return <React.Fragment>{result}</React.Fragment>;
}
