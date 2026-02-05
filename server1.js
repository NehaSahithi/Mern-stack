//Create http server
import exp from 'express'
import { userApp } from './API/UserAPI.js'
import { productApp } from './API/ProductAPI.js'
const app=exp()//server is ready
app.use(exp.json())//to parse json data from req body
app.use('/user-api',userApp)//mount userApp on /user-api path
app.use('/product-api',productApp)//mount productApp on /product-api path

app.listen(1818,()=>console.log('HTTP server listening to port 1818 ..'))