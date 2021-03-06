import Mongoose from 'mongoose'

const userSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default Mongoose.model('User', userSchema)
