const db = require('../data/config');

module.exports = {
  insertTask,
  getById
};

async function insertTask(tas) {
    try {
        const [ id ] = await db('task').insert(tas);
        return await db('task').where({ id }).first();
    } catch (e) {
        console.log(e)
    }
}

function getById(id) {
    return db('task as t')
        .join('project as p', 'p.id', 't.project_id')
        .where('p.id', id)
        .select('p.name as project',
            'p.description',
            't.description as task',
            't.note')
        .orderBy('t.id')
}
