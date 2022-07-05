const express=require("express");

const app=express();

const port=4000;

const bodyparser=require("body-parser");
// function to use body parser
app.use(bodyparser.urlencoded({extended:false}))

// step 8.we will use a function that we will run the json file;
app.use(express.json());

// step 9 now in the body in thunder client enter the data 

// get is used to get the data; using CRUD OPERATIONS

app.get("/api/v1/user",(req,res)=>{
    // in api we dont send the file.we only send the Json file
    res.json({
        name:"harsh",
        email:"sample@gmail.com",
        password:"hexamed"

    })
})

// POST is used to read the form data in the html and save the data 
app.post("/api/v1/register",(req,res)=>{
    // step 6.we will declare the the variable in the mongb itself only but we will use the function
    const username=req.body.name
    const useremail=req.body.email
    const userpassword=req.body.password

    res.json({
        success:true,
        name:username,
        email:useremail,
        password:userpassword,
        // step 7.it will not be opened in the browser because browser by default gave the get method so use thunder client,postman,to get the server

    })
    // step 3. we dont have connect database right now what's why we send anything but we can response
    // step 4. for post data we should not always use html form for running the api so for that we need and again we will use body

})

app.listen(port,()=>{
    console.log(`congrulation on hosting an app http://localhost:${port}`)

})

// basically json is nothing but a object .but in the object another group of objects includes arrays ,etc is called json

