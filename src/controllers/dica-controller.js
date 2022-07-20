import dataBase from "../infra/dicaDatabase.js"
import dicaModels from "../models/dicas-models.js"
import MetodoDica from "../service/metodo-service.js"

class DicaController {

    rotas(app) {
        app.get('/', (req, res) => {
          const response = MetodoDica.aleatoriaDica()
          res.status(200).json(response) 
        })
        app.post('/', (req, res) => {
            const dicaNova = new dicaModels(req.body[0])
            const response = MetodoDica.guardaDica(dicaNova)
            res.status(200).json(response)
        })
    }
}
export default new DicaController