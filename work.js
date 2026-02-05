/*### Create ProductsAPI in the same file 
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
    DELETE http://127.0.0.1:1818/products/<id>*/
import exp from 'express'
//Create HTTP Server
const app=exp()//server is ready    
//Assign port numbers 
app.listen(1818,()=>console.log('HTTP server listening to port 1818 ..'))   
//body parser middleware
app.use(exp.json())//to parse json data from req body

let products=[];
    //get req handling route(read products)
    app.get('/products',(req,res)=>{
        //send response to client
        res.status(200).json({"message":"all products",payload:products})// ** mesaage,payload
    })
    //get req handling route(read product by id)
    app.get('/products/:id',(req,res)=>{
        let id =req.params.id;
        //find the product with id exists in array
        let product=products.find(productObj=>productObj.productID==id);
        // if product not found , then send res as "product not found"
        if(!product){
            res.status(404).json({"message":"Product not found"});
        }
        //if product found, then send the product details
        res.status(200).json({"message":"Product found",payload:product});
    })
    //get req handling route(read products by brand)
    app.get('/products/brand/:brand',(req,res)=>{
        let brand =req.params.brand;
        //find the products with brand exists in array
        let brandedProducts=products.filter(productObj=>productObj.brand.toLowerCase()==brand.toLowerCase());
        // if no products found , then send res as "no products found for this brand"
        if(brandedProducts.length==0){
            res.status(404).json({"message":"No products found for this brand"});
        }
        //if products found, then send the product details
        res.status(200).json({"message":"Products found for brand "+brand,payload:brandedProducts});
    })
    //post req handling route(create product)
    app.post('/products',(req,res)=>{
        //get product obj from req body
        let newProduct=req.body;
        products.push(newProduct);
        res.status(201).json({"message":"Product created"});
    })
    //put req handling route
    app.put('/products/:id',(req,res)=>{
        let id =req.params.id;
        let modifiedProduct=req.body;
        console.log(req.body);
        //find the product with id exists in array
        let productIndex=products.findIndex(productObj=>productObj.productID==id);
        // if product not found , then send res as "product not found"
        if(productIndex==-1){
            res.status(404).json({"message":"Product not found"});
        }
        //if product found, then modify the product details
        let deletedProduct=products.splice(productIndex,1,modifiedProduct);
        //send res as "Product modified"
        res.status(200).json({"message":"Product modified"});
    })
    //delete req handling route
    app.delete('/products/:id',(req,res)=>{
        let id =req.params.id;
        //find the product with id exists in array
        let productIndex=products.findIndex(productObj=>productObj.productID==id);
        // if product not found , then send res as "product not found"
        if(productIndex==-1){
            res.status(404).json({"message":"Product not found"});
        }
        //if product found, then delete the product details
        let deletedProduct=products.splice(productIndex,1);
        //send res as "Product deleted"
        res.status(200).json({"message":"Product deleted",deletedProduct:deletedProduct});
    })