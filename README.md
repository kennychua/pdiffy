pdiffy
======

Automated UI Verification with perceptual diffs (pdiff)
  - [![Build Status](https://travis-ci.org/kennychua/pdiffy.png?branch=master)](https://travis-ci.org/kennychua/pdiffy)
  - [![Code Climate](https://codeclimate.com/github/kennychua/pdiffy.png)](https://codeclimate.com/github/kennychua/pdiffy)

NOT READY FOR USE!

What is pdiffy?
------------------
A normal diff between 2 text files enables you to quickly determine 2 things - Whether the two input files are identical, and if not, exactly where the differences lie.
A Perceptual Diff (pdiff) allows you to do the same with 2 image files and quickly identify whether the two images are identical, and highlight areas where the 2 images mismatch

How can this be useful?
------------------------
Automated UI Verification!

At the end of every testing cycle, someone is always responsible to have a final look even though all the tests have passed and that all functionality works as expected to make sure that everything looks right and is displayed properly.
_Once you have a baseline of what looks right, a machine can do it faster and better for you_

This tool is intended to provide you with quick immediate feedback when something does not look quite right and highlights it for you.


Take the [![Gooogle homepage](http://www.google.com) for example. This is what we expect it to look like.

XXX image1

Suppose for some reason, the 'XXX' link was inadvertently missed.
XXX image2

pdiffy is able to tell you that the images were not identical, and highlight the missing link:
XXX image3

code


One step further.. Ignoring certain areas
----------------------------------------


Reference
---------
- [Secret to Safe Continuous Deployments](http://www.youtube.com/watch?v=UMnZiTL0tUc) See what Google says about how they use and benefit from a pdiff implementation. 

Acknowledgement
----------------
Borrowed heavily from [resemble.js](http://huddle.github.io/Resemble.js/)

