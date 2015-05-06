var _ = {};

_.once = function(fn) {
	var invoked = false;
	var result;
	return function() {
		if (!invoked) {
			invoked = true;
			result = fn();
			return result;
		} else {
			return result;
		}
	}
}

_.memoizewithoutcallback = function(fn) {
	var caches = {};
	var funcname = fn.name;
	console.log(funcname);
	return function(value) {
		var cachekey = funcname + "-" + value;
		if (caches.hasOwnProperty(cachekey)) {
			console.log("has property");
			return caches[cachekey];
		} else {
			var result = fn(value);
			caches[cachekey] = result;
			console.log("no property");
			return result;
		}
	}
}

_.memoize = function(fn, callback) {
	var caches = {};
	return function(value) {
		var cachekey = callback(value);
		if (caches.hasOwnProperty(cachekey)) {
			console.log("has property");
			return caches[cachekey];
		} else {
			var result = fn(value);
			caches[cachekey] = result;
			console.log("no property");
			return result;
		}
	}
}

_.bind = function (fn, scope) {
	return function () {
		return fn.apply(scope);
	};
}

module.exports = _;