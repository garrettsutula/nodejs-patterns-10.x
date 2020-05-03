# nodejs-patterns

## Purpose
Starting with Node.js version 8+, features from ECMAScript specifications 2015 & higher are [commonly available](https://node.green/) and are being added to the Node.js javascript engine.

This repo provides patterns for common Node.js conventions, linting, syntax and complexity rules in alignment with the latest [Node.js 10.x](https://nodejs.org/dist/latest-v10.x/docs/api/) and [EMCAScript](http://es6-features.org) featureset. The goal is to provide code samples you can lift & shift into your projects. I'll probably take these ideas & make a VSCode extension with snippets at some point in time in the future.

## Setup/Requirements

Node version `10.6.0` or higher required. Run demos using the command `node --experimental-modules ./demos/{{filename}}.js`. As of Node.js version `13.2.0` the `--experimental-modules` flag is no longer required although this feature is still listed as Experimental in the docs.

## Contents
- Module
- Singleton
- Async/Await
- Event Emitter
- Classes
- Testing
