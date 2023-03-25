
<h1 align="center" id="title">Meat Munchies</h1>
MeatMunchies exists because we deserver better meat. MeatMunchies is designed by taking inspiration from licious web application which is an online meat delivery platform. Objective is to deliver fresh meat in less time.

## 🛠 Built with 

Technologies used in the project:

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB)

![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white)

![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white)

![Chakra-UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&amp;logo=chakra-ui&amp;logoColor=white)

![Node-JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white)

![Express-JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens)

## 💻 Screenshots

**Landing Page:**
![Landing Page](https://user-images.githubusercontent.com/49484642/220946410-94c22720-5b37-48e2-9ffa-239b6af360f1.png)

**Login Page:**
![Login Page](https://user-images.githubusercontent.com/49484642/220946662-8e253d5c-a00e-4abd-abe5-2faf5ba1a2b6.png)

**OTP verification page:**
![OTP verification page](https://user-images.githubusercontent.com/49484642/220946621-a2ca242b-7c5a-44fd-9697-8526a5f76887.png)

**Products and categories page:**
![Products and categories page](https://user-images.githubusercontent.com/49484642/220947321-a8ec3b68-1f3b-41e9-8a60-8336df3ee1c6.png)

**Single product page:**
![Single product page](https://user-images.githubusercontent.com/49484642/220947291-4bd30cbd-e6e6-4bd0-a8f2-b2a88347e7cc.png)

**Payment page:**
![Payment page](https://user-images.githubusercontent.com/49484642/220947311-34a46328-6937-4d22-b31d-d8d2f980a86b.png)


## ✨ Features 
- #### `User side:-`
    - Register and Login page
    - Authentication using email & password
    - Products page
    - **Sorting & filtering:** by price, by rating, by sub-category
    - Add to cart
    - Payment page
    - Data fetching using deployed api

## 🚀 Demo

**Front-end deployed URL:**

https://meat-munchies.vercel.app/
<br/>

**Back-end deployed URL:**

https://splendid-bear-cap.cyclic.app/

##  📁 Folder structure
#### `Client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `pages` - These represent a unique page on the website i.e. Home or About. 
    - #### `redux` - It consists of store, reducer, action and actiontypes and is responsible for global state management of our app.
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `middlewares` - This holds all our middlewares used in our application
- #### `models` - This holds all of our data models or business logic
- #### `routes/controllers` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - An entry file for our Node JS application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
# Installation

Clone the project
```bash
git clone https://github.com/sanghamitra0591/meat-munchies.git
```
## Client-side usage

Go to the project directory

```bash
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```
## Server-side usage

**Environment Variables:-**

To run this project, you will need to add the following environment variables to your .env file

```
port                    // the port on which the server will run
mongo_url              // your mongoDB URI to connect to the mongoDB atlas
JWT_SECRET                     // key which will be JWT secret key 
```

**Start**

```bash
$ cd server            // go to server folder
$ npm i                 // npm install packages
$ npm run server        // run it locally
```

## ✍ Authors

- [@sanghamitra0591](https://github.com/sanghamitra0591)
- [@sbj1198](https://github.com/sbj1198)

##
