const db = require('../data/config');

module.exports = {
    getProjects,
    insertProject
};

function getProjects() {
    return db('project');
}

async function insertProject(pro) {
    try {
     const [ id ] = await db('project').insert(pro);
     return await db('project').where({ id }).first();
    } catch (e) {
        console.log(e)
    }
}
