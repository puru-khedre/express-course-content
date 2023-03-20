## Understanding the basic express application
The code inside `index.js` file sets up a simple Express.js application that listens for requests on port 1337 and responds with "Hello World!" when the root path ("/") is requested. Here's a breakdown of what each line does:

```js
const express = require('express')
```

This line imports the Express.js library and assigns it to the `express` variable.

```js
const app = express()
```

This line creates an instance of the Express.js application by calling the `express()` that was imported in the previous line. The resulting `app` object is what we'll use to define our routes and middleware.

```js
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
```

This code block sets up a **GET** route for the root path `("/")`. When a user visits this route, the server will respond with an HTTP status code of 200 and the text "Hello World!".

```js
app.listen(1337, () => {
  console.log('Server started on port 1337')
})
```

This line starts the server and listens for incoming requests on port 1337. When the server starts, it will print a `Server started on port 1337` to the console.

## Creating yarn script

To create a Yarn script to run the server, you can add the following line to your `package.json` file:

```json
"scripts": {
  "start": "node index.js"
}
```

This will create a script called `start` that runs the `node` command with the file `index.js`, You can then start the server by running `yarn start` inside terminal.

## Using nodemon for development

Nodemon is a tool that helps developers to automatically restart the server upon detecting any changes in the codebase. This tool is particularly useful during development, as it eliminates the need to manually restart the server every time changes are made to the code.

To use nodemon in an Express.js project, first install it as a development dependency using yarn:

```bash
yarn add nodemon --dev
```

Once installed, add a new script in your `package.json` file to use nodemon instead of the standard `node` command:
```json
"scripts": {
  "dev": "nodemon index.js"
}
```

This tells nodemon to monitor changes to the `index.js` file and automatically restart the server when changes are detected. You can then start the server by running:

```bash
yarn dev
```

With nodemon running, you can now make changes to your code and see the results immediately without having to manually stop and restart the server. This can save a lot of time and effort during development.