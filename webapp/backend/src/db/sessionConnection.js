const { AppDataSource } = require("../../data-source");
require("dotenv").config();

const { Pool, Client } = require("pg");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
var connectionString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_DATABASE}`;

function createConnection() {
  return new Pool({
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  });
}

function sessionConnection() {
  let pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  });

  pool.on("error", function (err) {
    console.log("cannot connect session", err);
  });

  return pool;
}

module.exports = { createConnection, sessionConnection };
