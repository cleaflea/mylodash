var _ = {};

_.once = function(fn) {
	var invoked = false;
	var result;
	return function() {
		if (!invoked) {
			invoked = true;
			result = fn();
		}
		return result;
	}
}

_.memoize = function(fn, callback) {
	var caches = {};
	return function(value) {
		var cachekey = value;
		if (callback) {
			var cachekey = callback(value);
		};
		if (!caches.hasOwnProperty(cachekey)) {
			caches[cachekey] = fn(value);
		}
		return caches[cachekey];
	}
}

_.bind = function (fn, scope) {
	return function () {
		return fn.apply(scope);
	};
}

module.exports = _;

var i = 0; // count how many times identity is called
function identity(n) {
	i = i + 1;
	return n;
}

function cleantha(n) {
	return n + 1;
}

//对于不同的外层参数 每个 memoize 返回的函数都有自己的 cache 也就是传入的fn不同 返回的闭包是独立的

memoizedIdentity = _.memoize(identity);
console.log(memoizedIdentity(1));
console.log(memoizedIdentity(1));

memoizeCleantha = _.memoize(cleantha);
console.log(memoizeCleantha(1));
console.log(memoizeCleantha(1));
