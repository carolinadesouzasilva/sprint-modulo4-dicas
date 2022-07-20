import dataBase from "../infra/dicaDatabase.js";

class MetodoDica {
    guardaDica(dica) {
        const armazana = dataBase.push(dica)
        return dataBase
    }
    aleatoriaDica() {
        const randomDica = dataBase[Math.floor(Math.random() * dataBase.length)]
        return randomDica
    }
}
export default new MetodoDica;

