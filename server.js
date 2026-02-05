//Create HTTP server
//import express module
import exp from 'express'
//Create HTTP Server
const app=exp()//server is ready
//Assign port numbers 
app.listen(1818,()=>console.log('HTTP server listening to port 1818 ..'))

// body parser middleware
app.use(exp.json())//to parse json data from req body

//Create custom middleware
function middleware1(req,res,next){
    console.log('custom middleware executed');
    //send res
    // res.json({"message":"response from middleware1"})
    //forward the req to next middleware/req handler
    next();
}

//to execute for every incoming req
app.use(middleware1);




//Create USER API(req handlers - route)
//job of route is handling the requests and send response
let users=[];
    //get req handling route(read users)
    app.get('/users',(req,res)=>{
        //send response to client
        res.status(200).json({"message":"all users",payload:users})// ** mesaage,payload
    })
   
    //post req handling route(create user)
    app.post('/users',(req,res)=>{
        //get user obj from req body
        let newUser=req.body;
        users.push(newUser);
        res.status(201).json({"message":"User created"});
    })
    //put req handling route
    app.put('/users/id',(req,res)=>{
        // //send res
        // //get modified user obj from req body
        // let modifiedUser=req.body;
        // //find the user with id exists in array
        // let userIndex=users.findIndex(userObj=>userObj.id==modifiedUser.id);
        // // if user not found , then send res as "user not found"
        // if(userIndex==-1){
        //     res.status(404).json({"message":"User not found"});
        // }
        // //if user found, then modify the user details
        // let deletedUser=users.splice(userIndex,1,modifiedUser);
        // //send res as "User modified"
        // res.status(200).json({"message":"User modified"});
       
        // send res as "User modified"
        let id =req.body.id;
        let modifiedUser=req.body;
        console.log(req.body);
        let index=users.findIndex((user)=>user.id==id);
        if(index==-1){
            res.status(404).json({"message":"User not found"});
        }else{
            users[index]=modifiedUser;
            res.json({"message":"User modified"});
        }

    });

    //read user by id 
    app.get('/users/:id', (req, res) => {
    console.log(req.params);
    //read id from url params
    let userId = Number(req.params.id); //{ id : 100}
    // read user by this id
    let user = users.find((userObj) => userObj.id == userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    //send res
    res.status(200).json({ message: 'User found', payload: user });
    // res.json({ message: `Reading user with id ${userId}` });
})
    //delete req handling route (delete user)
    app.delete('/users/:id',(req,res)=>{
        let id =req.body.id;
        let index=users.findIndex((user)=>user.id==id);
        if(index==-1){
            res.status(404).json({"message":"User not found to delete"});
        }else{
            users.splice(index,1);
            res.json({"message":"User deleted successfully"});
        }
    })
    // delete req handling route (delete user)
// app.delete('/users/:id', (req, res) => {
//     // 1. Get the ID from URL parameters
//     let userId = Number(req.params.id);

//     // 2. Find the index of the user with that ID
//     let index = users.findIndex(userObj => userObj.id === userId);

//     // 3. If user not found, send 404
//     if (index === -1) {
//         res.status(404).json({ "message": "User not found to delete" });
//     } else {
//         // 4. Remove the user from the array
//         users.splice(index, 1);
//         // 5. Send success response
//         res.status(200).json({ "message": "User deleted successfully" });
//     }
// });