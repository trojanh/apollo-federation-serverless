import Mongoose from 'mongoose'

const postSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default Mongoose.model('Post', postSchema)
