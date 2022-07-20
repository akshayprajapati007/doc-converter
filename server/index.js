import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import docToPdfRouter from './routes/doctopdf.router.js'
import { DOC_TO_PDF_ROUTE } from './utils/constants/index.js'

const app = express()

/* app.use(bodyParser.json({ limit: "50mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })) */
app.use(cors())

app.use(DOC_TO_PDF_ROUTE, docToPdfRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT)