import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'

import { MONGO_URL, NODE_ENV } from './config'
import { connect } from './db'
import { resolvers, typeDefs } from './graphql'
import getModels from './db/getModels'

const startServer = async () => {
  try {
    let DB_URL = MONGO_URL

    if (NODE_ENV === 'test') {
      DB_URL = 'mongodb://localhost:27017/boilerplate-test'
    }

    await connect(DB_URL)
    const models = getModels()
    const app = express()

    const server = new ApolloServer({
      context: {
        models,
      },
      resolvers,
      typeDefs,
    })

    server.applyMiddleware({ app, path: '/' })

    await app.listen(4000)
    console.log('Listing at http://localhost:4000')
    return {
      address: 'http://localhost:4000',
    }
  } catch (err) {
    console.log('SYSTEM ERROR')
    console.log(err)
    process.exit(1)
  }
}

export { startServer }
