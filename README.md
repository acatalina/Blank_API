# Blank API

Blank API is a project built to serve Blank website (under construction). The website allows you to rate existing restaurants, add new ones, leave comments/reviews and get best places per area and/or reviews rate.

## Getting started

 If you want to dig in, please clone this repository, execute ```npm install``` and, when is done, please change the .config.js file with your username and password (the datebase is manage through PostgreSQL, seed the datebase with ```npm run db-dev``` and ```npm start``` or ```npm run dev``` (this command will run with nodemon). Now it should be available in your [localhost:3000](http://localhost:3000).
 
## Running the tests

There are tests available to run on ```npm test``` using Mocha testsuite with Chai (make sure you altered the user and password in the .config file!).

## Deployment

To deploy the API, make sure you have deployed first a database and set environmental variables for USER, PASSWORD, DB and HOST. The port expected for the database is 5432.

## Built with

* Express JS
* PostgreSQL
* pg-promises
* bluebird

## Author

* Alvaro Catalina - [more info](https://acatalina.github.io/portfolio)