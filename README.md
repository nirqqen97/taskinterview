# Streamer App

The Streamer App is a web application that allows users to view and vote on streamers. It provides features to add new streamers to the list, view streamer details, and vote on them.

## Backend

The backend of the Streamer App is built using Node.js, Express.js, and MongoDB. It provides a RESTful API for handling streamer data, including fetching all streamers, adding new streamers, retrieving streamer details, and voting on streamers.

The backend code is organized into separate files and folders for better maintainability and modularity. It uses Axios to handle HTTP requests to the API endpoints.

## Frontend

The frontend of the Streamer App is built using React and React Router. It provides a user-friendly interface for users to interact with the streamers. The frontend code is organized into components, such as `StreamerCard` and `StreamerForm`, to encapsulate the functionality and improve code reusability.

The frontend makes use of styled components for styling the UI elements and follows a modular approach for easier maintenance and scalability.

## Getting Started

- npm install

- npm run dev

## API Endpoints

The backend API provides the following endpoints:

- GET /streamers - Get all streamers
- POST /streamers - Add a new streamer
- GET /streamers/:streamerId - Get details of a specific streamer
- PUT /streamers/:streamerId/:vote - Vote on a streamer (upvote or downvote)

## Technologies Used

**Frontend:**

- React
- React Router
- Styled Components

**Backend**:

- Node.js
- Express.js
- MongoDB
- Mongoose

**Other libraries:**

- Axios
- PropTypes (for type checking)
