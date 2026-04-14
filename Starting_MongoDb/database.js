const url = 'mongosh "mongodb+srv://pehlacluster.yito7mj.mongodb.net/" --apiVersion 1 --username UDROCKS --password BattleGroundMobileIndia8775'

//mongodb+srv://UDROCKS:BattleGroundMobileIndia8775@pehlacluster.yito7mj.mongodb.net/


const { MongoClient } = require('mongodb');
// @ == %40

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://UDROCKS:BattleGroundMobileIndia8775@pehlacluster.yito7mj.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    const database = client.db('FirstHai');
    const collection = database.collection('user');

    // // Queries for a movie that has a title value of 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);
    // console.log(movie);

    // insert an document 
    // const res = await collection.insertOne({
    //   "name" : "Udhay",
    //   "age" : 20,
    //   "address" : "Punjab"
    //  })

    //  console.log("record has  been inserted")


    //reading from the collection 
    // const data = await collection.find().toArray(); // this is very dangarous method because this toArray() method
    //loads every thing at once so if the size is bigger of the data base and loading that at once would make it BAD
    // so instead you use find() method as it the pointer to  iterate over that collection 
    
    console.log(data)

  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);


// 1. TCP Connect ✓ (successful)
// 2. Atlas checks IP whitelist → FAILS (your IP not allowed)
// 3. Atlas intentionally fails SSL handshake with "internal error" 
// 4. Your client receives SSL error instead of "access denied"

// ✅ Correct: IP address in whitelist = Can connect
// ❌ Incorrect: IP not in whitelist = SSL/internal error