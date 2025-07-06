import { Hono } from 'hono'

import { ANOTHERVAR } from "db"

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello Hono!, ${ANOTHERVAR}`)
})

export default app
