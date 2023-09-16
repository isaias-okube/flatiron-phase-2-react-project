### Phase 2 Project Guidelines

## Learning Goals
Build a React single page application from scratch
Apply your knowledge of components, props and state management
Incorporate client-side routing
Use data from an API
## Introduction
Now that you've learned the fundamentals of React, it's time to practice and expand your skills by making a React project from scratch!

This assignment is open-ended when it comes to the actual content. You are free to create whatever you'd like, as long as it incorporates the requirements listed in these instructions.

## Requirements
1. You must make a single page application (only one index.html file) using create-react-app.
2. Your app should use at least 3 components in a way that keeps your code well organized.
3. There should be at least 2 client-side routes using React RouterLinks to an external site.. Be sure to include 
    a nav bar or other UI element that allows users to navigate between routes.

4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json 
   server.
5. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose 
   to incorporate data from an external API but it is not required.

6. You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work 
   with more complex data in the next two phases. Focus on the frontend for this project.
    Upon return of json from your POST request, a state update by a setState function is required!
 // in App:
 function addMovie(newMovie){
  setMovies([...movies, newMovie]) // Updating movies state.
 }

 //in Form
 const configObj = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({title: "Titanic"})
 }

 fetch('http://localhost:3000/movies', configObj)
  .then(res => res.json())
  .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
  // clear form

Remember: responsibility for re-rendering the page to display the updated list of movies should belong to the addMovie function; depending on a subsequent action to load the new data is not best practice.

## Stretch Goals
Use more components and client-side routes.
Add some styling: you're encouraged to write your CSS from scratch, either by using styled componentsLinks to an external site. or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React BootstrapLinks to an external site., Semantic UILinks to an external site., or Material UILinks to an external site.) if you prefer.
Incorporate data from an external API. Check out this list of APIsLinks to an external site. if you need some inspiration!
Anything else you'd like! These are only the basic requirements — you're free to explore and add on as much stuff as you'd like. 
Setup
For this project, you will need two separate repositories: one for your frontend and one for your backend. This will make it easier to deploy your project later, should you choose to do so.

## Frontend Setup
Use create-react-app to generate starter code for your project. Follow the instructions on the create-react-appLinks to an external site. site to get started.

## Backend Setup
You can use this json-server templateLinks to an external site. to generate your backend code. Using this template will make it easier to deploy your backend later on.

If you prefer, instead of using the template, you can create a db.json file in the root of your project with a structure that looks like this:

{
  "toys": [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    }
  ]
}
Then, assuming you have json-server installed globally, you can run this command to run the server:

 json-server --watch db.json
Whatever top-level keys exist in your db.json file will determine the routes available. In the example above, since we have a key of toys pointing to an array of toy objects, json-server will generate the following routes:

GET /toys
POST /toys
GET /toys/:id
PATCH /toys/:id
DELETE /toys/:id
You can consult the json-server docsLinks to an external site. for more information.
