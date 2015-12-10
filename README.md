
# JSDB
JSDB attempts to be a SQL lite database written entirely in JavaScript. This is purely an experiment for my own learning experience but I hope that down the line, JSDB becomes a tool that people could use (in theory).

Currently, JSDB is mainly developed as a command line interface, but I started implementing its Node module counterpart.

# Installation

### Prerequisites
[Node](https://nodejs.org/en/) needs to be installed. **Note that the code base is written in ECMAScript 6 and runs using [Babel](http://babeljs.io/)**. JSDB also uses [Mocha](http://mochajs.org/) for its testing framework and [Chai](http://chaijs.com/) as its assertion library. 

### Install
Follow these steps to install and run JSDB:

    $ git clone https://github.com/srbdev/jsdb.git
    $ cd jsdb
    $ npm install
    $ npm start
    jsdb> 

Follow these steps to install JSDB as a Node module:

    $ npm install @srbdev/jsdb --save

Then add the following snippet at the top of the .js file:

```javascript
const jsdb = require('@srbdev/jsdb')
```

# How It Works

Click here to use JSDB on the [command line](https://github.com/srbdev/jsdb/wiki/Command-Line).

Click here to use JSDB as a [Node module](https://github.com/srbdev/jsdb/wiki/Node-Module).

