exports.seed = async function(knex) {
    await knex('resource').insert([
        { name: 'npm', description: 'node package manager' },
        { name: 'computer'},
        { name: 'keyboard', description: 'used for typing' },
        { name: 'chair'},
        { name: 'DB Browser', description: 'software to view db' },
        { name: 'positive attitude'},
    ])
};
