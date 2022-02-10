# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

### Endpoints requirements
#### Products 
- Index 
- Show (args: product id)
- Create (args: Product)[token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show (args: id)[token required]
- Create (args: User)[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## API Endpoints 

e.g authorization header for endpoints that require token
```json
{ "Authorization": "Bearer <long-user-token>" }
```

### Products Endpoints
* Index of all products

```sh
GET /products
```

* Show details for product (id: 1)

```sh
GET /products/1
```

* Create new product (token required)

```sh
POST /products/add
```
e.g req.body json

```json
{ 
    "name": "Turkish Delight Deluxe",
    "price": "85",
    "category": "Sweet Treats" 
}
```

* Show products in a category (e.g. category 'Fine Dining')

```sh
GET /products/cat/:category_name
```

* Show top 5 most popular products

```sh
GET /products/dashboard
```

### Users Endpoints
* Index of all users (token required)

```sh
GET /users
```

* Show user (id: 1) details (token required)

```sh
GET /users/1
```

* Create new user

```sh
POST /users
```

e.g req.body json

```json
{ 
    "firstname": "Jane",
    "lastname": "Doe",
    "username": "JaneDoe",
    "password": "mysercret123",
    "email": "a@a.com"
}
```

### Orders Endpoints
* Index of all orders (token required)

```sh
GET /orders
```
* Show order (id: 1) details (token required)

```sh
GET /orders/1
```

* Create new order (token required)

```sh
POST /orders
```
e.g req.body json 

```json
{ 
    "user_id": "1",
    "status": "open"
}
```

* user complete order (token required)

```sh
POST /orders/:id/close
```

* Show completed orders for user (token required)

```sh
GET /orders/closed
```

* Add items to the user's order (token required)

```sh
POST /orders/:id/product
```

e.g req.body json 

```json
{ 
    "product_id": "1",
    "quantity": "20",
}
```

* Remove items to the user's order (token required)

```sh
DELETE /orders/:id/product
```

e.g req.body json 

```json
{ 
    "product_id": "1",
}
```

## Database Tables and Schemas

### Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (open or closed)

## *products* Table
| Column   | Data Type          |
| -------- | -----------        |
| id       | PRIMARY SERIAL KEY |
| name     | VARCHAR(100)       |
| price    | INTEGER            |
| category | VARCHAR(150)       |

## *users* Table
| Column          | Data Type           |
| -----------     | ------------------  |
| id              | PRIMARY SERIAL KEY  |
| first_name      |  VARCHAR(100)       |
| last_name       | VARCHAR(100)        |
| username        | VARCHAR(100)        |
| email           | VARCHAR(100)        |
| password        | VARCHAR(255)        |

## *orders* Table
| Column   | Data Type      |
| ---------| -----------    |
| id       | PRIMARY SERIAL KEY
| user_id  | integer REFERENCES users(id) 
| status   | VARCHAR(20)

## *order_products* Table
| Column      | Data Type      |
| ----------- | -----------    |
| id          | PRIMARY SERIAL KEY
| quantity    | integer
| product_id  | integer REFERENCES products(id) 
| order_id    | integer REFERENCES orders(id) 
