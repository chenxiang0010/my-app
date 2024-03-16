import { Hono } from 'https://deno.land/x/hono@v4.1.0/mod.ts'

console.log(
  'Deployed at',
  new Date(Deno.env.get('DEPLOYMENT_TS')).toLocaleString()
)

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

Deno.serve(app.fetch)