const pool = require("../config/ConectBD");

exports.getTest = (req, res) => {
    try {
        res.send("Servidor Express Funcional");
    } catch (error) {
        console.error(error);
    }
}

exports.getTestById = (req, res) => {
    const ID = req.params.id;
    const num = req.params.num;

    console.log(ID, num);

    res.json({ ID, num })
}

exports.createTest = (req, res) => {
    const values = Object.values(req.body)

    const valu = req.body.valor;

    const valus = req.body.pruebas;

    console.log(valu, valus);

    res.json(valu)
}

exports.updateTestById = (req, res) => {
    const values = Object.values(req.body);
    const ID = req.params.id;
}

exports.deleteTestById = (req, res) => {
    const ID = req.params.id;
}
