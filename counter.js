function makeCounter(n) {
	function increment() {
		return n += 1;
	}
	function decrement() {
		return n -= 1;
	}
	return [increment, decrement];
}

var counter = makeCounter(5);
var counter1_inc = counter[0];
var counter1_dec = counter[1];

var counter2 = makeCounter(10);
var counter2_inc = counter2[0];
var counter2_dec = counter2[1];

console.log(counter1_inc());
console.log(counter2_inc());
console.log(counter1_inc());
console.log(counter2_dec());
console.log(counter1_dec());