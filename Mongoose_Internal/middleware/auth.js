const { main } = require("../database.js");
const express = require("express");
const model = require("../models/model.js")
const app = express();

main().then(() => {
    console.log("DB is connected successfully");

    app.listen(5000, () => {
        console.log("Yes we are listening at port no 5000");
    });

    
    //reading the data from the backend 
    // async function  insertARecord(obj) {
    //     await model.create(obj);
    // }

    // const obj1 = {
    //     Name : "Avinash Kumar",
    //     age : 21,
    //     city : "Banaras",
    //     gender : "Male"
    // }

    // const obj2 = {
    //     age : 22,
    //     city : "Chandigarh",
    //     gender : "Male"
    // }
    // insertARecord(obj)


    // update the document 
    // async function Updating(init,end) {
    //     await model.updateOne(init,end);
    //     console.log("data have been updated")
    // }

    // Updating(obj1,obj2);




    // deleting a document 
    async function Deleting(){
        await model.deleteOne({Name : "udhay"});
    }

    Deleting();
}).catch(err => {
    console.log(err);
});
