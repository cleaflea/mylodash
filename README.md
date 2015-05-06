## usage

```
npm install mocha chai --save-dev
./node_modules/.bin/mocha spec/once_spec.js
./node_modules/.bin/mocha spec/memoize_spec.js
./node_modules/.bin/mocha spec -g "should use cache_key argument to calculate cache key"
./node_modules/.bin/mocha spec/bind_spec.js -g "should force this to be a context object"
```

## useful links

* [memoize](http://webcloud.info/blog/2014/05/07/memoizing-with-javascript-and-closure-experiment/)
* [bind](http://www.smashingmagazine.com/2014/01/23/understanding-javascript-function-prototype-bind/)

## hint

* call or apply just set the this inside a function
* bind just pass the context from outenv -> innerfunc
