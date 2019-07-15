const controller = require('./AutorasController')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const PORT = 6054
const logger = (request, response, next) => {
    console.log(`${new Date().toISOString()} Request type: ${request.method} to ${request.originalUrl}`)
  
    response.on('finish', () => {
      console.log(`${response.statusCode} ${response.statusMessage};`)
    })

    next()
}

servidor.use(cors())
servidor.use(logger)
servidor.use(bodyParser.json())


////////// ROTAS AUTORAS ///////////////

servidor.get('/', (request, response) => {
    response.send('oi')
  })

servidor.get('/autoras', (request, response) => {
    controller.getAll()
      .then(autoras => {
          response.send(autoras)
        })
        .catch(error => {
            response.send(error)
        })
  })

  servidor.post('/autoras', (request, response) => {
      console.log(request.body)
    controller.add(request.body)
    .then(autora => {
      const _id = autora._id
      response.send(_id)
    }).catch(error => {
        console.log(error)
    })
  })


servidor.listen(PORT)
  console.info("AUTORAS rodando na porta 6054 ")

