import express from 'express'
import { docToPdfController } from './doctopdf.controller.js'

const docToPdfrouter = express.Router()

docToPdfrouter.post('/', docToPdfController)

export default docToPdfrouter