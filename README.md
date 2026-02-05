### Steps to create backend
1.Generate package.json
npm init -y
2.create HTTP Server
 a.install and import "express" module
      npm install express
b.import express module



HTTP REQ TYPES (CRUD operations)
GET--read resourses
GET--read resourses by id 
POST--create a new resource
PUT--update a resource
DELETE-delete a resource

->for any server running locally the ip address is http://127.0.0.1:1818
USER API
//makes the requests
    GET http://127.0.0.1:1818/users
    POST http://127.0.0.1:1818/user
    PUT http://127.0.0.1:1818/users/</id>
    DELETE http://127.0.0.1:1818/users/</id>
->domain name is http://localhost:1818

### Create ProductsAPI in the same file 
    description of products obj:
        {
            productID,
            name,
            price,
            brand
        }
Product API:
    GET http://127.0.0.1:1818/products
    GET http://127.0.0.1:1818/products/<id>
    GET http://127.0.0.1:1818/products/<brand>
    POST http://127.0.0.1:1818/products/
    PUT http://127.0.0.1:1818/products/<id>
    DELETE http://127.0.0.1:1818/products/<id>