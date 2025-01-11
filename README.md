# MongoDB BREADS Operations App

A web application demonstrating BREADS (Browse, Read, Edit, Add, Delete, Sort) operations using MongoDB, Express.js, and EJS templating.

## Features

### User Management
- Browse users with pagination
- Add new users with name and phone
- Edit existing user details
- Delete users
- Sort by name or phone number
- Search users by name or phone

### Todo Management
- Browse todos for each user
- Add new todos with title and deadline
- Edit todo details including completion status
- Delete todos
- Sort by deadline
- Filter by completion status
- Search todos by title

## Technologies Used

### Backend:
- Express.js - Web framework
- MongoDB - Database
- EJS - Templating engine

### Frontend:
- Bootstrap 5.3.3 - UI framework
- jQuery 3.7.1 - JavaScript library
- Font Awesome 6.5.2 - Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running locally on port 27017

3. Start the development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser

## API Endpoints

### Users
- `GET /users` - Get users list with pagination and filters
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Todos
- `GET /todos` - Get todos list with pagination and filters
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Update todo
- `DELETE /todos/:id` - Delete todo
