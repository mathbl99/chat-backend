# Chat.io - Backend

**Chat.io - Backend** is the server-side component of the Chat.io application. It handles all the business logic, data storage, and real-time communication required for the chat functionality. The backend is designed to work with the [frontend](https://github.com/mathbl99/chat-frontend).

## Features

- **User Authentication**:
  - Secure user registration and log in.
  - Password validation.
  - Token-based authentication for session management.

- **Real-Time Messaging**:
  - Manages connections with clients using Socket.IO.
  - Broadcasts messages to all connected users in real-time.

- **Data Storage**:
  - Stores user data in an in-memory database.

## How It Works

1. **User Authentication**:
   - Users register and log in through the API.
   - JWT tokens are issued upon successful login for secure session management.

2. **Real-Time Messaging**:
   - The server establishes connections with clients via Socket.IO.
   - Messages are received from one client and broadcast to all connected clients.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js; ensure you have the latest version.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mathbl99/chat-backend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd chat-backend
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Configure environment variables**

    - Create a `.env` file in the root directory.
    - Add the following variables:

      ```env
      SERVER_PORT=
      CLIENT_URL=
      JWT_SECRET_KEY=yourkey
      ```

      Assign each variable its respective value.

5. **Start the server:**

    ```bash
    npm start
    ```

6. **User Endpoints**:

    - `POST /register`: Create a new user.
    - `POST /login`: Login with email and password.
    - `GET /user`: Return the user information.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for handling HTTP requests and middleware.
- **Socket.IO**: Library for real-time, bidirectional communication.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
