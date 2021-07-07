exports.seed = async function(knex) {
    await knex('task').insert([
        {
            description: 'turn on computer',
            note: 'Make sure its plugged in',
            project_id: 1
        },
        {
            description: 'Set up knex',
            project_id: 1
        },
        {
            description: 'make sure to create a store',
            note: 'has to be wrapped around your entry in your app',
            project_id: 2
        },
        {
            description: 'mapStateToProps',
            project_id: 2
        },
        {
            description: 'remember to seed your tables',
            project_id: 1
        },
        {
            description: 'remember your actions file',
            note: 'its where your axios calls live',
            project_id: 1
        },
    ])
};
