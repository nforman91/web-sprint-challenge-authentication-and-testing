
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'nathan', password: 1234},
        {username: 'madeleine', password: 5678},
      ]);
    });
};
