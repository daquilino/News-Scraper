# News-Scrapper (freecodecamp scraper)

[![screen shot](https://github.com/daquilino/News-Scraper/blob/master/public/assets/images/screen-shot.png)](https://blooming-springs-39642.herokuapp.com/)

An app that lets users leave comments on the latest articles on Web Development scraped from the [freecodecamp's medium.com](https://medium.freecodecamp.com/tagged/web-development) page.

Whenever a user visits [freecodecamp scraper](https://blooming-springs-39642.herokuapp.com/), the app will present the user with a list of any previously scraped articles stored in the database along with any associated comments users may have left.  The use can click on 'Update Articles' button which will use Cheerio to grab the latest articles and if they don't already exist, save them to the MongoDB database using Mongoose ODM.

All users can leave comments on any of the stories collected. They are also able to delete whatever comments they want removed. All stored comments are visible to every user.


## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.
* [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [MongoDB](https://www.mongodb.com/) - NoSQL Document Database.

###### NPM Packages

* [express](https://www.npmjs.com/package/express) - Node.js web application framework that provides a robust set of features for web and mobile applications.
* [body-parser]() - Node.js body parsing middleware.
* [mongoose](https://www.npmjs.com/package/mongoose) - A MongoDB object modeling tool.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express.
* [request](https://www.npmjs.com/package/request)	- JS library used to make http calls.
* [moment](https://www.npmjs.com/package/moment) - A JavaScript date library.
* [cheerio](https://www.npmjs.com/package/cheerio) - Implementation of core jQuery for the server.

## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)