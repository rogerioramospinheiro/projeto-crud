const findAll = (db) => {
    return db('pessoas').select('*')
}

const findById = (db, id) => {
    return db('pessoas').where({id}).select('*').then(results => {
        if (results.length > 0) {
            return results[0]
        } else {
            return {}
        }
    })
}

const deleteOne = (db, id) => {
    return db('pessoas').where({id}).del()
}

const create = (db, data) => {
    return db('pessoas').insert({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    })
}

const update = (db, id, data) => {
    return db('pessoas').where({id}).update({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    })
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}