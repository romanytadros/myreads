## OverView
 MyReads Project
 
 This project is developed code by me from the  UDEMY starter project . Project makes user have books from the UDEMY API search to his own book shelves like (curently reading,want to read,read) and state(none ) to send the book out of shelves

## Description
project stars with main page "/" with loader component till the api response is returned then shelves  appeared with all books you have and orderd in it's correct shelf  every book have a selector button that displays the curent shelf and provides user to change the shelf or alse select none to get it out of his library . also you can enter search page via the search button at the buttom right side of the main page ,in the search page you can type the title of book you want to search for , book have the same property as main page (selector current state and ability of change the shelf  )  

 

## TL;DR

To get started developing right away:
- gh repo clone udacity/reactnd-project-myreads-starter
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
 
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
├──src
    ├──components
        ├── Book.js # Book style view and props that have book info from differnt shelves and search 
        ├── BookSelect.js # Selects the state (shelf) of the book or shows the current state in main page and search
        └── BookShelf.js # views the book current book's shelf 
    ├── Pages
        ├── MainLib.js # views the main library's shelves and search button 
        ├── NotFound.js # views the 404 page if subdomain is not found
        └── Search.js # views book search result and also can show current shelf of book or gain it to library
    └── store
    	├── actions.js # returns new value  of state 
        ├── reducer.js # returns functions that calculate a new state based on the old state and the action.
        └── store.js # app has only one store  that holding the state of app and linking action and reducer
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


 

## Backend Server
this part provided by Udacity in (starter project)
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).


 

 
