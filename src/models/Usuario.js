const {Sequelize} = require('sequelize');
const sequelize = require('../../config/database');

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            len: {
                args: [3,255],
                msg: 'Campo nome deve ter entre 3 e 255 caracteres'
            }
        }
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            len: {
                args: [3,255],
                msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: 'E-mail já está cadastrado'
        },
        validate: {
            isEmail: {
                msg: 'E-mail inválido'
            }
        }
    },
    telefone: {
        type: Sequelize.STRING,
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: 'Usuário já existe'
        },
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    confirmarSenha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Usuario