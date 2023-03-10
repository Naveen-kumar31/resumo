const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const DataModel = require("./model/Data");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://NaveenKumar:Naveen123@ac-9aql497-shard-00-00.cc5ii0y.mongodb.net:27017,ac-9aql497-shard-00-01.cc5ii0y.mongodb.net:27017,ac-9aql497-shard-00-02.cc5ii0y.mongodb.net:27017/?ssl=true&replicaSet=atlas-g2ueyg-shard-0&authSource=admin&retryWrites=true&w=majority",
 {
   useNewUrlParser: true,
},
console.log("Connected"));

app.post("/insert", async (req, res) => {
  const regnum = req.body.regnum
  const dept = req.body.dept
  const role = req.body.role
  const data = new DataModel({
    regnum: regnum,
    dept: dept,
    role: role,
   
  });
try{
  await data.save();


} catch(err) {
  console.log(err);
}

});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});