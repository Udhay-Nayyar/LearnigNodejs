const mongoose = require("mongoose")


// connecting data base 
async function main(){
    await mongoose.connect('mongodb+srv://UDROCKS:BattleGroundMobileIndia8775@pehlacluster.yito7mj.mongodb.net/BookStore');
}


// main().then(()=>{
//     console.log("Database have been connected sucessfully")
// }).catch( error =>{
//     console.log("Not connceted sucessfully")
// })

module.exports = {main} ;