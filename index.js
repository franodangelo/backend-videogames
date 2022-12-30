const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { DB_PORT } = process.env;

conn.sync({ force: true }).then(() => {
  server.listen(`0.0.0.0:${ DB_PORT }`, () => {
    console.log(`%s listening at port ${DB_PORT}`);
  })
})
