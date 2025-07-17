# Food Court🚀

## Overview
The Food Court App is a dynamic and responsive web application built using React. This app leverages Swiggy's API to fetch and display real-time restaurant and menu information. Users can explore various restaurants, view detailed menus, and interact with categories to find their favorite dishes. The app provides a seamless and user-friendly experience, akin to modern food delivery platforms.

## Features
- Restaurant Listings: Browse through a curated list of restaurants with detailed information such as ratings, locality, delivery time, and cost for two.
- Menu Display: View comprehensive menus for each restaurant, including categories and individual dish details.
- Interactive Categories: Expand and collapse menu categories to easily navigate through different sections.
- Top Picks: Highlighted section for top picks, showcasing popular dishes or special offers.
- Responsive Design: Optimized for various devices to ensure a smooth experience on desktops, tablets, and mobile phones.
- Loading State: Shimmer effect for a better user experience during data fetching.

## Technology Stack
- Frontend: React, HTML, CSS, Tailwind CSS ,JavaScript
- API Integration: Swiggy's API for fetching restaurant and menu data
- State Management: React hooks for managing local component state
- Routing: React Router for handling different routes within the app

## Redux-Toolkit
- Set up Redux store with `createSlice` and `configureStore`
- Created cartSlice with add, remove, and clear item reducers
- Integrated Redux with React components using `useSelector` and `useDispatch`

## Types of Testing (Dev's)
- Unit Testing
- Integration testing
- End to end testing - e2e testing

## Setting up Testing in our App
- Install React Testing library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react to make jsx work in test cases
- Include @babel/preset-react inside my babel configuration 
- Install @testing-library/jest-dom

## Getting Started
- To run the project locally, follow these steps:

## Clone the repository:

In bash:
- git clone https://github.com/rajatsaini2003/food-court-app.git
- cd food-court-app

## Install dependencies:
- npm install
- Also add Allow CORS: Access-Control-Allow-Origin on your browser as it is necessary to fetch API

## Run the app:
- npm run start
- Open your browser and navigate to http://localhost:1234 to see the app in action.

# Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

# License
This project is licensed under the MIT License.

# Acknowledgments
Thanks to Swiggy for providing the API used in this project.
Inspired by modern food delivery platforms for UI/UX design

# Parcel
 - Dev build
 - local server
 - HMR -> Hot module replacement
 - File watching Algorithm -> written in C++
 - caching -> Faster Build 
 - Image optimization
 - Minification
 - Bundling
 - Compressing
 - Consistent hashing
 - code splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error handling
 - HTTPS
 - Tree shaking -> remove unused code 
 - different dev and production bundles
 - Read parcel documents will help in system design interview




# important 
 ## API key will not work without CORS chrome extension , so to load content from api we'll need to add cors extension , and also keep updating component because API key keeps changing
