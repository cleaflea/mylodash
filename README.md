```
npm install mocha chai --save-dev
./node_modules/.bin/mocha spec/once_spec.js
./node_modules/.bin/mocha spec/memoize_spec.js
./node_modules/.bin/mocha spec -g "should use cache_key argument to calculate cache key"
./node_modules/.bin/mocha spec/bind_spec.js -g "should force this to be a context object"
```
