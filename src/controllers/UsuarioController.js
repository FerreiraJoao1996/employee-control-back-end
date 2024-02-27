const Usuario = require("../models/Usuario"); 
const moment = require('moment');

class UsuarioController {
    async index(req, res, next){
        try {
            const usuarios = await Usuario.findAll({});
            res.json(usuarios);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const data = req.body;
            data.dataNascimento = moment(data.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
            const usuario = await Usuario.create(data);
            return res.json(usuario);
        } catch(e){
            next(e);
            return res.status(400).json(e);
        }
    }

    async show(req,res){
        try{
            const { id } =  req.params;
            console.log(id)
            if(!id) return res.status(400).json('ID inválido')

            const usuario = await Usuario.findByPk(id, {});

            if(!usuario) return res.status(400).json('Usuário não encontrado!')

            return res.json(usuario)
        }catch(e){
            return res.json(e)
        }
    }

    async update(req,res){
        try{
            const { id } =  req.params;
            
            if(!id) return res.status(400).json('ID inválido')

            const usuario = await Usuario.findByPk(id);
            console.log(usuario)
            if(!usuario) return res.status(400).json('Usuário não encontrado!')

            const novousuario = await usuario.update(req.body, {where: { id: id }});

            return res.json(novousuario)
        }catch(e){
            return res.json(e)
        }
    }

    async delete(req,res){
        try{
            const { id } =  req.params;

            if(!id) return res.status(400).json('ID inválido')

            const usuario = await Usuario.findByPk(id);

            if(!usuario) return res.status(400).json('Usuário não encontrado!')

            await Usuario.destroy({where: { id: id }});

            return res.json('Usuário deletado com sucesso!')
        }catch(e){
            return res.json(e)
        }
    }
}

module.exports = UsuarioController;
