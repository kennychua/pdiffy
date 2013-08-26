# Running with Mocha+PhantomJs
_The pdiffy project tests itself using this strategy. Inspect the package.json file in the root to see how it works live!_

## Prerequisites
You will need the following :
* phantomjs and mocha-phantomjs installed as described [here](https://github.com/metaskills/mocha-phantomjs)

```
   $ npm install -g mocha-phantomjs phantomjs
```
* Otherwise, once you have downloaded and installed PhantomJS yourself and have it on the PATH:
```javascript
   $ npm install -g mocha-phantomjs
```
If you don't install phantomjs using either of these approaches, you will get an unhelpful ENOENT error when you try to run mocha-phantomjs.

* A mocha test using PhantomJs. [Here is an example](https://raw.github.com/kennychua/pdiffy/master/js/test/pdiffy.test.js)
* A mocha-phantomjs TestRunner. [Here is an example](https://raw.github.com/kennychua/pdiffy/master/js/test/TestRunner.html)


## Running the test
* Simply run the following command :
```
   $ mocha-phantomjs /path/to/test/TestRunner.html
```

* Alternatively, you may configure the above command into the test stage of package.json like this [example](https://raw.github.com/kennychua/pdiffy/master/package.json) so that you can just run :
```
   $ npm test
```

![alt text](http://kennychua.net/wp-content/uploads/2013/08/XXX.png "XXXtest run screenshot")
