const Tech = require('../model/techsModel');


const getTechs = async (req, res) => {
    try {
        const techs = await Tech.find();
        res.status(200).json({
            sucess: true,
            count: techs.length,
            data: techs
        })
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            error: 'server error'
        })
    }
}

const addTechs = async (req, res) => {
    try {
        const newTech = await Tech.create(req.body);

        res.status(201).json({
            sucess: true,
            data: newTech
        })
    }

    catch (err) {
        res.status(500).json({
        sucess: false,
        error: 'server error'
    })
}
}

const deleteTechs = async (req, res) => {
    try {
        await Tech.findByIdAndDelete(req.params.id);
        res.status(200).json({
            sucess: true,
            data: {}
        })
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            error: 'server error'
        })
    }
}

module.exports = {
    getTechs,
    addTechs,
    deleteTechs
}