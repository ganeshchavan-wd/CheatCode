import express from 'express'
import Code from '../models/Code.js'

const router = express.Router()

// GET all codes
router.get('/', async (req, res) => {
  try {
    const codes = await Code.find()
    res.json(codes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST code
router.post('/', async (req, res) => {
  try {
    const newCode = new Code(req.body)
    const savedCode = await newCode.save()
    res.status(201).json(savedCode)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
