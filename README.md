# Back-End E-commerce Database

## Introduction
This project serves to showcase the use of sequelize to create SQL tables and store them as models, and to facilitate the viewing and modification of these tables through server requests. It contains an SQL database that hosts information about the website's products, as well as the categories each product belongs to and various tags that can be associated with multiple products. These values are stored as JavaScript models using sequelize, so that they can be easily accessed and modified via back-end API requests.

While using this project, the user should be able to view, add, modify and delete products, product categories, and the tags associated with products.

## Installations
This project requires the use of SQL servers, as well as the mysql2, sequelize, express, and dotenv npm packages. Because it solely contains back-end requests, you will also need a REST API client, such as Insomnia or Postman, to make API requests.

To enable to creation and use of SQL servers on your computer, follow these instructions: https://www.dnnsoftware.com/docs/developers/setup/set-up-sql.html

After ensuring SQL is installed, you can install the necessary npm packages in any order. Clone this repository into your own computer and navigate to the terminal of server.js. Install mysql2 by typing in "npm install mysql2" into the terminal. Install sequelize by typing in "npm install sequelize". Install express by typing in "npm install express". Install dotenv by typing in "npm install dotenv". After everything is installed, type "npm i" into the terminal to initialize the installations.

## Usage
Before running the server, you must connect your SQL database to your JavaScript API routes. First, create a ".env" file in the root of the directory by copying the contents of the ".env.EXAMPLE" file and replace DB.USER with your own user identity, and DB.PW with your own SQL password. 

Once you've established this connection, source the sql database by navigating to the "db" folder's terminal and typing in "mysql -u root -p". Follow with your SQL password, and then type "source schema.sql" into the terminal. Once your sourcing is confirmed, terminate the connection by typing "quit". You may now navigate to the terminal of server.js and begin server operations.

Start the server by typing "npm start" into the terminal. Then navigate to your preferred REST API client, and implement your desired requests as follows, keeping in mind to replace {product_id} with your intended product ID, {category_id} with your intended category ID, and {tag_id} with your intended tag ID:

**Product Requests:**

1. Get all products: 
    Method: GET
    URL: http://localhost:3001/api/products

2. GET a single product by ID:
    Method: GET
    URL: http://localhost:3001/api/products/{product_id}

3. POST (create) a new product:
    Method: POST
    URL: http://localhost:3001/api/products
    Request body: JSON object representing the new product (e.g., { "product_name": "Hiking Boots", "price": 49.99, "stock": 10, "category_id": 5 })

4. PUT (update) an existing product by ID:
    Method: PUT
    URL: http://localhost:3001/api/products/{product_id}
    Request body: JSON object containing the updated product data (e.g., { "product_name": "Updated Product", "price": 59.99, "stock": 15 })

5. DELETE a product by ID:
    Method: DELETE
    URL: http://localhost:3001/api/products/{product_id}


**Category Requests:**

1. GET all categories:
    Method: GET
    URL: http://localhost:3001/api/categories

2. GET a single category by ID:
    Method: GET
    URL: http://localhost:3001/api/categories/{category_id}

3. POST (create) a new category:
    Method: POST
    URL: http://localhost:3001/api/categories
    Request body: JSON object representing the new category (e.g., { "category_name": "Pants" })

4. PUT (update) an existing category by ID:
    Method: PUT
    URL: http://localhost:3001/api/categories/{category_id}
    Request body: JSON object containing the updated category data (e.g., { "category_name": "Suits" })

5. DELETE a category by ID:
    Method: DELETE
    URL: http://localhost:3001/api/categories/{category_id}

**Tag API Requests:**

1. GET all tags:
    Method: GET
    URL: http://localhost:3001/api/tags

2. GET a single tag by ID:
    Method: GET
    URL: http://localhost:3001/api/tags/{tag_id}

3. POST (create) a new tag:
    Method: POST
    URL: http://localhost:3001/api/tags
    Request body: JSON object representing the new tag (e.g., { "tag_name": "On Sale" })

4. PUT (update) an existing tag by ID:
    Method: PUT
    URL: http://localhost:3001/api/tags/{tag_id}
    Request body: JSON object containing the updated tag data (e.g., { "tag_name": "Yellow" })

5. DELETE a tag by ID:
    Method: DELETE
    URL: http://localhost:3001/api/tags/{tag_id}

## Credits
The starter code for this project was cloned from this repository: https://github.com/coding-boot-camp/fantastic-umbrella

Tag-Product associations were created using this tutorial: https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany

