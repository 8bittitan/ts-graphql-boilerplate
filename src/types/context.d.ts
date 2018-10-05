import { Document, Model } from 'mongoose'

export interface Context {
  models: {
    User: Model<Document>
  }
}
