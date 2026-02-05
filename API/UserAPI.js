import exp from 'express';
//create mini -exprres(seperate router instance) app
export const userApp=exp.Router();
let users=[];
//get req handling route (read all users)
userApp.get('/users',(req,res)=>{ })
//post req handling route(create user)
userApp.post('/users',(req,res)=>{ })
//put req handling route
userApp.put('/users/:id',(req,res)=>{ })
//read user by id
userApp.get('/users/:id', (req, res) => { })
//delete req handling route (delete user)
userApp.delete('/users/:id',(req,res)=>{ })