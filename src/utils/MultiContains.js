export function contains(target, pattern) {
	var value = 0;
	pattern.forEach(function (word) {
		value = value + target.includes(word);
	});
	return value === 1;
}

export function isNullOrWhitespace(input) {
	if (typeof input === 'undefined' || input == null) return true;

	return input.replace(/\s/g, '').length < 1;
}
