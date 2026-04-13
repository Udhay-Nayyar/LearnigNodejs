const e = require("express");
const express = require("express")
const app = express()
//curd operation                 


const menu = [
    { foodId: 1, foodName: "Margherita Pizza", foodType: "Veg", foodPrice: 250 },
    { foodId: 2, foodName: "Chicken Burger", foodType: "Non-Veg", foodPrice: 180 },
    { foodId: 3, foodName: "Pasta Alfredo", foodType: "Veg", foodPrice: 220 },
    { foodId: 4, foodName: "Grilled Chicken", foodType: "Non-Veg", foodPrice: 300 },
    { foodId: 5, foodName: "Paneer Tikka", foodType: "Veg", foodPrice: 200 },
    { foodId: 6, foodName: "Veg Biryani", foodType: "Veg", foodPrice: 210 },
    { foodId: 7, foodName: "Chicken Biryani", foodType: "Non-Veg", foodPrice: 260 },
    { foodId: 8, foodName: "Masala Dosa", foodType: "Veg", foodPrice: 120 },
    { foodId: 9, foodName: "Egg Roll", foodType: "Non-Veg", foodPrice: 90 },
    { foodId: 10, foodName: "Fried Rice", foodType: "Veg", foodPrice: 150 },
    { foodId: 11, foodName: "Fish Curry", foodType: "Non-Veg", foodPrice: 280 },
    { foodId: 12, foodName: "Chole Bhature", foodType: "Veg", foodPrice: 130 }
];

const cart = [

]

app.use(express.json())
// admin want to read the menu 
app.get("/admin", (req, res) => {
    res.status(200).send(menu)
})


//admin wants to add an item in the menu 
app.post("/admin", (req, res) => {
    console.log(req.body)
    menu.push({
        foodId: req.body.foodId, foodName: req.body.foodName,
        foodType: req.body.foodType, foodPrice: req.body.foodPrice
    })
    res.send("data has been uploaded sucessfully")
})


//admin want to delete an item 
app.delete("/admin/:id", (req, res) => {
    // console.log(req.params)
    const index = menu.findIndex(i => i.foodId == req.params.id);
    if (index != -1) menu.splice(index, 1);
    res.send("item removed sucessfully")
})



// user want to add in cart 

app.post("/user/:id", (req, res) => {
    const index = menu.findIndex(i => i.foodId == req.params.id);
    if (index != -1) {
        cart.push(menu[index])
    }

    res.send("Your cart " + cart)
})


//view cart 
app.get("/user", (req, res) => {
    res.status(200).send(cart)
})




//error handling 
app.get("/user",(req,res)=>{
      
})

// where to listen 
app.listen(8000, () => {
    console.log("i am running on port number 8000")
});