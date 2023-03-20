# Sending JSON and HTML responses from an Express.js Application
In this lab, we will learn how to send JSON and HTML responses from an Express.js application.

## JSON Responses
**JSON** (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. JSON is a text format that is completely language independent.

Express.js provides a `res.json()` method that we can use to send JSON responses to the client. The `res.json()` method sends a JSON response and sets the Content-Type header to application/json.

Here's an example:

```js
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Puru Khedre', email: 'puru@khedre.com' },
  ];
  
  res.json(users);
});
```
In this example, we have defined a route that returns a list of users in JSON format. When the client makes a GET request to `/api/users`, our Express.js application will send the list of users as a JSON response.

## Sending HTML Responses
In addition to sending JSON responses, Express.js also allows us to send HTML responses using the `res.sendFile()` method. This method takes the path of an HTML file as a parameter and sends it back to the client as an HTML response.

Let's take a look at an example:

```js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
```
In this example, we are handling a GET request to the root route /. We are using the `res.sendFile()` method to send an HTML file named index.html located in the same directory as the server file.

Note that we are using the __dirname variable, which is a global variable in Node.js that contains the absolute path of the directory that contains the currently executing file.

