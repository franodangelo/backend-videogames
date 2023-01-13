const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.DB_PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${port}`); 
  })
})
