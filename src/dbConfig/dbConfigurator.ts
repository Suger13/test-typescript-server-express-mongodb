//======================PostgreSQL====================
// import { Pool } from 'pg'
// export default new Pool({
//     max: 20,
//     connectionString : process.env.URI || undefined,
//     idleTimeoutMillis : 30000
// })


//======================MongoDB====================
// import { MongoClient } from 'mongodb'
// import dotenv from 'dotenv'
// dotenv.config()

// //insert URI in .env first
// const client = new MongoClient(`${process.env.URI}`)
// //select Database
// const db = client.db('test')
// export { client, db }