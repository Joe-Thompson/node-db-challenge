exports.seed = async function(knex) {
    await knex('project').insert([
        { name: 'SQLite db', description: 'Building a restFUL api', completed: false },
        { name: 'React / Redux', description: 'Using Redux for our React SMS', completed: true },
    ])
};
