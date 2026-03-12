# Ecommerce Backend

Node.js/Express API server for ecommerce app.

## Features

- Products CRUD (/api/products)
- Auth (/api/auth)
- Cart (/api/cart)
- Contact form (/api/contact)

## Tech

- Express
- CORS
- Mongoose (MongoDB ready)
- JWT auth
- bcrypt
- dotenv

## Setup

1. cd ecommerce-backend
2. npm install
3. Copy .env.example to .env, set DB_URI/JWT_SECRET if needed.
4. npm start (or npm run dev with nodemon)

Server: http://localhost:5000

Test: curl http://localhost:5000/

## API Endpoints

- GET /api/products - List products
- GET /api/products/:id - Product details
- POST /api/products - Add (body: name, price)
- PUT /api/products/:id - Update
- DELETE /api/products/:id

See routes/ for more.
