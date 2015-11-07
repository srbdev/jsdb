
# JSDB
JSDB attempts to be a SQL lite database written entirely in JavaScript. This is purely an experiment for my own learning experience but I hope that down the line, JSDB becomes a tool that people could use (in theory).

Currently, JSDB only works through its command line interface.

# Installation

### Prerequisites
[Node](https://nodejs.org/en/) needs to be installed. Note that the code base is written in ECMAScript 6 and runs using [Babel](http://babeljs.io/). Though included in [package.json](https://github.com/srbdev/jsdb/blob/master/package.json), Babel can be installed globally via the command:

    $ npm install -g babel

### Install
Follow these steps to install and run JSDB:

    $ git clone https://github.com/srbdev/jsdb.git
    $ cd jsdb
    $ npm install
    $ babel-node index.js
    jsdb> 

# How It Works

Under construction...

<a href="#">#</a> <b>CREATE</b>

Creates a database. Note that creating a database does not persist it across sessions. Use the *SAVE* command to save a database to file.

    jsdb> CREATE DATABASE db
    Database db successfully created!

<a href="#">#</a> <b>SHOW</b>

Displays a list of loaded databases in the current session.

    jsdb> SHOW DATABASES

    Databases
    ---------
    db

<a href="#">#</a> <b>DESCRIBE</b>

Outputs information about a database.

    jsdb> DESCRIBE DATABASE db

<a href="#">#</a> <b>USE</b>

Selects a database for the current session.

    jsdb> USE db
    Database changed to db

<a href="#">#</a> <b>SAVE</b>

Saves a database to disk. It writes the file to the user's home folder using the database's name and a .jsdb extension.

    jsdb> SAVE db
    Database db was successfully saved in /home/srbdev/db.jsdb

<a href="#">#</a> <b>LOAD</b>

Loads a database into the current session. It requires a full path and a database file with a .jsdb extension.

    jsdb> LOAD /home/srbdev/db.jsdb
    Database db loaded!

