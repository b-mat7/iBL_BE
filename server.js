"use strict"

import express from 'express'
import 'dotenv/config'

const server = express()
const PORT = process.env.PORT

server.use(express.json())
server.use((req, res, next) => {
  console.log(req.method, req.url, req.body)
  console.log(res.method, res.url, res.body)
  console.log("===== MW END =====")
  next()
})

server.listen(PORT, ()=> console.log(`Running on ${PORT}`))