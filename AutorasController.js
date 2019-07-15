require('dotenv-safe').load()
const { connect } = require('./AutorasRepository')
const autorasModel = require('./AutorasSchema')
const { livrosModel } = require('./LivrosSchema')

connect()

const getAll = () => {
    return autorasModel.find((error, autoras) => {
      if (error) {
        console.error(error)
      }
      return autoras
    })
  }

  const add = (model) => {
    const novaAutora = new autorasModel(model)
    return novaAutora.save()
  }

  

  module.exports = {
      getAll,
      add
  }