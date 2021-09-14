import express from 'express'

const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!')
})

function listen(port: number) {
  app
    .listen(port, () => {
      console.log(`Server running on port ${port}.`)
    })
    .on('error', e => {
      if (e.name === 'EADDRINUSE') {
        console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`)
        listen(port + 1)
      } else {
        console.log(e)
      }
      console.error(e)
    })
}

listen(port)
