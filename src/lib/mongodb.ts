import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI!
const dbName = process.env.MONGODB_DB!

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable')
}

export async function connectToDatabase(): Promise<{ db: Db }> {
  if (cachedDb) {
    return { db: cachedDb }
  }

  if (!cachedClient) {
    cachedClient = await MongoClient.connect(uri)
  }

  cachedDb = cachedClient.db(dbName)
  return { db: cachedDb }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default cachedClient