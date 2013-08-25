# pdiffy

Automated UI Verification with perceptual diffs (pdiff)
  - [![Build Status](https://travis-ci.org/kennychua/pdiffy.png?branch=master)](https://travis-ci.org/kennychua/pdiffy)
  - [![Code Climate](https://codeclimate.com/github/kennychua/pdiffy.png)](https://codeclimate.com/github/kennychua/pdiffy)

NOT READY FOR USE!

## What is pdiffy?
A normal diff between 2 text files enables you to quickly determine 2 things - Whether the two input files are identical, and if not, exactly where the differences lie.

A Perceptual Diff (pdiff) allows you to do the same with 2 image files and quickly identify whether the two images are identical, and highlight areas where the 2 images mismatch

## How can this be useful?
__*Automated UI Verification!*__

At the end of every testing cycle, someone is always responsible to have a final look even though all the tests have passed and that all functionality works as expected to make sure that everything looks right and is displayed properly.

_Once you have a baseline of what looks right, a machine can do it faster and better for you_

This tool is intended to provide you with quick immediate feedback when something does not look quite right and highlights it for you.


### Example

Take the [Google homepage](http://www.google.com) for example. This is what we expect it to look like.


![alt text](http://kennychua.net/wp-content/uploads/2013/08/google_homepage_original.png "Expected Google Homepage")

Suppose for some reason, the 'About Google' link was inadvertently missed.
![alt text](http://kennychua.net/wp-content/uploads/2013/08/google_homepage_missinglink.png "Google Homepage with missing link")

pdiffy is able to tell you that the images were not identical, and highlight the missing link. Notice the pink highlights around the missing link.
![alt text](http://kennychua.net/wp-content/uploads/2013/08/difference.png "Computed difference")

The resulting JSON object also gives you some extra data from the analysis.
```javascript
{isSameDimensions: true, misMatchPercentage: "0.04", analysisTime: 672, getImageDataUrl: function()}
```
--- 

## One step further.. Ignoring certain regions on page for allowed/known differences
Often times when doing visual comparisons on a site, you expect that some areas of the site are going to be different. For example, there might be a current date/time displayed on the page, or an alternating banner. 

*__pdiffy allows you to exclude specific sections of a page from the comparison analysis by marking the section in the known/expected image as a transparent area.__*

If we compared the following 2 images, one with the missing link we saw above, and another with a transparency over the missing link,
![alt text](http://kennychua.net/wp-content/uploads/2013/08/transparency.png "Google Homepage with transparency over missing link to ignore")
![alt text](http://kennychua.net/wp-content/uploads/2013/08/google_homepage_missinglink.png "Google Homepage with missing link")
We get the following results:
```javascript
{isSameDimensions: true, misMatchPercentage: "0.00", analysisTime: 672, getImageDataUrl: function()}
```
## Usage
* Usage with Mocha+PhantomJs
* [Usage with CasperJs](https://github.com/kennychua/pdiffy/blob/master/examples/casperjs/CASPEREXAMPLE.md)
* Usage with Selenium WebDriver(Java)
* Uses with Selenium WebDriver(other)

## Reference
- [Secret to Safe Continuous Deployments](http://www.youtube.com/watch?v=UMnZiTL0tUc) See what Google says about how they use and benefit from a pdiff implementation. 

## Acknowledgement
Borrowed heavily from [resemble.js](http://huddle.github.io/Resemble.js/)

