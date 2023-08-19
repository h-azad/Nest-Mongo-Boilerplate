# NestJS & MongoDB API Boilerplate with Pre-built Signup and Login APIs

Welcome to the NestJS & MongoDB API Boilerplate repository! This project serves as a foundation for building robust and scalable APIs using NestJS and MongoDB. It comes with pre-built signup and login APIs, integrated with `@nestjs/passport` for authentication.

## Features

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **MongoDB**: A powerful and flexible NoSQL database for storing and retrieving data.
- **@nestjs/passport**: An authentication library for NestJS that simplifies the process of implementing various authentication strategies.
- **Pre-built Signup and Login APIs**: Get started quickly with ready-to-use endpoints for user registration and authentication.
- **Customized Validation Filter**: Custom validation filter added.
- **Simple Configuration**: Minimal configuration required to get the project up and running.
- **Well-organized Structure**: Follows best practices to keep your codebase clean and maintainable.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**: Start by cloning this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/h-azad/Nest-Mongo-Boilerplate.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies:

   ```bash
   cd Nest-Mongo-Boilerplate
   npm install
   ```

3. **Configuration**: Rename the `.env.example` file to `.env` and modify the configuration settings (such as database connection details, JWT secret, etc.) according to your requirements.

4. **Run the Application**: Launch the development server using the following command:

   ```bash
   npm run start:dev
   ```

   The API should now be accessible at `http://localhost:3000`.

## Usage

This boilerplate provides two main API endpoints for user management:

- **Signup**: Register a new user by sending a `POST` request to `/auth/signup` with the necessary user information.
- **Login**: Authenticate a user by sending a `POST` request to `/auth/login` with their credentials. This will return a JSON Web Token (JWT) for accessing protected routes.

Customize and extend the functionality as needed to suit your project's requirements.