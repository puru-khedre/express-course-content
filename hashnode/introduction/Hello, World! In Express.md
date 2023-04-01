# Hello, World! In Express.js


```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(1337, () => {
  console.log('Listening on port 1337!');
});
```

The code inside `index.js` file sets up a simple Express.js application that listens for requests on port 1337 and responds with "Hello, World!" when the root path ("/") is requested. Here's a breakdown of what each line does:

```js
const express = require('express');
```

This line imports the Express.js library and assigns it to the `express` variable.

```js
const app = express();
```

This line creates an instance of the Express.js application by calling the `express()` that was imported in the previous line. The resulting `app` object is what we'll use to define our routes and middleware.

```js
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

This code block sets up a **GET** route for the root path (`"/"`). When a user visits this route, the server will respond with the text "Hello, World!".

```js
app.listen(1337, () => {
  console.log('Listening on port 1337!');
});
```

This line starts the server and listens for incoming requests on port 1337. When the server starts, it will print a `Listening on port 1337!` to the console.