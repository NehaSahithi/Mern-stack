import exp from 'express';
export const productApp=exp.Router();
let products=[];
//get req handling route (read all products)
productApp.get('/products',(req,res)=>{
    res.status(200).send({message:'List of Products',payload:products});
 })
//post req handling route(create product)
productApp.post('/products',(req,res)=>{ })
//put req handling route
productApp.put('/products/:id',(req,res)=>{ })
//read product by id
productApp.get('/products/:id', (req, res) => { })
//read products by brand
productApp.get('/products/brand/:brandName', (req, res) => { });
//delete req handling route (delete product)
productApp.delete('/products/:id',(req,res)=>{ })