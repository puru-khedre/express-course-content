# Handling GET and POST requests in Express.js
In an `Express.js` application, **GET** and **POST** are the two most common HTTP methods that are used for handling client requests.

## Handling GET requests
To handle **GET** requests in Express.js, we can use the `app.get()` method. The first parameter is the URL path, and the second parameter is a callback function that handles the request and sends a response.

```js
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
```
In the above example, when a client makes a GET request to the `/hello` URL path, the server will send back a response with the string "Hello World!".

### Challenge 1: Implementing a GET request to retrieve data from the database

**Instructions:**
  - Write a `GET` request for `/all` path to retrieve all data from the fake database
  - Use the `getFullData()` method provided in the `index.js` file inside the `db` directory to get the data from fake database
  - Send the data as a JSON response back to the client
  - You can manually check data in `db/data.json` file


## Handling POST requests
To handle POST requests in Express.js, we can use the `app.post()` method. The first parameter is the URL path, and the second parameter is a callback function that handles the request and sends a response.

```js
app.post('/login', (req, res) => {
  const { username, password } = req.body
  
  if (username === 'user' && password === 'password') {
    res.send('Login successful!')
  } else {
    res.send('Invalid username or password')
  }
})
```
In the above example, when a client makes a POST request to the `/login` URL path with a JSON payload containing a "username" and "password" property, the server will check if the username and password are valid. If they are valid, the server will send back a response with the string "Login successful!". If they are not valid, the server will send back a response with the string "Invalid username or password".

### Challenge 2: Implementing a POST request to add data to the database

**Instructions:**

  - Write a `POST` request for `/user` path to add a new data to the fake database
  - Use the `saveData()` method provided in the `index.js` file inside the `db` directory to save the data
  - Use the `body-parser` middleware to parse the incoming request body
  - Send a success message as a JSON response and **status code of 200** back to the client
  - You can post a user by filling up the form on `/` route, you can manually check data in `db/data.json` file.

**NOTE:-** We learn about middleware in later sections, for now follow this steps:
  - run `yarn add body-parser` in terminal.
  - add below code inside `index.js` file. 
  - ```js
    const bodyParser = require('body-parser');
    // before all the route handlers
    app.use(bodyParser.json());
    ```

## Real-life examples
Here are some real-life examples of how we can use GET and POST requests in an Express.js application:

  - A blog application might use a GET request to retrieve a list of blog posts from a database and display them to the user.
  - A social media application might use a POST request to allow a user to create a new post and save it to a database.

Overall, handling GET and POST requests in an Express.js application is essential for building web applications that interact with clients and databases.# Handling GET and POST requests in Express.js
In an `Express.js` application, **GET** and **POST** are the two most common HTTP methods that are used for handling client requests.