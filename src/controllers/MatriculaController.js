const Matricula = require('../models/Matricula')

class MatriculaController {

    async cadastrar(req, res) {
        const curso_id = req.body.curso_id
        const aluno_id = req.body.aluno_id

        const matricula = await Matricula.create({
            curso_id: curso_id,
            aluno_id: aluno_id
        })

        res.status(201).json(matricula)
    }
}

module.exports = new MatriculaController()