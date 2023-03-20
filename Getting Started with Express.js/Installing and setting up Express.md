Before you can start building applications with Express.js, you need to install and set it up on your system. In this lab, you will learn how to install and set up Express.js inside this lab.

## Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js (version 14 or above)
- npm (version 6 or above) or yarn

But for now you don't need to do this because, This are already installed in the environment which we have provided you in this lab. You can chech by running this commands in the terminal-
```sh
# for node.js
node -v
# for npm
npm -v
# for yarn
yarn -v
```

## Getting Started
We're using yarn in this course

1. Initialize a new Node.js project by running the following command:

```sh
yarn init -y
```

This will create a new `package.json` file in your project directory.

2. Install Express.js as a dependency by running the following command:

```sh
yarn add express
```

This will download and install the latest version of Express.js in your project directory.

3. Create a new file named `index.js` and add the following code to it:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(1337, () => {
  console.log('Server started on port 1337')
})
```

This code sets up a simple Express.js server that listens on port 1337 and responds to requests with the message "Hello World!".

4. Start the server by running the following command:

```sh
node index.js
```

This will start the server and you should see the message "Server started on port 3000" in your console and "Hello World!" inside the embeded browser preview.


## Further Reading

- [Express.js documentation](https://expressjs.com/)