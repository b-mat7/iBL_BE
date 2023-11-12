"use strict"

import express from 'express'
import 'dotenv/config'

/*
import {clubs} from "./xToSort/clubs.js"
import {createSchedule} from "./xToSort/schedule.js"
import {matchCalc} from "./xToSort/matchDay.js"
import {seasonTable} from "./xToSort/table.js"

// console.log(createSchedule(clubs))
// let result = matchCalc(clubs[0], clubs[1])
console.log(seasonTable(clubs))
*/

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