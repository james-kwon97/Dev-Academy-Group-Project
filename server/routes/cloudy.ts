import express from 'express'
import { Welcome } from '../../models/welcome.ts'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()

// GET /api/v1/cloudy/

router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Welcome to external APIs!' } as Welcome)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

// Get route for weather API

// GET /api/v1/cloudy/weather
router.get(`/weather/:city`, async (req, res) => {
  try {
    const city = req.params.city
    const response = await request
      .get(`https://api.api-ninjas.com/v1/weather?city=${city}`)
      .set({ 'X-Api-Key': process.env.X_API_Key })
    res.json(response.body)
    console.log(city)
  } catch (error) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

export default router
