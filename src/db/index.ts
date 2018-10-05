import * as mongoose from 'mongoose'

export const connect = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(
      url,
      { useNewUrlParser: false },
    )

    return
  } catch (err) {
    throw new Error(err)
  }
}
