# Personal Site Adrian Meza
iterate, develop, create, test, distribute
Use __insert_url___ to learn about, engage, inquire, and dialogue with Adrian Meza.
Other thoughts/ideas --> Story of My Life? Stories For Life?

## Overview
La Vida de Adrian Meza is a personal site built by Adrian to share his story with the world. As a first-gen Mexican-American in the United States, his story is unique in ways, yet similar across the -ities that exist. Over the course of human existence, these stories repeat and this is Adrian's documented versions.

Additionally, you can create a user profile to engage and inquire with Adrian, establishing more trust. With this feature, you will have the ability to comment, review, and in future versions, likely share stories as well.

To get started, visit __insert_url___  and create an account using email. Happy listening & learning!

### Tool Stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://github.com/axios/axios)
* [D3](https://d3js.org/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/) as Object-Relational Mapper (ORM)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/) as Object-Relational Mapper (ORM)
* [Jest](https://jestjs.io/)
* [Cypress](https://www.cypress.io/)

#### Server
Main RESTful server is deployed on Amazon Web Services Elastic Compute Cloud (AWS EC2) and uses NGINX to reverse proxy traffic to appropriate servers (MySQL DB, MongoDB, static files). Caching is employed and reduces page load time by more than __num__% after initial page rendering.

#### Database
Website database is constructed in MySQL using Sequelize. Additionally, __name__ has a worker function that indexes queries and stores trending or high-volume information in a Mongo database for faster retrieval.

### Features for Future Releases
* **TBD**: TBD next features.

```
Personal Site
├── package.json
├── README.md
├── webpack.config.js
├── webpack.production.config.js
│
├── build
│   ├── bundle.min.js
│   ├── bundle.min.js.map
│   ├── style.css
│   ├── index.html
│   └── assets
│       ├── facebook.png
│       ├── flavorTown.png
│       └── google.png
│
├── src
│   ├── auth.js
│   ├── index.jsx
│   ├── actions
│   │   ├── testApi.js
│   │   ├── apiRequests
│   │   │   ├── getRecipeById.js
│   │   │   ├── getRestaurantById.js
│   │   │   ├── getUserByDisplayName.js
│   │   │   ├── getUserById.js
│   │   │   ├── getUserPosts.js
│   │   │   ├── getUserSubscriptions.js
│   │   │   ├── login.js
│   │   │   └── index.js
│   │   │
│   │   ├── auth
│   │   │   ├── authFirebase.js
│   │   │   └── index.js
│   │   │
│   │   └── modal
│   │       ├── hideModal.js
│   │       ├── showLoginModal.js
│   │       └── index.js
│   │
│   ├── assets
│   │   ├── facebook.png
│   │   ├── flavorTown.png
│   │   └── google.png
│   │
│   ├── components
│   │   ├── App.jsx
│   │   ├── dataDisplay
│   │   │   ├── BubbleChart.jsx
│   │   │   ├── Bubbles.jsx
│   │   │   ├── constants.js
│   │   │   ├── DataDisplay.css
│   │   │   ├── DataDisplay.jsx
│   │   │   ├── GroupingPicker.css
│   │   │   ├── GroupingPicker.jsx
│   │   │   ├── Tooltip.css
│   │   │   ├── Tooltip.jsx
│   │   │   └── utils.js
│   │   │
│   │   ├── displays
│   │   │   ├── AddComment.jsx
│   │   │   ├── Comment.jsx
│   │   │   ├── ListRecommendedItems.jsx
│   │   │   ├── ListThumbnails.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Tags.jsx
│   │   │   ├── TrendingCarousel.jsx
│   │   │   └── TrendingRecipesList.jsx
│   │   │
│   │   ├── home
│   │   │   ├── Home.jsx
│   │   │   └── HomeFilterThumbnails.jsx
│   │   │
│   │   ├── modals
│   │   │   ├── LoginModal.jsx
│   │   │   └── ModalRoot.jsx
│   │   │
│   │   ├── posts
│   │   │   ├── PostEntry.jsx
│   │   │   ├── PostView.jsx
│   │   │   └── Trending.jsx
│   │   │
│   │   ├── profile
│   │   │   ├── FollowerEntry.jsx
│   │   │   ├── UserComponent.jsx
│   │   │   └── UserProfile.jsx
│   │   │
│   │   ├── recipe
│   │   │   ├── RecipeDetailsPage.jsx
│   │   │   ├── RecipeFilterInstructions.jsx
│   │   │   ├── RecipeHomePage.jsx
│   │   │   └── RecipeSubmissionForm.jsx
│   │   │
│   │   ├── restaurant
│   │   │   ├── RestaurantDetailsPage.jsx
│   │   │   ├── RestaurantHomePage.jsx
│   │   │   └── RestaurantSubmissionForm.jsx
│   │   │
│   │   └── testData
│   │       ├── bubble.css
│   │       ├── cookingQuotes.json
│   │       ├── diningQuotes.json
│   │       ├── testRestaurants.json
│   │       ├── testUser.json
│   │       └── us.json
│   │
│   ├── containers
│   │   ├── app.js
│   │   ├── loginModal.js
│   │   ├── recipe.js
│   │   └── restaurant.js
│   │
│   ├── reducers
│   │   ├── allReducers.js
│   │   ├── app
│   │   │   └── appReducer.js
│   │   │
│   │   ├── auth
│   │   │   └── authFirebaseReducer.js
│   │   │
│   │   └── modal
│   │       └── modalReducer.js
│   │
│   └── utils
│       ├── detailsPage.js
│       ├── formValidation.js
│       ├── googleRestaurant.js
│       ├── parseSlashes.js
│       ├── postComment.js
│       └── uploadImage.js
│
└── tests
    └── App.test.jsx
```

### The Developer
* [Adrian Meza](https://github.com/adrianme213)
