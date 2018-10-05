import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    required: [true, 'An email is required.'],
    type: String,
    unique: true,
  },
  username: {
    required: [true, 'A username is required.'],
    type: String,
    unique: true,
  },
})

const User = mongoose.model('User', UserSchema)

export default User
