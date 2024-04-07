const conn = require("");

const user_model = {};

user_model.addUser = (data, callback) => {
  conn.query(
    `
    INSERT INTO enlaaza_db.usuario(

    )
    VALUES ();`, data, callback
  );
};

user_model.getUsers = (data, callback) => {

};

module.exports = user_model;
