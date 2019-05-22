import express from 'express'

{
  const app = express() // app は Express 型

  app.get('/', (req, res) => {
    res.send('Hello World') // res は Response 型
  })
  app.listen(3000)
}
