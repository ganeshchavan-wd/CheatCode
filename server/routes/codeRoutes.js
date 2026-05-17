import express from 'express'
import Code from '../models/Code.js'

const router = express.Router()

// Get all codes
router.get('/', async (req, res) => {
  try {
    const codes = await Code.find()
    res.json(codes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add code
router.post('/', async (req, res) => {
  try {
    const { question, subject, code } = req.body

    const newCode = new Code({
      question,
      subject,
      code
    })

    const savedCode = await newCode.save()
    res.status(201).json(savedCode)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get single code
router.get('/:id', async (req, res) => {
  try {
    const code = await Code.findById(req.params.id)
    res.json(code)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update code
router.put('/:id', async (req, res) => {
  try {
    const updatedCode = await Code.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(updatedCode)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Delete code
router.delete('/:id', async (req, res) => {
  try {
    await Code.findByIdAndDelete(req.params.id)
    res.json({ message: 'Code deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router