import mongoose from 'mongoose'

const codeSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Code', codeSchema)