const db = require('../data/config');

module.exports = {
  getResources,
  insertResource
};

function getResources() {
    return db('resource');
}

async function insertResource(res) {
    try {
        const [ id ] = await db('resource').insert(res);
        return await db('resource').where({ id }).first();
    } catch (e) {
        console.log(e)
    }
}
