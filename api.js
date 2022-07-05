const http=require("http");

const app=express();

const port=4000;

// get is used to get the data; using CRUD OPERATIONS

app.get("/",(req,res)=>{
    // in api we dont send the res file.we only send the Json file

})

// POST is used to read the form data in the html and save the data 
app.post("/",(req,res)=>{

})

app.listen(port,()=>{

})

// basically json is nothing but a object .but in the object another group of objects includes arrays ,etc is called json

