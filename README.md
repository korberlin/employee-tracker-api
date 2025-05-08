# Employee Tracker API

A simple REST API for managing employee data built with Node.js, Express, TypeScript, and PostgreSQL. This project demonstrates core backend development skills including RESTful API design, database integration, and API documentation.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Typed JavaScript
- **PostgreSQL** - Relational database
- **Sequelize v7** - ORM with TypeScript decorators
- **Swagger/OpenAPI** - API documentation

## Features

- Complete CRUD operations for employee records
- PostgreSQL database integration
- TypeScript type safety
- Model validation
- Error handling
- Interactive API documentation

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- pgAdmin 4 (recommended for database management)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/korberlin/employee-tracker-api
   cd employee-tracker-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables (create a `.env` file in the root directory)
   ```
   PORT=3000
   POSTGRES_HOST=localhost
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=your_password
   POSTGRES_DB=employee_db
   POSTGRES_PORT=5432
   ```

4. Run the application
   ```
   npm run dev
   ```

5. Access the API documentation at `http://localhost:3000/api-docs`

## Database Structure

The application uses a single `employees` table with the following structure:

| Field        | Type           | Description                       |
|--------------|----------------|-----------------------------------|
| id           | INTEGER (PK)   | Auto-incrementing primary key     |
| name         | STRING(100)    | Employee name                     |
| phone        | STRING(20)     | Contact phone number              |
| email        | STRING(100)    | Email address (unique, validated) |
| salary       | DECIMAL(10,2)  | Employee's salary                 |
| monthlySales | DECIMAL(12,2)  | Monthly sales performance         |
| createdAt    | DATE           | Record creation timestamp         |
| updatedAt    | DATE           | Record update timestamp           |

## API Endpoints

All endpoints are prefixed with `/api/v1`

| Method | Endpoint    | Description               | Request Body                                      | Success Response                              |
|--------|-------------|---------------------------|---------------------------------------------------|-----------------------------------------------|
| GET    | /           | Get all employees         | -                                                 | 200 OK - List of all employees                |
| GET    | /:id        | Get employee by ID        | -                                                 | 200 OK - Single employee details              |
| POST   | /           | Create a new employee     | name, phone, email, salary, monthlySales          | 201 Created - New employee with ID            |
| PUT    | /:id        | Update an employee        | name?, phone?, email?, salary?, monthlySales?     | 200 OK - Success message                      |
| DELETE | /:id        | Delete an employee        | -                                                 | 200 OK - Success message                      |

> Note: Fields with ? are optional in PUT requests

## Project Structure

```
src/
├── config/
│   └── database.ts        # Database connection configuration
├── models/
│   └── employee.ts        # Employee model definition
├── controllers/
│   └── apiController.ts   # Controller with CRUD methods
├── routes/
│   └── apiRoutes.ts       # API route definitions
├── swagger.ts             # Swagger configuration
├── app.ts                 # Express app setup
└── index.ts               # Application entry point
```

## Error Handling

The API implements consistent error responses:
- 400 Bad Request - Invalid input or business rule violation
- 404 Not Found - Resource not found
- 500 Internal Server Error - Server-side errors

All error responses follow the format:
```json
{
  "error": "Error message description"
}
```

## Documentation

API documentation is available via Swagger UI at `/api-docs` when the server is running. This provides an interactive interface to explore and test all endpoints.

## Future Improvements

Potential enhancements for this project:
- User authentication and authorization
- Additional filtering, sorting, and pagination
- Input sanitization and validation
- Testing with Jest
- Environment-specific configurations
- Deployment instructions

## License

MIT

---

This project was created as a portfolio piece to demonstrate backend development skills with Node.js, TypeScript, and PostgreSQL.