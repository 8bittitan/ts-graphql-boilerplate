import { join } from 'path'
import * as glob from 'glob'
import { Model, Document } from 'mongoose'

const getModels = () => {
  const pathToModules = join(__dirname, '..', 'modules')
  const paths = glob.sync(`${pathToModules}/user/model.?s`)

  return paths.reduce((models, modelPath) => {
    const model: Model<Document> = require(modelPath).default

    return {
      [model.modelName]: model,
      ...models,
    }
  }, {})
}

export default getModels
