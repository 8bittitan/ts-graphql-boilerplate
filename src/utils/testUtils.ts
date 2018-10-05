require('ts-node/register')

const { startServer } = require('../app')

module.exports = async () => {
  if (!process.env.TEST_URL) {
    const data = await startServer()

    process.env.TEST_URL = data.address
  }

  return null
}
