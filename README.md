# Movie tracker

## The Task

With so many different streaming services available it's hard to keep track of every movie that looks good. Your task is to create an app that makes it a little easier. Use this movie-tracker project as a starting point and create a simple app that allows users to search for a movie by title and "save" the movies they want to watch.

## Details

This project is a shell React app built from [Create-React-App](https://github.com/facebook/create-react-app). Use that as a the starter to add your movie tracking functionality.

In order to search for movies we'll need an API to pull the data. We'll use the Open Movie DB - http://www.omdbapi.com/. The API key to use is 4bb16985. ex query: http://www.omdbapi.com/?apikey=4bb16985&i=tt0114576

This repo already contains a few helpful libraries like react-router for routing, aphrodite for styling, and axios for requesting data from the API but feel free to add anything else you think you need.

To get started you'll need node and npm installed after that you can run `npm install` and then `npm start` to start the project.

## Requirements

Users can:
* Search for movies by title using the Open Movie DB API.
* Save movies from the list of returned movies.
* View all saved movies and rearrage the list order.
	* Note: for this demo saved movies don't need to persist past a single session

This isn't meant to take longer than a few hours. If you get stuck on anything feel free to email me at nick@fitt.co
